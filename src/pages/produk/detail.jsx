import React from "react"
import { Badge, Box, Button, Grid, GridItem, Icon, IconButton, Table, TableContainer, Tbody, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react"
import { HiPlus, HiMinus, HiShoppingCart, HiOutlineHeart, HiOutlineShare, HiOutlineChat } from "react-icons/hi"

const detail = () => {

    const tabelShow = useBreakpointValue({
        base: (
            <Tbody>
                <Tr>
                    <Td>
                        <Text variant="subtitle-bold"> Indikasi/Kegunaan</Text>
                        <Text variant="subtitle"> Indikasi/Kegunaan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Kandungan/Komposisi</Text>
                        <Text fontWeight={400} fontSize={14}> Kandungan/Komposisi</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Kemasan</Text>
                        <Text fontWeight={400} fontSize={14}> Kemasan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Golongan</Text>
                        <Text fontWeight={400} fontSize={14}> Golongan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Butuh Resep</Text>
                        <Text fontWeight={400} fontSize={14}> Butuh Resep</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Cara Penyimpanan</Text>
                        <Text fontWeight={400} fontSize={14}> Cara Penyimpanan</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Principal</Text>
                        <Text fontWeight={400} fontSize={14}> Principal</Text>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Text fontWeight={700} fontSize={16}> Nomer Ijin Edar (NIE)</Text>
                        <Text fontWeight={400} fontSize={14}> Nomer Ijin Edar (NIE)</Text>
                    </Td>
                </Tr>
            </Tbody>

        ),
        md: (
            <Tbody>
                <Tr>
                    <Td>Indikasi/Kegunaan</Td>
                    <Td>Indikasi/Kegunaan</Td>
                </Tr>
                <Tr>
                    <Td>Kandungan/Komposisi</Td>
                    <Td>Kandungan/Komposisi</Td>
                </Tr>
                <Tr>
                    <Td>Kemasan</Td>
                    <Td>Kemasan</Td>
                </Tr>
                <Tr>
                    <Td>Golongan</Td>
                    <Td>Golongan</Td>
                </Tr>
                <Tr>
                    <Td>Butuh Resep</Td>
                    <Td>Butuh Resep</Td>
                </Tr>
                <Tr>
                    <Td>Cara Penyimpanan</Td>
                    <Td>Cara Penyimpanan</Td>
                </Tr>
                <Tr>
                    <Td>Proncipal</Td>
                    <Td>Proncipal</Td>
                </Tr>
                <Tr>
                    <Td>Nomer Ijin Edar (NIE)</Td>
                    <Td>Nomer Ijin Edar (NIE)</Td>
                </Tr>
            </Tbody>
        )
    })

    return (
        <Grid
            templateRows={["repeat(3)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
            templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)", "repeat(5, 1fr)"]}
            gap={4}
            alignContent="center"
            w={["100%", "90", "90%"]}
            marginLeft="auto"
            marginRight="auto"
        >

            <GridItem rowSpan={[1, 2, 2]} colSpan={[1, 2, 2]} bg='tomato' padding={6}  >
                <Box mb={[3, 8, 8]} />

                <Box>
                    <Button width="40%" variant="main" mr={5} borderRadius="130px" alignItems="center"  >
                        <Icon mr={2} as={HiOutlineChat} />
                        Chat Admin
                    </Button>
                    <Button width="40%" variant="main" borderRadius="130px" alignItems="center" >
                        <Icon mr={2} as={HiOutlineShare} />
                        Bagikan
                    </Button>
                </Box>
            </GridItem>
            <GridItem hight={["auto", "auto", "auto"]} padding={3} colSpan={[1, 3, 3]} rowSpan={[1, 1, 1]} bg='papayawhip' >
                <Box>
                    <Text variant='mini-title'>Bisolvon</Text>
                    <Text variant="caption-ligth">Bisolvon 8MG 4 Tablet</Text>
                    <Box display="flex" alignItems='center'>
                        <Text variant="title">Rp. 13.000</Text> &nbsp;
                        <Text variant="caption"> / per strip(4 tablet)</Text>
                    </Box>
                    <Text as='s' variant="caption">Rp.17.000</Text>
                    <Badge ml={2}>17%</Badge>
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton>
                        <Icon as={HiMinus} />
                    </IconButton>

                    <Box width="40%" variant="main" margin="5" w="10" textAlign="center">1</Box>
                    <IconButton>
                        <Icon as={HiPlus} />
                    </IconButton>
                    <Text variant="caption-bold" ml={5}> Sisa 20 Strips</Text>
                </Box>
                <Box>
                    <Box display="flex" alignItems="center"  >
                        <Button width="30%" variant="main">
                            <Icon mr={2} as={HiShoppingCart} />
                            keranjang
                        </Button >
                        <Button width="30%" variant="main" ml={5}>
                            Beli
                        </Button>
                        <Icon ml={5} as={HiOutlineHeart} />
                    </Box>
                </Box>
            </GridItem>
            <GridItem padding={3} colSpan={[1, 3, 3]} rowSpan={[1, 2, 2]} >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    borderTop="1px solid black"
                    borderBottom="1px solid black"
                    height="50px"
                >
                    <Box as="button">
                        Deskripsi
                    </Box>
                    <Box as="button">
                        Cara Pakai
                    </Box>
                    <Box as="button">
                        Peringatan
                    </Box>
                </Box>
                <TableContainer>
                    <Table variant='simple'>
                        {tabelShow}
                    </Table>
                </TableContainer>
            </GridItem>
            <Box />
        </Grid >
    )
}

export default detail