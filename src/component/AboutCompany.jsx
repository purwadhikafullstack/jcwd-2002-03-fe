import { Center, Img, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

const AboutCompany = () => {
    const showHide = useBreakpointValue({

        base: "",
        md: (
            <SimpleGrid
                columns={4}
                spacingX={20}
            >
                <SimpleGrid >

                    <Img src="/contacCompany.svg" />

                </SimpleGrid>
                <SimpleGrid >
                    <Text fontWeight={600} fontSize={18} color="#213360">Tentang Kami</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">FAQ</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Kebijakan Privasi</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Syarat &amp; Ketentuan</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Karir</Text>
                </SimpleGrid>
                <SimpleGrid >
                    <Text fontWeight={600} fontSize={18} color="#213360">Blog</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Cara Belanja</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Promo</Text>
                    <Text fontWeight={600} fontSize={18} color="#213360">Diagnosis</Text>
                </SimpleGrid>
                <SimpleGrid>
                    <Img src="/ikutiKami.svg" />
                </SimpleGrid>
            </SimpleGrid>
        )
    })

    return (
        <Center>
            {showHide}
        </Center>
    )
}

export default AboutCompany