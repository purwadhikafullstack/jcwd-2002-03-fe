import React, { useState } from "react"
import { Box, Button, Checkbox, Divider, Grid, GridItem, Icon, IconButton, Img, Text } from "@chakra-ui/react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const cart = () => {
    const [amount, setAmount] = useState(1)

    const addAmount = () => {
        return setAmount(amount + 1)
    }
    const lessAmount = () => {
        if (amount < 2) {
            return 1
        }
        return setAmount(amount - 1)
    }

    return (
        <Grid templateColumns="repeat(6,1fr)" paddingX={[4, 6, 6]}>
            <GridItem colSpan={6} padding={2} >
                <Text variant="title">Keranjang Saya</Text>
            </GridItem>
            <GridItem colSpan={[6, 4, 4]}>
                <Box padding={4}
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}>
                    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                        <GridItem colSpan={5} paddingX={2} alignItems="Center">
                            <Checkbox>
                                Pilih Semua
                            </Checkbox>
                        </GridItem>
                        <GridItem colSpan={5} padding={2} alignItems="Center">
                            <Divider />
                        </GridItem>
                        <GridItem colSpan={5} padding={2}>
                            <Checkbox>
                                <Box display="flex" width="100%" justifyContent="center">
                                    <Box>
                                        <Img
                                            width={["71px", "86px", "86px"]}
                                            height={["71px", "86px", "86px"]}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkLtNE0Wv8KXQyoHZA58I0meYBMO2Br-vMA&usqp=CAU" />
                                    </Box>
                                    <Box>
                                        <Text variant="caption-bold">Bisolvon 8MG 4 Tablet</Text>
                                        <Text variant="caption">1 strip</Text>
                                    </Box>
                                    <Box bgColor="black" display={["block", "flex", "flex"]}>
                                        <Box>
                                            <Text
                                                as="del"
                                                color="#B4B9C7"
                                                variant="subtitle-bold"
                                                fontSize={["14px"]}
                                            >
                                                Rp.17.000
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Text variant="subtitle-bold">
                                                Rp.13.000
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Checkbox>
                            {/* <Grid
                                    templateColumns="repeat(8, 1fr)"
                                    justifyContent="space-between"
                                >
                                    <GridItem colSpan={2}>
                                        <Img
                                            width={["71px", "86px", "86px"]}
                                            height={["71px", "86px", "86px"]}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkLtNE0Wv8KXQyoHZA58I0meYBMO2Br-vMA&usqp=CAU" />
                                    </GridItem>
                                    <GridItem colSpan={2} >
                                        <Text variant="caption-bold">Bisolvon 8MG</Text>
                                        <Text variant="caption">1 strip</Text>
                                    </GridItem>
                                    <GridItem colSpan={2} bgColor="blue">
                                        <Text variant="caption-bold">4 Tablet</Text>
                                    </GridItem>
                                    <GridItem
                                        colSpan={2}
                                        display={["block", "flex", "flex"]}
                                        justifyContent="space-between"
                                        bgColor="blue"
                                    >
                                        <Text as="del" color="#B4B9C7" fontSize={["14px"]}>Rp.17.000</Text>
                                        <Text variant="subtitle-bold">
                                            Rp.13.000
                                        </Text>
                                    </GridItem>
                                </Grid> */}
                            {/* </Checkbox> */}
                        </GridItem>
                        <GridItem colSpan={5} padding={4} mx={4} alignItems="center">
                            <Box display="flex" justifyContent="right">
                                <Box display="flex" alignItems="center">
                                    <Box borderRight="1px solid teal" >
                                        <Text color="teal" mr={2} variant="caption">Pindahkan ke Wishlist</Text>
                                    </Box>
                                    <Box ml={2} mr={4}>
                                        <Icon color="teal" as={RiDeleteBin6Line} />
                                    </Box>
                                    <Box display="flex" alignItems="center" height="30px" background="#F6FAFB">
                                        <IconButton
                                            onClick={() => lessAmount()}
                                            borderLeftRadius="8px"
                                            background="#F6FAFB"
                                            boxSize="30px"
                                        >
                                            <Icon color="teal" as={MinusIcon} />
                                        </IconButton>
                                        <Text mx={6}>{amount}</Text>
                                        <IconButton
                                            onClick={() => addAmount()}
                                            borderRightRadius="8px"
                                            background="#F6FAFB"
                                            boxSize="30px"
                                        >
                                            <Icon color="teal" as={AddIcon} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem>
            <GridItem colSpan={[6, 2, 2]} />
        </Grid >
    )
}

export default cart