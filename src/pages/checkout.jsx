import React, { useEffect, useState } from "react"
import { Badge, Box, Button, Divider, Grid, GridItem, Icon, IconButton, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { BsPlusLg } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { TbTruckDelivery } from "react-icons/tb"
import { selectAuth } from "../redux/reducer/authSlice"
import api from "../lib/api"

const checkout = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const authSelector = useSelector(selectAuth)
    const [selectedAddress, setSelectedAddress] = useState()
    const [dataAddress, setDataAddres] = useState()
    const [dataIsReady, setDataIsReady] = useState(false)


    const toast = useToast()
    const router = useRouter()

    const fetchAddress = async () => {
        try {
            const res = await api.get("/profile/address-user")
            const data = res?.data?.result
            setDataAddres(data)
            setDataIsReady(true)
        } catch (err) {
            toast({
                title: "error",
                description: err?.response?.data?.message || err.message,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    }

    // for render main address for the firsttime with parameter main_addres === true
    const mainAddress = () => {
        return dataAddress?.map((val) => {
            if (val.main_address === true) {
                return setSelectedAddress(val)
            }
            return selectedAddress
        })
    }



    useEffect(() => {
        if (!authSelector.id || authSelector.role === "admin") {
            window.history.back()
        }

        fetchAddress()

        // function rendering when state is ready with data
        if (dataIsReady === true) {
            mainAddress()
        }

    }, [authSelector, dataIsReady])



    if (!authSelector.id || authSelector.role === "admin") {
        return <Spinner thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            display="flex"
            mt="10px"
            mb="auto"
            ml="auto"
            mr="auto"
        />
    }
    return (
        <Grid
            templateColumns='repeat(6, 1fr)'
            gap={8}
            paddingX={[2, 6]}
        >

            <GridItem colSpan={[6, 4, 4]}>
                {/* Adress section */}
                <Box
                    padding={[2, 5]}
                    width="100%"
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}
                    marginX={[0, 4]}
                    borderRadius="8px"
                    justifyContent="space-between"
                >
                    <Box
                        justifyContent="space-between"
                        display="flex"
                        alignItems="center"
                    >
                        <Text
                            variant="title"
                        >Alamat Pengiriman</Text>
                        <Text display={["grid", "none"]} onClick={onOpen} fontWeight={700} variant="caption" color="teal">Pilih Alamat Lain</Text>
                    </Box>
                    <Divider />
                    <Box
                        justifyContent="space-between"
                        display="flex"
                        alignItems="center"
                        my={[2, 4]}
                    >
                        <Text variant="subtitle">{selectedAddress && selectedAddress.nama}, {selectedAddress && selectedAddress.nomorHp}</Text>

                        {/* pilih alamat section */}
                        <Text display={["none", "grid"]} onClick={onOpen} variant="caption" fontWeight={700} color="teal" cursor="pointer">Pilih Alamat Lain</Text>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader><Text variant="title">Pilih Alamat Pengiriman</Text></ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    {dataAddress && dataAddress.map((val) => {
                                        return (
                                            <Box my={[2, 4]} key={val.id} display="flex" alignItems="center" justifyContent="space-between">
                                                <Box>
                                                    <Text variant="caption" fontWeight={600}>{val.labelAlamat}</Text>
                                                    <Text variant="caption">{val.alamat}, {val.kecamatan}</Text>
                                                    <Text variant="caption">{val.kotaKabupaten}, {val.provinsi} {val.kodePos}</Text>
                                                </Box>
                                                {val === selectedAddress ? <Icon as={TbTruckDelivery} boxSize={8} /> : ""}
                                                <Button variant="main" onClick={() => setSelectedAddress(val)}>pilih Alamat </Button>
                                            </Box>
                                        )
                                    })}
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='yellow' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Box>
                    <Divider />
                    <Box my={[2, 4]}>
                        <Text variant="caption" fontWeight={600}>{selectedAddress && selectedAddress.labelAlamat}</Text>
                        <Text variant="caption">{selectedAddress && selectedAddress.alamat}, {selectedAddress && selectedAddress.kecamatan}</Text>
                        <Text variant="caption">{selectedAddress && selectedAddress.kotaKabupaten}, {selectedAddress && selectedAddress.provinsi} {selectedAddress && selectedAddress.kodePos}</Text>
                    </Box>
                    <Divider />
                    <Box display="flex" alignItems="center" justifyContent={["center", "left", "left"]} mt={2}>
                        <IconButton size={["xs", "sm", "sm"]} mr={3} color="teal" boxShadow="2xl" borderRadius="50%" onClick={() => router.push("/address-form")}>
                            <Icon as={BsPlusLg} />
                        </IconButton>
                        <Text variant="subtitle">Tambahkan Alamat Baru</Text>
                    </Box>
                </Box>
                {/* end of address section */}

                <Box
                    padding={[2, 5]}
                    width="100%"
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}
                    marginX={[0, 4]}
                    borderRadius="8px"
                    justifyContent="space-between"
                >
                    <Box>
                        <Text variant="title">Ringkasan Order</Text>
                    </Box>
                    <Divider />
                    <Grid templateColumns="repeat(5, 1fr)" gap={2} templateRows='repeat(2, 1fr)' >
                        <GridItem colSpan={1} rowSpan={2}>
                            <Img src="https://static.hdmall.id/system/image_attachments/images/000/008/720/original/bisolvon-8mg-tab-str-4s-1.jpg" />
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={1} padding={2} alignItems="center">
                            <Box justifyContent="space-between" display="flex" alignItems="center">
                                <Text variant="caption-bold">Bisolovon</Text>
                                <Badge>
                                    <Text as='s'>Rp.17.000</Text>
                                </Badge>
                            </Box>
                            <Text variant="caption-bold">4 tablet</Text>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} padding={2}>
                            <Text variant="caption-bold">Rp.13.000</Text>
                        </GridItem>
                        <GridItem colSpan={3} rowSpan={1} padding={2}>
                            <Text variant="caption-bold">SubTotal</Text>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={1} padding={2}>
                            <Text variant="caption-bold">Rp.13.000</Text>
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={[6, 2, 2]}>
                <Box
                    padding={[2, 5]}
                    width="100%"
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}
                    marginX={[0, 4]}
                    borderRadius="8px"
                    justifyContent="space-between"
                >
                    <Box>
                        <Text variant="title" display={["none", "flex", "flex"]}>Total</Text>
                    </Box>
                    <Divider />
                    <Box mt={2} justifyContent="space-between" display="flex" alignItems="center">
                        <Text variant="caption-bold">Sub Total</Text>
                        <Text variant="caption-bold">Rp. 13.000</Text>
                    </Box>
                    <Box my={2} justifyContent="space-between" display="flex" alignItems="center" >
                        <Text variant="caption-bold">Pengiriman</Text>
                        <Text variant="caption-bold">Rp. 9.000</Text>
                    </Box>
                    <Divider />
                    <Box my={2} justifyContent="space-between" display="flex" alignItems="center" >
                        <Text variant="title">Total</Text>
                        <Text variant="title">Rp. 22.000</Text>
                    </Box>
                    <Divider />
                    <Box justifyContent="space-between" display="blok" alignItems="center" >
                        <Box mt={5}>
                            <Text variant="title" display={["none", "flex", "flex"]}>Metode Pembayaran</Text>
                            <Text display={["none", "flex"]}>Silahkan pilih metode pembayaran anda disini</Text>
                        </Box>
                        <Box mt={5}>
                            <Button variant="main" width="full" display={["none", "flex"]}>Pilih Metode Pembayaran</Button>
                        </Box>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default checkout
