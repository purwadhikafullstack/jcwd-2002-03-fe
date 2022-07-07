import React, { useEffect, useState } from "react"
import { Box, Button, Checkbox, Divider, Grid, GridItem, Spinner, Stack, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import ProductCart from "../component/cart/ProductCart"
import { selectAuth } from "../redux/reducer/authSlice"

const cart = () => {
    const [productList, setProductList] = useState([])
    const authSelector = useSelector(selectAuth)

    const dummy = [
        {
            id: 1,
            name: "Bisolvon",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkLtNE0Wv8KXQyoHZA58I0meYBMO2Br-vMA&usqp=CAU",
            discount: 10,
            productPrice: 13000,
            productDescrption: "8MG 4 Tablet",
            kemasan: "1 strip",
            quantity: 1,
            total: 0
        },
        {
            id: 2,
            name: "Bisolvon",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkLtNE0Wv8KXQyoHZA58I0meYBMO2Br-vMA&usqp=CAU",
            discount: 0,
            productPrice: 17000,
            productDescrption: "8MG 4 Tablet",
            kemasan: "1 strip",
            quantity: 1,
            total: 0
        },
    ]


    const fetchCart = () => {
        setProductList(dummy)
    }
    const renderProductList = () => {
        return productList?.map((val) => {
            return <ProductCart
                key={val.id}
                id={val.id}
                name={val.name}
                image={val.image_url}
                discount={val.discount}
                productPrice={val.productPrice}
                productDescrption={val.productDescrption}
                kemasan={val.kemasan}
                quantity={val.quantity}
                total={val.total}
            />
        })
    }

    useEffect(() => {
        fetchCart()
        if (!authSelector.id || authSelector.role === "admin") {
            window.history.back()
        }
    }, [])

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
        <Grid templateColumns="repeat(6,1fr)" paddingX={[0, 6, 6]} gap={4}>
            <GridItem colSpan={[6, 4, 4]}>
                <Box
                    paddingX={4}
                    paddingY={[0, 4]}
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}
                    borderRadius="8px"
                >
                    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                        <GridItem colSpan={5} paddingX={2} alignItems="Center">
                            <Checkbox>
                                Pilih Semua
                            </Checkbox>
                        </GridItem>
                        <GridItem colSpan={5} padding={2} alignItems="Center">
                            <Divider />
                        </GridItem>
                        {renderProductList()}
                    </Grid>
                </Box>
            </GridItem>
            <GridItem
                colSpan={[6, 2, 2]}

            >
                <Box
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}
                    borderRadius="8px"
                    display={["none", "grid", "grid"]}
                >
                    <Box padding={5}>
                        <Stack spacing={4}>
                            <Box>
                                <Text variant="subtitle">Total</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Text variant="subtitle-bold" color="#737A8D" fontWeight="400">Sub total</Text>
                                <Text variant="subtitle-bold" color="#737A8D">Rp.13.000</Text>
                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Text variant="subtitle-bold">Total</Text>
                                <Text variant="subtitle-bold">Rp.13.000</Text>
                            </Box>
                            <Button variant="main" mt={3}>
                                Bayar
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </GridItem>
        </Grid >
    )
}

export default cart