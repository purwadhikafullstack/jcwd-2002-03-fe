import React, { useEffect, useState } from "react"
import { Box, HStack, Icon, Input, InputGroup, InputRightElement, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useNumberInput, useToast } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { BsSearch } from "react-icons/bs"
import TransactionCard from "../../component/transaction/TransactionCard"
import AdminSideBar from "../../component/AdminSideBar"
import api from "../../lib/api"

const transaction = () => {
    const [dataTrasactions, setDataTransaction] = useState()
    const toast = useToast()

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 6,
            precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const fetchTransaction = async () => {
        try {
            const res = await api.get("/transaction")
            const data = res?.data?.result.rows
            setDataTransaction(data)
        } catch (err) {
            toast({
                title: "error",
                status: "error",
                description: err?.response?.data?.message || err?.message,
                duration: 5000,
                isClosable: true
            })
        }
    }

    useEffect(() => {
        fetchTransaction()
    }, [])


    return (
        <>
            <AdminSideBar />
            <Box
                bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
                ml="64"
                pb="32px"
                minH="5xl"
            >
                <Box padding={8}>
                    <Box mb={20}>
                        <Text variant="title">Pesanan Baru</Text>
                    </Box>
                    <Box mb={10} >
                        <HStack spacing={10}>
                            <InputGroup bgColor="white" width="30%" >
                                <Input placeholder="Cari Nama Obat" />
                                <InputRightElement>
                                    <Icon as={BsSearch} color="#FFFFF" />
                                </InputRightElement>
                            </InputGroup>
                            <Input bgColor="white" width="15%" placeholder="Filter" />
                            <Input bgColor="white" width="15%" placeholder="Urutkan" />
                        </HStack>
                    </Box>

                    <Box>
                        <HStack>
                            <Text>Kartu per halaman</Text>
                            <Select bgColor="white" width="8%">
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                            </Select>
                            <ChevronLeftIcon {...dec} />
                            <Box display="flex" width="30%" alignItems="center" justifyContent="space-between">
                                <Slider
                                    flex='1'
                                    focusThumbOnChange={false}
                                    value={{ ...input }}
                                // onChange={handleChange}
                                >
                                    {/* <SliderTrack> */}
                                    {/* <SliderFilledTrack /> */}
                                    {/* </SliderTrack> */}
                                    <SliderThumb fontSize='sm' boxSize='24px'></SliderThumb>
                                </Slider>
                            </Box>
                            <ChevronRightIcon {...inc} />
                        </HStack>
                    </Box>
                    {dataTrasactions && dataTrasactions.map((data) => {
                        return (<TransactionCard key={data.id} props={data} fetchTransaction={fetchTransaction} />)
                    }
                    )}
                </Box>
            </Box>
        </>
    )
}

export default transaction