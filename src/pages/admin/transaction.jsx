import React, { useEffect, useState } from "react"
import { BellIcon } from "@chakra-ui/icons"
import { Avatar, Box, useToast } from "@chakra-ui/react"
import TransactionCard from "../../component/admin/TransactionCard"
import api from "../../lib/api"

const transaction = () => {
    const [dataTrasactions, setDataTransaction] = useState()
    const toast = useToast()

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
            <Box justifyContent="right" bgColor="gray.100" padding="10px" display="flex">
                <Box alignItems="center" justifyContent="center" display="flex" width="20%">
                    <BellIcon boxSize={6} mr={5} />
                    <Avatar size="sm" />
                </Box>
            </Box>
            <Box width="100%">
                {dataTrasactions && dataTrasactions.map((data) => {
                    return (<TransactionCard key={data.id} props={data} />)
                }
                )}
            </Box>
        </>
    )
}

export default transaction