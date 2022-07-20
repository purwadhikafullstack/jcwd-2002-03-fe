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
    Icon,
} from "@chakra-ui/react"
import { FaReceipt } from "react-icons/fa"

const TransactionDetail = ({ transactionDetail, username, dateOrder, nomerPesanan, totalPrice, itemsLength, payment }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} variant="ghost" colorScheme="teal"><Icon as={FaReceipt} mr="2" /> Detail Pesanan</Button>

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

                        <Box alignItems="center" background="#F6FAFB" borderRadius="4px" display="flex" justifyContent="space-between" padding={3}>
                            {transactionDetail.length !== 0 &&
                                <>
                                    <Box>
                                        <Text><b>Total Harga</b> ( {itemsLength} obat )</Text>
                                    </Box>
                                    <Box><b>Rp.{totalPrice && totalPrice.toLocaleString()}</b></Box>
                                </>
                            }
                        </Box>
                    </ModalBody>

                    <ModalFooter borderTop="2px solid teal">
                        <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
                            Kembali
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TransactionDetail