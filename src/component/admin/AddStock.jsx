import { AddIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { useFormik } from "formik";
import React, { useEffect, useState } from "react"
import api from "../../lib/api"

const AddStock = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [productList, setProductList] = useState()
    const [amount, setAmount] = useState(0)
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            amount: 0,
            ProductId: 0,
            med_name: ""
        },
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                const res = await api.post("/inventory/purchase", values)
                const data = res?.data?.result

                if (data.message !== undefined) {
                    toast({
                        status: "success",
                        title: "add mutation success",
                        description: data.message,
                        isClosable: true,
                        duration: 300
                    })
                    formik.isSubmitting(false)
                    formik.values.amount = 0
                    formik.values.ProductId = 0
                    formik.valued.med_name = ""
                }
            } catch (err) {
                toast({
                    status: "error",
                    title: "error input product",
                    description: err?.response?.data?.message || err.message,
                    duration: 9000,
                    position: "top-right",
                    isClosable: true,
                });
                formik.setSubmitting(false);
            }
        }

    })

    const inputHandler = (e) => {
        const { value, name } = e.target
        formik.setFieldValue(name, value)
    }

    const fetchProduct = async () => {
        try {
            const res = await api.get("/product/list")
            const data = res?.data?.result
            setProductList(data)

        } catch (err) {
            toast({
                status: "error",
                title: "delete fail",
                description: err?.response?.data?.message || err.message,
                duration: 5000,
                position: "top-right",
                isClosable: true,

            })

        }
    }

    const increaseAmount = () => {
        setAmount(prev => prev + 1)
    }

    const decreaseAmount = () => {
        if (amount < 2) {
            setAmount(1)
        }
        setAmount(prev => prev - 1)
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <>
            <Button
                onClick={onOpen}
                leftIcon={<AddIcon size="20" />}
                fontSize="12px"
                colorScheme="teal"
                mt="32px"
                variant="main"
                width="xs"
                mr="32px"
            >
                Tambah Stock
            </Button>
            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onOpen}
                size="2xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="20px" fontWeight="bold">
                        Tambah Stok
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody mt="30px">

                        <HStack mb="12px">
                            <Text mr="104px">Kuantitas</Text>
                            <HStack maxW="320px">
                                <Button onClick={() => decreaseAmount()} >-</Button>
                                <Input textAlign="center" maxW="55px" name="amount" value={amount} type="number" onChange={inputHandler} />
                                <Button onClick={() => increaseAmount()} >+</Button>
                            </HStack>
                        </HStack>

                        <HStack mb="12px">
                            <Text mr="91px">Nama obat</Text>
                            <Select
                                w="auto"
                                minW="141px"
                                bg="white"
                                color="black"
                                placeholder="Pilih Obat"
                                name="ProductId"
                                onChange={inputHandler}
                                overflow="auto"
                            >
                                {productList && productList.map((val) => {
                                    return (<option value={val.id} key={val.id}>{val.med_name}</option>)
                                })}
                            </Select>
                        </HStack>

                        <HStack mb="12px">
                            <Text mr="105px">Nilai Beli</Text>
                            <Input
                                fontSize="12px"
                                w="auto"
                                minW="226px"
                                placeholder="Masukkan nilai jual"
                            />
                        </HStack>

                        <HStack mb="12px">
                            <Text mr="105px">Tanggal Expired</Text>
                            <Input
                                fontSize="12px"
                                w="auto"
                                minW="226px"
                                placeholder="Masukkan Tanggal Expired"
                                type="date"
                            />
                        </HStack>

                        <Divider border="2px" mt="20px" minW="full" />

                        <Flex ml="32px" mb="16px" mt="16px" justify="right">
                            <Button
                                onClick={onClose}
                                colorScheme="yellow"
                                fontSize="14px"
                                w="auto"
                                minW="156px"
                            >
                                Batal
                            </Button>
                            <Button
                                ml="3"
                                colorScheme="teal"
                                fontSize="14px"
                                w="auto"
                                minW="156px"
                                type="submit"
                                onClick={formik.setSubmitting}
                                isLoading={formik.isSubmitting}
                                disabled={formik.isSubmitting}
                            >
                                Simpan
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddStock