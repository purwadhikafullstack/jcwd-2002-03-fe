import React from "react"
import { Box, Button, Grid, GridItem, Img, Text, useBreakpointValue } from "@chakra-ui/react"

const ResepBanner = () => {
    const banner = useBreakpointValue({
        base: (
            <Img
                src="unggahResep.svg"
                // position="relative"
                width="95%"
                overflow="hidden"
                marginLeft="auto"
                marginRight="auto"
                mb={[5, 10, 10]} />


        ), md: (
            <Box
                position="relative"
                height="232px"
                width="90%"
                overflow="hidden"
                marginLeft="auto"
                marginRight="auto"
                mb={10}
                borderRadius="16px"
                ustifyContent="center"
                alignItems="center"
                display="flex"
            >
                <Grid
                    column={3}
                    templateColumns="repeat(3, 1fr)"
                    alignContent="center"
                    justifyContent="center"
                    height="232px"
                    bgColor="#FFFFFF"
                >
                    <GridItem colSpan={1} justifyContent="center" display="flex">
                        <Img
                            src="unggahReseplg.svg"
                            height="232px"
                        />
                    </GridItem>
                    <GridItem mt="auto" mb="auto" ml="auto" justifyContent="center" alignItems="center" display="block" colSpan={1}>
                        <Text
                            fontSize="20px"
                            fontWeight="700"
                            color="#213360"
                        >Punya Resep Dokter ?</Text>
                        <Text
                            fontSize="18px"
                            fontWeight="400"
                            color="#525252"
                        >Tak perlu antre &amp; obat langsung dikirim ke lokasi</Text>
                        <Text
                            fontSize="18px"
                            fontWeight="400"
                            color="#525252">anda! Foto tidak boleh lebih dari 10 MB</Text>
                    </GridItem>
                    <GridItem justifyContent="center" alignItems="center" display="flex" colSpan={1}>
                        <Button
                            colorScheme="teal"
                            w="274px"
                            h="48px"
                            borderRadius="8px"
                            fontSize="18px"
                            fontWeight="400"
                        >
                            Unggah Resep
                        </Button>
                    </GridItem>
                </Grid >
            </Box >
        )
    })
    return (
        <>

            <Box
                width="90%"
                overflow="hidden"
                marginLeft="auto"
                marginRight="auto"
            >
                <Text display={["flex", "none", "none"]} fontSize={[14]} fontWeight={[700]} color="#213360">Punya Resep Dokter ?</Text>
            </Box>
            <Box>
                {banner}

            </Box>
        </>
    )
}

export default ResepBanner