import React from "react"
import {
    Button,
    Grid,
    GridItem,
    Icon,
    Img,
    Input,
    InputGroup,
    InputRightElement,
    useBreakpointValue
} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { FaShoppingCart, FaBell } from "react-icons/fa"

const NavBar = () => {

    const buttonOrIcon = useBreakpointValue({
        base: (
            <>
                <Icon as={FaBell} color="#008D8F" _hover={{ color: "white" }} />
                <Icon as={FaShoppingCart} color="#008D8F" _hover={{ color: "white" }} />
            </>
        ), md: (
            <>
                <Button width='40%' variant="main-outline">Masuk</Button>
                <Button width='40%' variant="main">Daftar</Button>
            </>
        )
    })

    return (
        <Grid
            templateColumns="repeat(5, 1fr)"
            gap={[2, 2, 3]}
            marginBottom={5}
            alignContent="center"
            justifyContent="center"
            boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
            padding={[5, 5, 10]}
            h="92"
            maxWidth="100%"
            background="linear-gradient(to left, #fde600, #8bd64c, #00b87a, #00948e, #006d7f);"

        >
            <GridItem justifyContent="center" display="flex" colSpan={[5, 1, 1]} >
                <Img src="/logo.svg" />

            </GridItem>
            <GridItem colSpan={[4, 3, 3]}>
                <InputGroup>
                    <Input h={["36px", "44px", "44px"]} />
                    <InputRightElement>
                        <Icon as={BsSearch} color="#FFFFF" />
                    </InputRightElement>
                </InputGroup>
            </GridItem >
            <GridItem
                alignItems='center' display="flex" justifyContent="space-around" colSpan={[1, 1, 1]} >
                {buttonOrIcon}
            </GridItem>
        </Grid>
    )
}

export default NavBar