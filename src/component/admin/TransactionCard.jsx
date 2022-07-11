import { Badge, Box, Button, Checkbox, Divider, HStack, Icon, Text } from "@chakra-ui/react"
import React from "react"
import { FaReceipt } from "react-icons/fa"
import { IoChatbubbleEllipses } from "react-icons/io5"
import moment from "moment"
import "moment/locale/id"

const TransactionCard = ({ props }) => {



    return (
        <Box padding={4} width="100%" boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)">
            <Box borderBottom="1px solid black" display="flex" justifyContent="space-between">
                <Box>
                    <HStack spacing="20px">
                        <Checkbox>Pesanan Selesai</Checkbox>
                        <Text>Nomer Pesanan</Text>
                        <Text>{moment(props.createdAt).format("LLL")}</Text>
                    </HStack>
                </Box>
                <Box>
                    <HStack spacing="10px">
                        <Text>Response Sebelum</Text>
                        <Badge>Waktu Akhir</Badge>
                    </HStack>
                </Box>
            </Box>
            <Box width="100%" display="flex" justifyContent="space-between" padding={2}>
                <HStack spacing="20px" >
                    {props.Prescription_images && props.Prescription_images.map((image => {
                        return (
                            <Box
                                width="100px"
                                height="100px"
                                backgroundImage={image.image_url}
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundPosition="center"

                            />
                        )

                    }))}
                    <Box>
                        <Text>Nama Obat lengkap ........</Text>
                        <Text>jumlah pesanan X Harga</Text>
                    </Box>
                </HStack>
                <Box height="inherit">
                    <Divider orientation="vertical" />
                </Box>
                <Box>
                    <Text>Pembeli</Text>
                    <Text>nama Pembeli</Text>
                </Box>
                <Box>
                    <Text>Alamat</Text>
                    <Text>{props.Address.alamat}</Text>
                    <Text>{props.Address.kecamatan}, {props.Address.kotaKabupaten}</Text>
                    <Text>{props.Address.provinsi} - {props.Address.kodePos}</Text>
                </Box>
                <Box>
                    <Text>Kurir</Text>
                    <Text>Name Kurir</Text>
                </Box>
                <Box />
            </Box>
            <Box alignItems="center" background="#F6FAFB" borderRadius="4px" display="flex" justifyContent="space-between" padding={3}>
                <Box>
                    <Text>Total Harga (4 Obat)</Text>
                </Box>
                <Box>Rp. 65.000</Box>
            </Box>
            <Box alignItems="center" display="flex" justifyContent="space-between" padding={2}>
                <HStack spacing={5}>
                    <Box alignItems="center">
                        <Icon as={IoChatbubbleEllipses} mr={1} />
                        Chat Pembeli
                    </Box>
                    <Box alignItems="center">
                        <Icon as={FaReceipt} mr={1} />
                        Detail Pemesanan
                    </Box>
                </HStack>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <HStack spacing={5}>
                        <Text>Tolak Pesanan</Text>
                        <Button>Terima Pesanan</Button>
                    </HStack>
                </Box>
            </Box>
        </Box >
    )
}

export default TransactionCard