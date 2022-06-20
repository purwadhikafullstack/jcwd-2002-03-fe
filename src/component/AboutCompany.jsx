import React from "react"
import { Box, Grid, GridItem, Icon, Img, Stack, Text, useBreakpointValue } from "@chakra-ui/react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const AboutCompany = () => {

    return useBreakpointValue({
        base: undefined,
        md: (
            <Box padding={[5, 10, 10]} >
                <Grid
                    templateColumns="repeat(4,1fr)"
                    margin="auto"
                    justifyContent="center"
                    width="100%"
                >
                    <GridItem colSpan={1}>
                        <Img src="/contacCompany.svg" />
                    </GridItem>
                    <GridItem colSpan={1} >
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Stack spacing="15px">
                                <Text variant="caption-bold">Tentang Kami</Text>
                                <Text variant="caption-bold" >FAQ</Text>
                                <Text variant="caption-bold" >Kebijakan Privasi</Text>
                                <Text variant="caption-bold" >Syarat &amp; Ketentuan</Text>
                                <Text variant="caption-bold" >Karir</Text>
                            </Stack>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1}  >
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <Stack spacing="15px" >
                                <Text variant="caption-bold" >Blog</Text>
                                <Text variant="caption-bold" >Cara Belanja</Text>
                                <Text variant="caption-bold" >Promo</Text>
                                <Text variant="caption-bold" >Diagnosis</Text>
                            </Stack>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} width="100%" display="flex" justifyContent="center" >
                        <Stack spacing="20px">
                            <Text variant="title">
                                Ikuti Kami
                            </Text>
                            <Box display="flex" alignItems="center">
                                <Icon mr={2} as={FaFacebookF} boxSize={8} color="#213360" />
                                <Text variant="caption-bold">
                                    Facebook
                                </Text>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Icon mr={2} as={FaTwitter} boxSize={8} color="#213360" />
                                <Text variant="caption-bold">
                                    Twitter
                                </Text>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Icon mr={2} as={FaInstagram} boxSize={8} color="#213360" />
                                <Text variant="caption-bold">
                                    Instagram
                                </Text>
                            </Box>
                        </Stack>
                    </GridItem>
                </Grid>
            </Box>
        )
    })
}

export default AboutCompany