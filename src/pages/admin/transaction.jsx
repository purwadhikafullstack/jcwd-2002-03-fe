import React, { useEffect, useState } from "react"
import { Box, HStack, Icon, Input, InputGroup, InputRightElement, Select, Slider, SliderThumb, Text, useToast } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { BsSearch } from "react-icons/bs"
import TransactionCard from "../../component/transaction/TransactionCard"
import AdminSideBar from "../../component/AdminSideBar"
import api from "../../lib/api"

const transaction = () => {
    const [dataTrasactions, setDataTransaction] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [limitNumber, setLimitNumber] = useState(5)
    const [dirValue, setDirValue] = useState("DESC")
    const [maxPage, setMaxPage] = useState(1)
    const toast = useToast()

    const fetchTransaction = async (
        queryParams = {
            params: {
                _sortBy: "createdAt",
                _sortDir: dirValue || "DESC",
                _limit: limitNumber,
                _page: pageNumber,
            },
        }
    ) => {
        try {
            const res = await api.get("/transaction", queryParams)
            const data = res?.data?.result.rows
            setDataTransaction(data)
            setMaxPage(res.data.result.totalPages)
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

    const pageButtonHandler = (dir) => {
        if (dir === "dec") {
            if (pageNumber < 2) {
                return setPageNumber(1)
            }
            return setPageNumber(prev => prev - 1)
        }
        if (dir === "inc") {
            if (pageNumber >= maxPage) {
                return setPageNumber(maxPage)
            }
            return setPageNumber(prev => prev + 1)
        }
        return pageNumber
    }

    useEffect(() => {
        fetchTransaction()
    }, [pageNumber, limitNumber, dirValue])

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
                            <Select bgColor="white" width="15%" placeholder="Filter" onChange={(e) => setDirValue(e.target.value)}>
                                <option value="DESC">Terbaru-Terlama</option>
                                <option value="ASC">Terlama-Terbaru</option>
                            </Select>
                            <Input bgColor="white" width="15%" placeholder="Urutkan" />
                        </HStack>
                    </Box>

                    <Box>
                        <HStack>
                            <Text>Kartu per halaman</Text>
                            <Select bgColor="white" width="8%" onChange={(e) => setLimitNumber(e.target.value)}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </Select>
                            <ChevronLeftIcon onClick={() => pageButtonHandler("dec")} boxSize={6} cursor="pointer" />
                            <Box display="flex" maxWidth="30%" alignItems="center" justifyContent="space-between">
                                <Slider
                                    focusThumbOnChange={false}
                                    value={pageNumber}
                                    min={1}
                                    max={10}
                                >

                                    <SliderThumb fontSize='sm' boxSize='24px'>{pageNumber}</SliderThumb>
                                </Slider>
                            </Box>
                            <ChevronRightIcon onClick={() => pageButtonHandler("inc")} boxSize={6} cursor="pointer" />
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