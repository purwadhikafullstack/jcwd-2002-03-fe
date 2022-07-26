import React, { useState } from "react"
import { Box, Button, Icon, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { TbTruckDelivery } from "react-icons/tb";
import { ArrowRightIcon } from "@chakra-ui/icons";
import api from "../../lib/api"

const Pengirimanbarang = ({ destinationCode, setOngkir, setKurir }) => {
    const [service, setService] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const cekOngkir = async (kurir) => {
        try {
            const res = await api.get(`/api/ongkos/457/${destinationCode}/1000/${kurir}`)
            const data = res.data.rajaongkir.results
            setService(data[0].costs)
            setKurir(kurir)
        } catch (err) {
            toast({
                title: "error",
                status: "error",
                description: err?.response?.data?.message || err?.message,
                isClosable: true,
                duration: 5000
            })
        }
    }

    const selectedOngkirHandler = (val) => {
        setOngkir(val.cost[0].value)
        setService([])
        onClose()
    }

    const closeHandler = () => {
        setService([])
        onClose()
    }
    return (
        <>
            <Button onClick={onOpen} variant="ghost" colorScheme="teal"><Icon as={TbTruckDelivery} mr={2} />Pilih Kurir</Button>
            <Modal isOpen={isOpen} onClose={onClose} size={["xs", "md"]}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Pilih Kurir</ModalHeader>
                    <ModalBody>
                        {/* pilih kurir */}
                        <Stack spacing={3} hidden={service.length !== 0}>
                            <Button height="60px" display="flex" alignItems="center" justifyContent="space-between" boxShadow="md" paddingX={2} onClick={() => cekOngkir("jne")}>
                                <Box
                                    width="60px"
                                    height="60px"
                                    backgroundImage="/jne.svg"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="contain"
                                    backgroundPosition="center"
                                    mr={5}
                                />
                                <Text variant="title">JNE</Text>
                                <ArrowRightIcon />
                            </Button>
                            <Button height="60px" display="flex" alignItems="center" justifyContent="space-between" boxShadow="md" paddingX={2} onClick={() => cekOngkir("tiki")}>
                                <Box
                                    width="60px"
                                    height="60px"
                                    backgroundImage="/tiki.svg"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="contain"
                                    backgroundPosition="center"
                                    mr={5}
                                />
                                <Text variant="title">TIKI</Text>
                                <ArrowRightIcon />
                            </Button>
                        </Stack>
                        {/* end of pulih kurir */}

                        {/* jenis service */}
                        <Stack spacing={2}>
                            {service && service.map((val) => {
                                return (
                                    <Button key={val.service} height="30px" display="flex" alignItems="center" justifyContent="space-between" boxShadow="md" paddingX={2} onClick={() => selectedOngkirHandler(val)}>
                                        <Text variant="subtitle">{val.service}</Text>
                                        <Text variant="caption-bold">{val.description}</Text>
                                        <Text variant="subtitle">Rp. {val.cost[0].value.toLocaleString()}</Text>
                                    </Button>
                                )
                            })}
                        </Stack>
                        {/* end of jenis service */}

                    </ModalBody>

                    <ModalFooter>
                        {service.length !== 0 && <Button colorScheme="teal" variant="solid" mr={3} onClick={() => setService([])}>Kembali</Button>}
                        <Button variant="outline" colorScheme="teal" mr={3} onClick={() => closeHandler()}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Pengirimanbarang