import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    HStack,
    BreadcrumbItem,
    Breadcrumb,
    Box,
    GridItem,
    Grid,
    useToast,
} from "@chakra-ui/react"
import api from "../../lib/api"

const ApproveTransaction = ({ transactionDetail, username, dateOrder, nomerPesanan, totalPrice, itemsLength, payment, TransactionId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const updateStatusPayment = async (dataStatus = {}) => {
        try {
            const res = await api.patch(`/transaction/${TransactionId}/transaction-status`, dataStatus)
            toast({
                title: "success",
                status: "success",
                description: res?.data?.message || "transaction approved successfuly",
                duration: 5000,
                isClosable: true
            })
        } catch (err) {
            toast({
                status: "error",
                title: "error",
                description: "erorr update Payment status",
                duration: 5000,
                isClosable: true
            })
        }
    }
    return (
        <>
            <Button onClick={onOpen} colorScheme="teal">Terima Pesanan</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center"><Text >Ringkasan Pesanan</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Breadcrumb mb={4}>
                            <BreadcrumbItem><Text><b>{username}</b></Text></BreadcrumbItem>
                            <BreadcrumbItem><Text><b>{nomerPesanan}</b></Text></BreadcrumbItem>
                            <BreadcrumbItem><Text>{dateOrder}</Text></BreadcrumbItem>
                        </Breadcrumb>
                        <Grid templateColumns="repeat(2,1fr)">
                            <GridItem colSpan={1}>
                                {transactionDetail.length !== 0 && transactionDetail.map((val) => {
                                    return (
                                        <div key={val.id}>
                                            <Text variant="subtitle" fontSize="16px">{val.Product.med_name}</Text>
                                            <HStack spacing={5} mb={2} key={val.id} >
                                                <Text variant="caption" >{val?.Product?.category?.category_name}</Text>
                                                <Text variant="caption" >{val?.Product?.kemasan}</Text>
                                                <Text variant="caption" >{val?.quantity} X {val?.price}</Text>
                                            </HStack>
                                        </div>
                                    )
                                })}
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Text variant="subtitle" fontSize="16px">Bukti Pembayaran</Text>
                                <Box h="300px" width="250px" overflow="scroll" border="1px solid teal" mb={2}>
                                    <Box
                                        backgroundImage={payment.image_url}
                                        backgroundRepeat="no-repeat"
                                        backgroundSize="contain"
                                        backgroundPosition="center"
                                        display="flex"
                                        justifyContent="end"
                                        h="300px"
                                        width="250px"
                                    />
                                </Box>
                            </GridItem>
                        </Grid>

                        <Box alignItems="center" background="#F6FAFB" borderRadius="4px" display="flex" justifyContent="space-between" padding={3}>
                            {transactionDetail.length !== 0 &&
                                <>
                                    <Box>
                                        <Text><b>Total Harga</b> ( {itemsLength} obat )</Text>
                                    </Box>
                                    <Box><b>Rp.{totalPrice}</b></Box>
                                </>
                            }
                        </Box>
                    </ModalBody>

                    <ModalFooter borderTop="2px solid teal">
                        <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
                            Kembali
                        </Button>
                        <Button colorScheme="teal" onClick={() => updateStatusPayment({ isPaid: true, isPacking: true })}>Approve</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ApproveTransaction