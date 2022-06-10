import React from "react"
import { Badge, Box, Button, Container, Grid, GridItem, Icon, Img, Text } from "@chakra-ui/react"
import { BsPlusCircle } from "react-icons/bs"

const checkOut = () => {
    return (
        <Container
            maxWidth="90%"
            margin={4}
        >
            <Grid
                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={4}
            >
                <GridItem
                    colSpan={2}
                    rowSpan={3}
                    padding={4}
                    boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                    borderRadius="16px"
                >

                    <Text
                        variant="title"
                    >Alamat Pengiriman</Text>

                    <Box
                        justifyContent="space-between"
                        display="flex"
                        borderBottom="1px solid teal"
                        borderTop="1px solid teal"
                    >
                        <Text variant="subtitle">Jane Doe, +02123456789</Text>
                        <Text variant="subtitle">Pilih Alamat Lain</Text>

                    </Box>
                    <Box>
                        <Text>alamat lengkap</Text>
                    </Box>
                    <Box borderTop="1px solid teal" display="flex" alignItems="center">
                        <Icon as={BsPlusCircle} mr={2} />
                        <Text variant="subtitle">Tambah Alamat Baru</Text>
                    </Box>
                </GridItem>

                <GridItem
                    colSpan={1}
                    rowSpan={4}
                    boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                    borderRadius="16px"
                    padding={4}
                >
                    <Box>
                        <Text variant="title">Total</Text>
                    </Box>
                    <Box justifyContent="space-between" display="flex" alignItems="center">
                        <Text>Sub Total</Text>
                        <Text>Rp. 13.000</Text>
                    </Box>
                    <Box justifyContent="space-between" display="flex" alignItems="center" >
                        <Text>Pengiriman</Text>
                        <Text>Rp. 9.000</Text>
                    </Box>
                    <Box justifyContent="space-between" display="flex" alignItems="center" borderTop="1px solid black">
                        <Text variant="title">Total</Text>
                        <Text variant="title">Rp. 22.000</Text>
                    </Box>
                    <Box justifyContent="space-between" display="blok" alignItems="center" borderTop="1px solid black">
                        <Box>
                            <Text variant="title">Metode Pembayaran</Text>
                            <Text>Silahkan pilih metode pembayaran anda disini</Text>
                        </Box>
                        <Box>
                            <Button mb={5} variant="main" width="full">Pilih Metode Pembayaran</Button>
                            <Button variant="main-outline" width="full">Pilih Metode Pembayaran</Button>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem
                    colSpan={2}
                    rowSpan={3}
                    boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                    borderRadius="16px"
                    padding={4}
                >
                    <Box borderBottom="1px solid teal">
                        <Text variant="title">Ringkasan Order</Text>
                    </Box>
                    <Grid templateColumns="repeat(5, 1fr)" gap={2} templateRows='repeat(2, 1fr)' >
                        <GridItem colSpan={1} rowSpan={2}>
                            <Img src="https://static.hdmall.id/system/image_attachments/images/000/008/720/original/bisolvon-8mg-tab-str-4s-1.jpg" />
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={1} padding={2} alignItems="center">
                            <Box justifyContent="space-between" display="flex" alignItems="center">
                                <Text >Bisolovon</Text>
                                <Badge>
                                    <Text as='s'>Rp.17.000</Text>
                                </Badge>
                            </Box>
                            <Text>4 tablet</Text>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} padding={2}>
                            <Text>Rp.13.000</Text>
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={1} padding={2}>
                            <Text>SubTotal</Text>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} padding={2}>
                            <Text>Rp.13.000</Text>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default checkOut