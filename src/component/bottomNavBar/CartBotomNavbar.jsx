import React from "react"
import { Button, Grid, GridItem, Text } from "@chakra-ui/react"

const CartBotomNavbar = () => {
    return (
        <Grid
            background="#F6FAFB"
            templateColumns="repeat(6, 1fr)"
            display={["grid", "none", "none"]}
            gap={2}
            bottom={0}
            left={0}
            right={0}
            position="fixed"
            mt={10}
            padding={3}
            alignItems="center"
        >
            <GridItem colSpan={2} justifyContent="center">
                <Text variant="subtitle">Total</Text>
                <Text variant="caption-bold">Rp.13.000</Text>
            </GridItem>
            <GridItem colSpan={4}>
                <Button width="full" variant="main">bayar</Button>
            </GridItem>
        </Grid>
    )
}

export default CartBotomNavbar