import { Box, Button, Checkbox, Divider, HStack, Icon, Stack, Text, useToast } from "@chakra-ui/react"
import React from "react"
import { IoChatbubbleEllipses } from "react-icons/io5"
import moment from "moment"
import "moment/locale/id"
import { TbClock } from "react-icons/tb"
import { MdArrowDropDown } from "react-icons/md"
import PrescriptionsHandler from "./PrescriptionsHandler"
import TransactionDetail from "./TransactionDetail"
import ApproveTransaction from "./ApproveTransaction"
import api from "../../lib/api"

const TransactionCard = ({ props, fetchTransaction }) => {

    const toast = useToast()

    const updateStatusPayment = async (dataStatus = {}) => {
        try {
            const res = await api.patch(`/transaction/${props.id}/transaction-status`, dataStatus)
            toast({
                title: "success",
                status: "success",
                description: res?.data?.message || "transaction approved successfuly",
                duration: 5000,
                isClosable: true
            })
            fetchTransaction()
        } catch (err) {
            toast({
                status: "error",
                title: "error",
                description: err?.response?.data?.message || err?.message,
                duration: 5000,
                isClosable: true
            })
        }
    }

    const cancelHandler = async () => {
        try {

            const res = await api.post("/transaction/cancel", props)
            toast({
                title: "success",
                status: "success",
                description: res?.data?.message || "transaction canceled successfuly",
                duration: 5000,
                isClosable: true
            })
            fetchTransaction()
        } catch (err) {
            toast({
                status: "error",
                title: "error",
                description: err?.response?.data?.message || err?.message,
                duration: 5000,
                isClosable: true
            })
        }
    }

    return (
        <Box mt={4} bgColor="whiteAlpha.800" padding={4} width="100%" boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)">
            <Box borderBottom="1px solid black" display="flex" justifyContent="space-between" paddingBottom={2}>
                <Box>
                    <HStack spacing="20px">
                        {props.isSend === true && props.isDone === false &&
                            <Checkbox>Pesanan Dalam Pengiriman</Checkbox>
                        }
                        {props.isDone === true &&
                            <Checkbox>Pesanan Selesai</Checkbox>
                        }
                        {props.isPaid === false && props.isValid === true &&
                            <Checkbox>Pesanan Baru</Checkbox>
                        }
                        {props.isPacking === true && props.isSend === false &&
                            <Checkbox>Pesanan Siap dikirim</Checkbox>
                        }
                        {props.isValid === false &&
                            <Checkbox>Pesanan Dibatalkan</Checkbox>
                        }
                        <Text>{props?.nomer_pesanan}</Text>
                        <Text alignItems="center">{moment(props.createdAt).format("LLL")}</Text>
                    </HStack>
                </Box>
                <Box>
                    <HStack spacing="10px">
                        <Text>Response Sebelum</Text>
                        <Box alignItems="center" display="flex" paddingX={2} background="rgba(255, 222, 107, 0.3)">
                            <Icon as={TbClock} mr={1} />{moment(props.createdAt).add(2, "days").format("LLL")}
                        </Box>
                    </HStack>
                </Box>
            </Box>
            <Box width="100%" display="flex" justifyContent="space-between" padding={2}>
                <Box display="flex" justifyContent="space-between">
                    {props.Prescription_images.length !== 0 &&
                        <>
                            <Box
                                width="100px"
                                height="100px"
                                backgroundImage={`url(${props?.Prescription_images[0]?.image_url})`}
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundPosition="center"
                                mr={5}
                            />
                            <Box>
                                <Text mb={2}>Resep Dokter</Text>
                                <PrescriptionsHandler key={props?.id} image={props?.Prescription_images} orderDate={props?.createdAt} transactionId={props?.id} fetchTransaction={fetchTransaction} />
                            </Box>
                        </>
                    }
                    {props.Prescription_images.length === 0 &&
                        <>
                            <Box
                                width="100px"
                                height="100px"
                                backgroundImage={`url(${props?.Transaction_items[0]?.Product?.Product_images[0]?.image_url})`}
                                backgroundRepeat="no-repeat"
                                backgroundSize="contain"
                                backgroundPosition="center"
                                mr={5}
                            />
                            <Box>
                                <Text >{props?.Transaction_items[0]?.Product?.med_name}</Text>
                                <Text mb={2} fontSize="12px" >{props?.Transaction_items[0]?.quantity} X {props?.Transaction_items[0]?.price.toLocaleString()}</Text>
                                <Box alignItems="center" display="flex" >
                                    <Text fontSize="12px" color="teal" mb={2} fontWeight={400}>lihat {props.Transaction_items.length - 1} obat lainnya </Text>
                                    <MdArrowDropDown />
                                </Box>
                            </Box>
                        </>
                    }
                </Box>
                <Stack direction="row" height="inherit" paddingY={4}>
                    <Divider orientation="vertical" />
                </Stack>
                <Box ml="-50px">
                    <Text><b>Pembeli</b></Text>
                    <Text>{props.User.name}</Text>
                </Box>
                <Box>
                    <Text><b>Alamat</b></Text>
                    <Text>{props?.Address?.alamat}</Text>
                    <Text>{props?.Address?.kecamatan}, {props?.Address?.kotaKabupaten}</Text>
                    <Text>{props?.Address?.provinsi} - {props?.Address?.kodePos}</Text>
                </Box>
                <Box>
                    <Text><b>Kurir</b></Text>
                    <Text>{props?.kurir?.toUpperCase()}</Text>
                </Box>
                <Box />
            </Box>
            <Box height="40px" alignItems="center" background="#F6FAFB" borderRadius="4px" display="flex" justifyContent="space-between" padding={3}>
                {props?.Transaction_items.length !== 0 &&
                    <>
                        <Box>
                            <Text><b>Total Harga</b> ({props.Transaction_items.length} obat)</Text>
                        </Box>
                        <Box><b>Rp.{props?.total_price.toLocaleString()}</b></Box>
                    </>
                }
            </Box>
            <Box alignItems="center" display="flex" justifyContent="space-between" padding={2}>
                <HStack spacing={5}>
                    <Button variant="ghost" colorScheme="teal"><Icon as={IoChatbubbleEllipses} mr={1} />
                        Chat Pembeli</Button>
                    <TransactionDetail
                        key={props.id}
                        transactionDetail={props.Transaction_items}
                        nomerPesanan={props.nomer_pesanan}
                        username={props.User.name}
                        dateOrder={moment(props.createdAt).format("LLL")}
                        totalPrice={props.total_price}
                        itemsLength={props.Transaction_items.length}
                        payment={props.Payments}
                    />
                </HStack>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <HStack spacing={5}>
                        {props.isValid === true && props.isSend === false && props.isPacking === false &&
                            <Button variant="ghost" colorScheme="teal" onClick={() => cancelHandler()}>Tolak Pesanan</Button>
                        }
                        {props.isPaid === false && props.isValid === true &&
                            <ApproveTransaction
                                key={props.id}
                                transactionDetail={props.Transaction_items}
                                nomerPesanan={props.nomer_pesanan}
                                username={props.User.name}
                                dateOrder={moment(props.createdAt).format("LLL")}
                                totalPrice={props.total_price}
                                itemsLength={props.Transaction_items.length}
                                payment={props.Payments}
                                TransactionId={props.id}
                                updateStatusPayment={updateStatusPayment}
                            />
                        }
                        {props.isPacking === true && props.isSend === false && props.isValid === true &&
                            <Button colorScheme="teal" onClick={() => updateStatusPayment({ isSend: true })}>Minta Penjemputan</Button>
                        }
                        {props.isPacking === true && props.isSend === true && props.isValid === true && props.isDone === false &&
                            <Button colorScheme="teal" onClick={() => updateStatusPayment({ isDone: true })}>Pesanan Selesai</Button>
                        }
                        {props.isDone === true && props.isValid === true &&
                            <Button variant="ghost" colorScheme="teal">Selesai</Button>
                        }
                    </HStack>
                </Box>
            </Box>
        </Box >
    )
}

export default TransactionCard