import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Checkbox, Grid, GridItem, Icon, IconButton, Img, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri"

const ProductCart = ({
    id,
    name,
    image,
    discount,
    productPrice,
    productDescrption,
    kemasan,
    quantity,
}) => {
    const [amount, setAmount] = useState(quantity)

    const addQuantity = () => {
        return setAmount(currentAmount => currentAmount + 1)
    }
    const lessQuantity = () => {
        if (amount < 2) {
            return setAmount(1)
        }
        return setAmount(currentAmount => currentAmount - 1)
    }
    const finalPrice = () => {
        const result = productPrice - (productPrice * (discount / 100))
        return result.toLocaleString()
    }

    useEffect(() => {
    }, [amount])

    return (
        <>
            <GridItem colSpan={5} padding={2}>
                <Box display="flex" width="100%" justifyContent="space-between">
                    <Box display="flex" justifyContent="left" >
                        <Checkbox value={id} mr={2} />
                        <Img
                            width={["71px", "86px", "86px"]}
                            height={["71px", "86px", "86px"]}
                            mr={3}
                            src={image}
                        />
                        <Box>
                            <Text variant="caption-bold">{name} {productDescrption}</Text>
                            <Text variant="caption">{kemasan}</Text>
                        </Box>
                    </Box>
                    <Box widht="30%" display={["block", "flex", "flex"]} justifyContent="space-between">
                        <Box hidden={!discount} textAlign={["right", "center"]}>
                            <Text
                                as="del"
                                color="#B4B9C7"
                                fontSize={["12px"]}
                                fontWeight={[400, 600]}
                                mr={[0, 2]}
                            >
                                Rp. {productPrice.toLocaleString()}
                            </Text>
                        </Box>
                        <Box textAlign={["right", "center"]}>
                            <Text variant="subtitle-bold" >
                                Rp. {finalPrice()}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={5} padding={[0, 4]} alignItems="center">
                <Grid templateColumns="repeat(5,1fr)">
                    <GridItem colSpan={[0, 1]} />
                    <GridItem colSpan={[5, 4]}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box textAlign={["left", "center"]} >
                                <Text color="teal" mr={2} variant="caption">Pindahkan ke Wishlist</Text>
                            </Box>
                            <Box borderLeft="1px solid teal">
                                <Icon ml={3} color="teal" as={RiDeleteBin6Line} />
                            </Box>
                            <Box display="flex" alignItems="center" height="30px" background="#F6FAFB" borderRadius="8px">
                                <IconButton
                                    onClick={() => lessQuantity()}
                                    borderLeftRadius="8px"
                                    background="#F6FAFB"
                                    boxSize="30px"
                                >
                                    <Icon color="teal" as={MinusIcon} />
                                </IconButton>
                                <Text mx={6}>{amount}</Text>
                                <IconButton
                                    onClick={() => addQuantity()}
                                    borderRightRadius="8px"
                                    background="#F6FAFB"
                                    boxSize="30px"
                                >
                                    <Icon color="teal" as={AddIcon} />
                                </IconButton>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </GridItem>
        </>
    )
}

export default ProductCart