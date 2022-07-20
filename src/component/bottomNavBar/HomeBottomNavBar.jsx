import React, { useEffect, useState } from "react"
import { HStack, Box, Icon, Text, Slide } from "@chakra-ui/react"
import { HiHome } from "react-icons/hi"
import { RiBillLine } from "react-icons/ri"
import { TbHeadset } from "react-icons/tb"
import { FaRegUserCircle } from "react-icons/fa"
import { GiMedicines } from "react-icons/gi"
import { useRouter } from "next/router"

const HomeBottomNavBar = () => {
    const [currentScrollValue, setCurrentScrollValue] = useState()
    const [prevScrollValue, setPrevScrollValue] = useState(window.scrollY)
    const [show, setShow] = useState(true)

    const router = useRouter()

    const scrollProgress = () => {
        window.onscroll = () => {
            setCurrentScrollValue(window.scrollY)
            if (prevScrollValue < currentScrollValue) {
                setShow(false)
            } else {
                setShow(true)
            }
            setPrevScrollValue(currentScrollValue)
        }
    }



    useEffect(() => {
        scrollProgress()
    }, [currentScrollValue])

    return (
        <Slide
            direction='bottom' in={show} style={{ zIndex: 100 }}
        >
            <HStack
                background="#F6FAFB"
                display={["flex", "none", "none"]}
                justifyContent="space-evenly"
                bottom={0}
                paddingBottom={3}
                paddingTop={3}
                left={0}
                right={0}
            // position="fixed"
            >
                <Box alignItems="center" textAlign="center" onClick={() => router.push("/")}>
                    <Icon as={HiHome} boxSize="25px" color="#B4B9C7" />
                    <Text fontSize="12px">Beranda</Text>
                </Box>
                <Box alignItems="center" textAlign="center" onClick={() => router.push("/product-list")}>
                    <Icon as={GiMedicines} boxSize="25px" color="#B4B9C7" />
                    <Text fontSize="12px">Kategori</Text>
                </Box>
                <Box alignItems="center" textAlign="center" onClick={() => router.push("/transaction/menunggu-konfirmasi")}>
                    <Icon as={RiBillLine} boxSize="25px" color="#B4B9C7" />
                    <Text fontSize="12px">Transaksi</Text>
                </Box>
                <Box alignItems="center" textAlign="center" onClick={() => router.push("/")}>
                    <Icon as={TbHeadset} boxSize="25px" color="#B4B9C7" />
                    <Text fontSize="12px">Bantuan</Text>
                </Box>
                <Box alignItems="center" textAlign="center" onClick={() => router.push("/my-profile")}>
                    <Icon as={FaRegUserCircle} boxSize="25px" color="#B4B9C7" />
                    <Text fontSize="12px">Profile</Text>
                </Box>
            </HStack >
        </Slide>
    )
}

export default HomeBottomNavBar