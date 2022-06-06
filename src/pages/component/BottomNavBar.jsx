import { Grid, GridItem, Img } from "@chakra-ui/react"
import React from "react"

const BottomNavBar = () => {
    return (
        <Grid
            color="#F6FAFB"
            background="#F6FAFB"
            templateColumns="repeat(5, 1fr)"
            display={["flex", "none", "none"]}
            gap={2}
            justifyContent="space-evenly"
            bottom={0}
            paddingBottom={5}
            paddingTop={3}
            left={0}
            right={0}
            position="fixed"
            mt={5}
        >
            <GridItem colSpan={1}>
                <Img src="berandaLogo.svg" />
            </GridItem>
            <Img src="kategoriLogo.svg" />
            <GridItem colSpan={1}>
                <Img src="transaksiLogo.svg" />
            </GridItem>
            <GridItem colSpan={1}>
                <Img src="bantuanLogo.svg" />
            </GridItem>
            <GridItem colSpan={1}>
                <Img src="profilLogo.svg" />
            </GridItem>
        </Grid>
    )
}

export default BottomNavBar