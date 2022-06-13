import React from "react"
import { Badge, Box, Button, Checkbox, Divider, Grid, GridItem, Icon, IconButton, Img, Text } from "@chakra-ui/react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const cart = () => {

    return (
        <Grid templateColumns="repeat(6,1fr)" gap={[0, 6, 6]} margin={[0, 6, 6]} templateRows={["none", "repeat(2,1fr)"]}>
            <GridItem
                colSpan={[6, 4, 4]}
                rowSpan={[1, 2, 2]}
            >
                <Box padding={4}
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"]}>
                    <Box padding={4} display="flex" alignItems="Center">
                        <Checkbox>
                            Pilih Semua
                        </Checkbox>
                    </Box>
                    <Divider />
                    <Box>
                        <Checkbox>
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
                            </Grid>
                            <Box display="flex" alignItems="center" justifyContent={["space-between", "right"]} >
                                <Box display="flex" alignItems="center">
                                    <Text variant="mini-title">
                                        Pindahkan ke Wishlist
                                    </Text>
                                    <Icon marginLeft={3} as={RiDeleteBin6Line} />
                                </Box>
                                <Box marginLeft={6} display="flex" alignItems="center">
                                    <IconButton>
                                        <Icon as={AiOutlineMinus} />
                                    </IconButton>
                                    <Text marginLeft={6} marginRight={6}>
                                        1
                                    </Text>
                                    <IconButton>
                                        <Icon as={AiOutlinePlus} />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Checkbox>
                    </Box>
                    <Box />
                </Box>
            </GridItem>
            <GridItem
                colSpan={2}
                rowSpan={1}
                boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);"
                padding={3}
                display={["none", "block", "block"]}
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
            </GridItem>
        </Grid >
    )
}

export default cart