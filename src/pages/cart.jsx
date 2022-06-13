import React, { useState } from "react"
import { Badge, Box, Button, Checkbox, Divider, Grid, GridItem, Icon, IconButton, Img, Text } from "@chakra-ui/react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const cart = () => {
    const [checkedItems, setCheckedItems] = useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    return (
        <Box
            display="flex"
            width="95%"
            marginLeft="auto"
            marginRight="auto"
            justifyContent="space-between"
        >
            <Box
                boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                width="70%"
            >
                <Grid templateColumns="repeat(5, 1fr)" gap={2} templateRows='repeat(2, 1fr)' bgColor="green" >
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

                </Grid>
            </Box>
            <Box
                boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                width="25%"
                padding={5}
            >
                <Box>
                    <Text variant="title" display={["none", "flex", "flex"]}>Total</Text>
                </Box>
                <Divider />
                <Box mt={2} justifyContent="space-between" display="flex" alignItems="center">
                    <Text variant="caption-bold">Sub Total</Text>
                    <Text variant="caption-bold">Rp. 13.000</Text>
                </Box>
                <Divider />
                <Box my={2} justifyContent="space-between" display="flex" alignItems="center" >
                    <Text variant="title">Total</Text>
                    <Text variant="title">Rp. 22.000</Text>
                </Box>
                <Divider />
                <Box justifyContent="space-between" display="blok" alignItems="center" >
                    <Box mt={5}>
                        <Button variant="main" width="full">Pilih Metode Pembayaran</Button>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default cart