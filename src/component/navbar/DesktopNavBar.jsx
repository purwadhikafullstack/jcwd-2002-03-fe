import React from "react"
import {
    Avatar,
    Button,
    Grid,
    GridItem,
    HStack,
    Icon,
    Img,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useBreakpointValue
} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { FaShoppingCart, FaBell } from "react-icons/fa"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectAuth } from "../../redux/reducer/authSlice"

const DesktopNavBar = ({ icon1 = FaBell, icon2 = FaShoppingCart, link1 = "/daftar-pemesanan", link2 = "/cart" }) => {
    const router = useRouter()
    const authSelector = useSelector(selectAuth)

    const mdBar = () => {
        return (
            <HStack spacing={8}>
                <Icon cursor="pointer" boxSize={6} as={icon1} color="#008D8F" _hover={{ color: "white" }} onClick={() => router.push(link1)} />
                <Icon cursor="pointer" boxSize={6} as={icon2} color="#008D8F" _hover={{ color: "white" }} onClick={() => router.push(link2)} />
            </HStack>
        )
    }

    const logedinUser = () => {
        if (authSelector.role === "user") {
            return (
                <>
                    {mdBar()}
                    <HStack spacing={1}>
                        <Avatar size="sm" name={authSelector.name} src={authSelector.image_url} />
                        <Text variant="caption" fontWeight={600}>{authSelector.name}</Text>
                    </HStack>
                </>
            )
        }
        return (
            <>
                <Button width='40%' variant="main-outline" onClick={() => router.push("auth/login")}>Masuk</Button>
                <Button width='40%' variant="main" onClick={() => router.push("/auth/register")}>Daftar</Button>
            </>
        )
    }

    const buttonOrIcon = useBreakpointValue({
        base: (mdBar()),
        md: (logedinUser())
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
        >
            <GridItem justifyContent="center" display="flex" colSpan={[5, 1, 1]}  >
                <Img src="/logo.svg" />
            </GridItem>
            <GridItem colSpan={[4, 3, 3]}>
                <InputGroup>
                    <Input h={["36px", "44px", "44px"]} />
                    <InputRightElement>
                        <Icon as={BsSearch} onClick={() => router.push("/product-list")} cursor="pointer" color="#FFFFF" />
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

export default DesktopNavBar