import React, { useEffect, useState } from "react"
import { HStack, Box, Icon, Text, Slide } from "@chakra-ui/react"
import { HiHome } from "react-icons/hi"
import { RiBillLine } from "react-icons/ri"
import { TbHeadset, TbLogout } from "react-icons/tb"
import { FaRegUserCircle } from "react-icons/fa"
import { GiMedicines } from "react-icons/gi"
import { ImProfile } from "react-icons/im"
import { useRouter } from "next/router"
import { BiChevronLeft } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import jsCookie from "js-cookie"
import { logout, selectAuth } from "../../redux/reducer/authSlice"

const HomeBottomNavBar = () => {
    const [currentScrollValue, setCurrentScrollValue] = useState()
    const [prevScrollValue, setPrevScrollValue] = useState(window.scrollY)
    const [show, setShow] = useState(true)
    const [profileActive, setProfileActive] = useState(false)
    const dispatch = useDispatch()
    const authSelector = useSelector(selectAuth)
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

    const logoutButtonHandler = () => {
        jsCookie.remove("user_token");
        localStorage.removeItem("user");
        dispatch(logout());
        setProfileActive(false)
        return router.push("/auth/login");
    };

    useEffect(() => {
        scrollProgress()
    }, [currentScrollValue])

    return (
        <Slide
            direction='bottom' in={show} style={{ zIndex: 100 }}
        >
            {!profileActive &&
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
                    <Box alignItems="center" textAlign="center" onClick={() => router.push("/daftar-pemesanan")}>
                        <Icon as={RiBillLine} boxSize="25px" color="#B4B9C7" />
                        <Text fontSize="12px">Transaksi</Text>
                    </Box>
                    <Box alignItems="center" textAlign="center" onClick={() => router.push("/")}>
                        <Icon as={TbHeadset} boxSize="25px" color="#B4B9C7" />
                        <Text fontSize="12px">Bantuan</Text>
                    </Box>
                    {authSelector.role !== "user" &&
                        <Box alignItems="center" textAlign="center" onClick={() => router.push("/auth/login")}>
                            <Icon as={FaRegUserCircle} boxSize="25px" color="#B4B9C7" />
                            <Text fontSize="12px">Account</Text>
                        </Box>
                    }
                    {authSelector.role === "user" &&
                        <Box alignItems="center" textAlign="center" onClick={() => setProfileActive(true)}>
                            <Icon as={FaRegUserCircle} boxSize="25px" color="#B4B9C7" />
                            <Text fontSize="12px">Account</Text>
                        </Box>
                    }
                </HStack >
            }
            {profileActive &&
                <HStack
                    background="#F6FAFB"
                    display={["flex", "none", "none"]}
                    bottom={0}
                    paddingBottom={3}
                    paddingTop={3}
                    left={0}
                    right={0}
                >
                    <Box justifyContent="left" alignItems="center" textAlign="center" onClick={() => { setProfileActive(false) }}>
                        <Icon as={BiChevronLeft} boxSize="25px" />
                    </Box>
                    <Box width="100%" display="flex" alignItems=" center" textAlign="center" justifyContent="space-evenly" onClick={() => router.push("/my-profile")}>
                        <Box alignItems="center" textAlign="center" justifyContent="center" onClick={() => router.push("/my-profile")}>
                            <Icon as={ImProfile} boxSize="25px" mr={2} />
                            <Text fontSize="12px">My profile</Text>
                        </Box>
                        <Box alignItems="center" textAlign="center" justifyContent="center" onClick={() => logoutButtonHandler()}>
                            <Icon as={TbLogout} boxSize="25px" mr={2} />
                            <Text fontSize="12px">Logout</Text>
                        </Box>
                    </Box>

                </HStack >
            }
        </Slide >
    )
}

export default HomeBottomNavBar