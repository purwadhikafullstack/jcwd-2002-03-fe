import React from "react"
import { Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { HiHome } from "react-icons/hi"
import { BiCategoryAlt } from "react-icons/bi"
import { RiBillLine } from "react-icons/ri"
import { TbHeadset } from "react-icons/tb"
import { FaRegUserCircle } from "react-icons/fa"

const HomeBottomNavBar = () => {
    return (

        <Grid
            background="#F6FAFB"
            templateColumns="repeat(5, 1fr)"
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
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Icon as={HiHome} boxSize="35px" color="#B4B9C7" />
                <Text>Beranda</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Icon as={BiCategoryAlt} boxSize="35px" color="#B4B9C7" />
                <Text>Kategori</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Icon as={RiBillLine} boxSize="35px" color="#B4B9C7" />
                <Text>Transaksi</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Icon as={TbHeadset} boxSize="35px" color="#B4B9C7" />
                <Text>Bantuan</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Icon as={FaRegUserCircle} boxSize="35px" color="#B4B9C7" />
                <Text>Profile</Text>
            </GridItem>
        </Grid >
    )
}

export default HomeBottomNavBar