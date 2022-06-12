import React from "react"
import { Badge, Box, Button, Divider, Grid, GridItem, Icon, IconButton, Img, Text } from "@chakra-ui/react"
import { BsPlusLg } from "react-icons/bs"

const checkout = () => {
    return (
        <Grid
            templateColumns='repeat(6, 1fr)'
            templateRows='repeat(2, 1fr)'
            gap={6}
            paddingX={6}
        >
            <GridItem rowSpan={1} colSpan={[6, 6, 4]}>
                <Grid
                    templateColumns='repeat(3, 1fr)'
                    templateRows='repeat(2, 1fr)'
                >
                    <GridItem colSpan={3} rowSpan={1}>
                        <Text
                            variant="title"
                        >Alamat Pengiriman</Text>
                        <Divider />
                        <Box
                            justifyContent="space-between"
                            display="flex"
                        >
                            <Text variant="subtitle">Jane Doe, +02123456789</Text>
                            <Text variant="subtitle">Pilih Alamat Lain</Text>

                        </Box>
                        <Divider />
                        <Box>
                            <Text>alamat lengkap</Text>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" justifyContent={["center", "left", "left"]} mt={2}>
                            <IconButton size={["xs", "sm", "sm"]} mr={3} color="teal" boxShadow="2xl" borderRadius="50%">
                                <Icon as={BsPlusLg} />
                            </IconButton>
                            <Text variant="subtitle">Tambah Alamat Baru</Text>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={2}>
                        <Box>
                            <Text variant="title">Ringkasan Order</Text>
                        </Box>
                        <Divider />
                        <Grid templateColumns="repeat(5, 1fr)" gap={2} templateRows='repeat(2, 1fr)' >
                            <GridItem colSpan={1} rowSpan={2}>
                                <Img src="https://static.hdmall.id/system/image_attachments/images/000/008/720/original/bisolvon-8mg-tab-str-4s-1.jpg" />
                            </GridItem>
                            <GridItem colSpan={3} rowSpan={1} padding={2} alignItems="center">
                                <Box justifyContent="space-between" display="flex" alignItems="center">
                                    <Text variant="caption-bold">Bisolovon</Text>
                                    <Badge>
                                        <Text as='s'>Rp.17.000</Text>
                                    </Badge>
                                </Box>
                                <Text variant="caption-bold">4 tablet</Text>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} padding={2}>
                                <Text variant="caption-bold">Rp.13.000</Text>
                            </GridItem>
                            <GridItem colSpan={3} rowSpan={1} padding={2}>
                                <Text variant="caption-bold">SubTotal</Text>
                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} padding={2}>
                                <Text variant="caption-bold">Rp.13.000</Text>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem rowSpan={1} colSpan={[6, 2, 2]}>
                <Box>
                    <Text variant="title" display={["none", "flex", "flex"]}>Total</Text>
                </Box>
                <Divider />
                <Box mt={2} justifyContent="space-between" display="flex" alignItems="center">
                    <Text variant="caption-bold">Sub Total</Text>
                    <Text variant="caption-bold">Rp. 13.000</Text>
                </Box>
                <Box my={2} justifyContent="space-between" display="flex" alignItems="center" >
                    <Text variant="caption-bold">Pengiriman</Text>
                    <Text variant="caption-bold">Rp. 9.000</Text>
                </Box>
                <Divider />
                <Box my={2} justifyContent="space-between" display="flex" alignItems="center" >
                    <Text variant="title">Total</Text>
                    <Text variant="title">Rp. 22.000</Text>
                </Box>
                <Divider />
                <Box justifyContent="space-between" display="blok" alignItems="center" >
                    <Box mt={5}>
                        <Text variant="title" display={["none", "flex", "flex"]}>Metode Pembayaran</Text>
                        <Text display={["none", "flex", "flex"]}>Silahkan pilih metode pembayaran anda disini</Text>
                    </Box>
                    <Box mt={5}>
                        <Button variant="main" width="full">Pilih Metode Pembayaran</Button>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default checkout