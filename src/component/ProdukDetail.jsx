import React from "react"
import { Badge, Box, Button, Grid, GridItem, Icon, IconButton, Img, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react"
import Slider from "react-slick";
import { HiPlus, HiMinus, HiShoppingCart, HiOutlineHeart } from "react-icons/hi"

const ProdukDetail = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Grid
            h="auto"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
            alignContent="center"
        >
            <GridItem rowSpan={2} colSpan={2} bg='tomato' padding={5} >
                <Box w={300} h="auto" alignContent="center" margin="auto" >
                    <Slider {...settings} >
                        <Img src="https://images.unsplash.com/photo-1586421483226-7f5e25967f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                        <Img src="https://images.unsplash.com/photo-1586421483226-7f5e25967f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                        <Img src="https://images.unsplash.com/photo-1586421483226-7f5e25967f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
                    </Slider>
                </Box>
            </GridItem>
            <GridItem padding={3} colSpan={3} bg='papayawhip' >
                <Box>
                    <Text fontWeight={700} fontSize={14}>Bisolvon</Text>
                    <Text fontWeight={400} fontSize={22}>Bisolvon 8MG 4 Tablet</Text>
                    <Box display="flex" alignItems='center'>
                        <Text fontWeight={700} fontSize={24}>Rp. 13.000</Text> &nbsp;
                        <Text fontWeight={400} fontSize={14}> / per strip(4 tablet)</Text>
                    </Box>
                    <Text as='s'>Rp.17.000</Text>&nbsp;
                    <Badge>17%</Badge>
                </Box>
                <Box display="flex" alignItems="center">
                    <IconButton>
                        <Icon as={HiMinus} />
                    </IconButton>

                    <Box margin="5" w="10" textAlign="center">1</Box>
                    <IconButton>
                        <Icon as={HiPlus} />
                    </IconButton>
                    <Text ml={5}> Sisa 20 Strips</Text>
                </Box>
                <Box>
                    <Box display="flex" alignItems="center"  >
                        <Button>
                            <Icon as={HiShoppingCart} />
                            keranjang
                        </Button>
                        <Button ml={5}>
                            Beli
                        </Button>
                        <Icon ml={5} as={HiOutlineHeart} />
                    </Box>
                </Box>
            </GridItem>
            <GridItem padding={3} colSpan={3} bg='tomato'>
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
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </GridItem>
        </Grid >
    )
}

export default ProdukDetail