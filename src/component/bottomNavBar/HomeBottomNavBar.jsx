import React from "react"
import { Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { HiHome } from "react-icons/hi"
import { BiCategoryAlt } from "react-icons/bi"
import { RiBillLine } from "react-icons/ri"
import { TbHeadset } from "react-icons/tb"
import { FaRegUserCircle } from "react-icons/fa"
import Link from "next/link"

const HomeBottomNavBar = () => {
    return (

        <Grid
            // color="#F6FAFB"
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
        // alignItems="center"

        >
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Link href="/">
                    <Icon as={HiHome} boxSize="35px" color="#B4B9C7" />
                </Link>
                <Text>Beranda</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Link href="/product-list">
                    <Icon as={BiCategoryAlt} boxSize="35px" color="#B4B9C7" />
                </Link>
                <Text>Kategori</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Link href="/cart">
                    <Icon as={RiBillLine} boxSize="35px" color="#B4B9C7" />
                </Link>
                <Text>Transaksi</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Link href="/help">
                    <Icon as={TbHeadset} boxSize="35px" color="#B4B9C7" />
                </Link>
                <Text>Bantuan</Text>
            </GridItem>
            <GridItem colSpan={1} alignItems="center" display="block" justifyContent="center" textAlign="center">
                <Link href="/profile">
                    <Icon as={FaRegUserCircle} boxSize="35px" color="#B4B9C7" />
                </Link>
                <Text>Profile</Text>
            </GridItem>
        </Grid >
    )
}

export default HomeBottomNavBar