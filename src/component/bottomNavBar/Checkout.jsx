import React from "react"
import { Button, Grid, GridItem } from "@chakra-ui/react"

const Checkout = () => {
    return (
        <Grid
            // color="#F6FAFB"
            background="#F6FAFB"
            templateColumns="repeat(6, 1fr)"
            display={["flex", "none", "none"]}
            gap={2}
            justifyContent="space-evenly"
            bottom={0}
            paddingBottom={3}
            paddingTop={3}
            left={0}
            right={0}
            position="fixed"
            mt={10}
        >
            <GridItem colSpan={6}>
                <Button>Pilih Metode Pembyaran</Button>
            </GridItem>
        </Grid>
    )
}

export default Checkout