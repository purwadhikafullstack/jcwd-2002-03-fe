import React from "react"
import { Button, Grid, GridItem, Icon, IconButton } from "@chakra-ui/react"
import { FaShoppingCart, FaRegHeart } from "react-icons/fa"


const ProductDetailBottomNavbar = () => {
    return (
        <Grid
            templateColumns="repeat(6,1fr)"
            gap={2}
            position="fixed"
            bottom={0}
            left={0}
            right={0}
            display={["grid", "none", "none"]}
            paddingBottom={3}
            paddingTop={3}
            background="#F6FAFB"
            paddingRight={3}
            paddingLeft={3}

        >
            <GridItem colSpan={2} display="flex" justifyContent="space-evenly">
                <IconButton variant="outline" colorScheme="teal">
                    <Icon as={FaRegHeart} />
                </IconButton>
                <IconButton variant="outline" colorScheme="teal">
                    <Icon as={FaShoppingCart} />
                </IconButton>
            </GridItem>
            <GridItem colSpan={4} display="flex" alignItems="center" justifyContent="center">
                <Button width="full" variant="main"> Beli Sekarang </Button>
            </GridItem>
        </Grid>
    )
}

export default ProductDetailBottomNavbar