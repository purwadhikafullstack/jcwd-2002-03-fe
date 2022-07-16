import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Grid, GridItem, Box, HStack, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, Select, FormControl, FormLabel, useToast, IconButton, TableContainer, Tr, Thead, Th, Td, Tbody, Table, } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import moment from "moment"
import { useFormik } from "formik"
import api from "../../lib/api"

const PrescriptionsHandler = ({ image, orderDate, transactionId, fetchTransaction }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [productList, setProductList] = useState([])
    const [arrayOfItem, setArrayOfItem] = useState([])
    const [quantityItem, setQuantityItem] = useState(1)
    const [selectedItem, setSelectedItem] = useState(
        {
            ProductId: 0,
            price: 0,
            quantity: 1,
            name: "",
            TransactionId: transactionId,
            sub_total: 0
        }
    )
    const toast = useToast()
    const initialRef = useRef(null)

    const formik = useFormik({
        initialValues: [],
        validateOnChange: false,
        onSubmit: async () => {
            try {
                const res = await api.post("/transaction/prescription/new-items", arrayOfItem)
                toast({
                    title: "success",
                    status: "success",
                    description: res.data.message,
                    duration: 5000,
                    isClosable: true
                })
                formik.setSubmitting(false);
                setArrayOfItem([])
                fetchTransaction()
                onClose()
            } catch (err) {
                toast({
                    titel: "error",
                    status: "error",
                    description: err?.message || err?.response?.data?.message,
                    duration: 5000,
                    isClosable: true
                })
            }
        }
    })

    const quantityManipulation = (dir) => {
        if (dir === "inc") {
            return setQuantityItem(prev => prev + 1)
        }
        if (dir === "dec") {
            if (quantityItem < 2) {
                return setQuantityItem(1)
            }
            return setQuantityItem(prev => prev - 1)
        }
        return quantityItem
    }

    const fetchProduct = async (
        queryParams = {
            params: {
                _sortBy: "med_name",
                _sortDir: "ASC",
                _limit: 30,
            },
        }
    ) => {
        try {
            onOpen()
            const res = await api.get("/product", queryParams)
            const data = res?.data?.result.result.rows
            setProductList(data)
        } catch (err) {
            toast({
                title: "error",
                status: "error",
                description: err?.response?.data?.message || err?.message,
                duration: 3000,
                isClosable: true
            })
        }
    }

    const inputHandler = (event) => {
        const { value } = event.target;
        const parseData = JSON.parse(value)
        const priceAfterDiscount = parseData.selling_price * parseData.discount
        setSelectedItem({
            name: parseData.med_name,
            ProductId: parseData.id,
            price: priceAfterDiscount,
            quantity: quantityItem,
            sub_total: 0,
            TransactionId: transactionId
        })
    };

    const addTransaction = () => {
        const subTotal = (selectedItem.price * quantityItem)
        setArrayOfItem(prev => [...prev, { ...selectedItem, quantity: quantityItem, sub_total: subTotal }])
        setSelectedItem({
            ProductId: 0,
            price: 0,
            quantity: 1,
            name: "",
            TransactionId: transactionId,
            sub_total: 0
        })
        setQuantityItem(1)
        fetchProduct()
    }

    return (
        <>
            <Button colorScheme="teal" height="32px" onClick={() => fetchProduct()}>Buat Salinan Resep</Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Buat Salinan Resep</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                            <GridItem colSpan={3}>
                                <Box
                                    height="300px"
                                    width="100%"
                                    backgroundImage={image[0].image_url}
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundPosition="center"
                                    mr={5}
                                />
                                {arrayOfItem.length !== 0 &&
                                    <Box height="100px" mt={2} border="1px solid teal">
                                        <TableContainer
                                            overflowX="scroll"
                                            overflowY="scroll"
                                            whiteSpace="nowrap"
                                            height="100px"
                                            color
                                        >
                                            <Table variant='striped' colorScheme="teal" textAlign="center">
                                                <Thead color="teal">
                                                    <Tr>
                                                        <Th>Nama Obat</Th>
                                                        <Th>Quantity</Th>
                                                        <Th>Price/pcs</Th>
                                                        <Th>Subtotal</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody >
                                                    {arrayOfItem.map((val) => {
                                                        return (
                                                            <Tr key={val.name}>
                                                                <Td>{val.name}</Td>
                                                                <Td>{val.quantity}</Td>
                                                                <Td>{val.price.toLocaleString()}</Td>
                                                                <Td>Rp. {val.sub_total.toLocaleString()}</Td>
                                                            </Tr>
                                                        )
                                                    })}
                                                </Tbody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                }
                            </GridItem>
                            <GridItem colSpan={4}>
                                <FormControl>
                                    <Stack spacing={3}>
                                        <HStack>
                                            <Box>
                                                <FormLabel fontSize="12px">Nomer Pemesanan</FormLabel>
                                                <Input fontSize="12px" placeholder="Nomer Pemesanan" height="28px" disabled />
                                            </Box>
                                            <Box>
                                                <FormLabel fontSize="12px">Tanggal Pemesanan</FormLabel>
                                                <Input fontSize="12px" placeholder={moment(orderDate).format("l")} height="28px" disabled />
                                            </Box>
                                        </HStack>
                                        <FormLabel fontSize="12px">Nama Pasien</FormLabel>
                                        <Input fontSize="12px" placeholder="Nama Pasien" height="28px" ref={initialRef} />
                                        <FormLabel fontSize="12px">Nama Dokter</FormLabel>
                                        <Input fontSize="12px" placeholder="Nama Dokter" height="28px" />
                                    </Stack>
                                    <Tabs variant='enclosed' mt={4}>
                                        <TabList>
                                            <Tab fontSize="12px" _focus={{ borderBottomColor: "teal", outline: 0 }} _selected={{ color: "teal", fontWeight: "600" }}>Tambah Obat Resep</Tab>
                                            <Tab fontSize="12px" _focus={{ borderBottomColor: "teal", outline: 0 }} _selected={{ color: "teal", fontWeight: "600" }}>Tambah Obat Bebas</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel padding={0} marginX={0} mt={2}>
                                                <Stack spacing={3}>
                                                    <Box>
                                                        <FormLabel fontSize="12px">Nama Obat</FormLabel>
                                                        <Select name="product" fontSize="12px" placeholder="Masukan Nama obat" height="28px"
                                                            onChange={inputHandler}>
                                                            {productList.length !== 0 && productList?.map((val) => {
                                                                return val.categoryId === 2 && <option key={val.id} value={JSON.stringify(val)}>{val.med_name}</option>
                                                            })}
                                                        </Select>
                                                    </Box>
                                                    <Box>
                                                        <FormLabel fontSize="12px">Kuantitas</FormLabel>
                                                        <HStack>
                                                            <Box width="50%" mr={2} display="flex" alignItems="center" justifyContent="center">
                                                                <IconButton fontSize="12px" height="28px" onClick={() => quantityManipulation("dec")}>
                                                                    <MinusIcon />
                                                                </IconButton>
                                                                <Input
                                                                    type="number"
                                                                    textAlign="center"
                                                                    value={quantityItem}
                                                                    name="quantity"
                                                                    fontSize="12px"
                                                                    height="28px"
                                                                    onChange={(e) => e.target.value}
                                                                />
                                                                <IconButton fontSize="12px" height="28px" onClick={() => quantityManipulation("inc")}>
                                                                    <AddIcon />
                                                                </IconButton >
                                                            </Box>
                                                            <Button
                                                                height="28px"
                                                                disabled={!selectedItem.ProductId}
                                                                onClick={() => addTransaction()}
                                                            >Tambah</Button>
                                                        </HStack>
                                                    </Box>
                                                </Stack>
                                            </TabPanel>
                                            <TabPanel padding={0} marginX={0} mt={2}>
                                                <Stack spacing={3}>
                                                    <Box>
                                                        <FormLabel fontSize="12px">Nama Obat</FormLabel>
                                                        <Select name="product" fontSize="12px" placeholder="Masukan Nama obat" height="28px"
                                                            onChange={inputHandler}>
                                                            {productList.length !== 0 && productList?.map((val) => {
                                                                return val.categoryId === 1 && <option key={val.id} value={JSON.stringify(val)}>{val.med_name}</option>
                                                            })}
                                                        </Select>
                                                    </Box>
                                                    <Box>
                                                        <FormLabel fontSize="12px">Kuantitas</FormLabel>
                                                        <HStack spacing={2}>
                                                            <Box width="50%" mr={2} display="flex" alignItems="center" justifyContent="center">
                                                                <IconButton fontSize="12px" height="28px" onClick={() => quantityManipulation("dec")}>
                                                                    <MinusIcon />
                                                                </IconButton>
                                                                <Input
                                                                    type="number"
                                                                    textAlign="center"
                                                                    value={quantityItem}
                                                                    name="quantity"
                                                                    fontSize="12px"
                                                                    height="28px"
                                                                    onChange={(e) => e.target.value}
                                                                />
                                                                <IconButton fontSize="12px" height="28px" onClick={() => quantityManipulation("inc")}>
                                                                    <AddIcon />
                                                                </IconButton >
                                                            </Box>
                                                            <Button
                                                                height="28px"
                                                                disabled={!selectedItem.ProductId}
                                                                onClick={() => addTransaction()}
                                                            >Tambah</Button>
                                                        </HStack>
                                                    </Box>
                                                </Stack>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </FormControl>
                            </GridItem>
                        </Grid>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => onClose() && setArrayOfItem([])}>
                            Close
                        </Button>
                        <Button
                            colorScheme="teal"
                            onClick={formik.handleSubmit}
                            type="submit"
                            isLoading={formik.isSubmitting}
                            disabled={formik.isSubmitting || arrayOfItem.length === 0}
                        >Proses Resep</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}

export default PrescriptionsHandler