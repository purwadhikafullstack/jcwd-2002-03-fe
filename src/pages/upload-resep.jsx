import React, { useRef } from "react"
import { Box, Button, Container, Divider, Input, Text } from "@chakra-ui/react"

const uploadResep = () => {
    const inputFileRef = useRef()
    return (
        <Container
            width="90%"
            maxWidth="90%"
            marginLeft="auto"
            marginRight="auto"
        >
            <Text fontWeight={700} fontSize={[20, 24, 24]}>Kirim Resep</Text>
            <Text
                fontWeight={400}
                fontSize={[12, 14, 14]}
                marginBottom={[3, 5, 5]}
            >
                Tak perlu antre &amp; obat langsung dikirimkan ke lokasi anda! <b>Foto tidak boleh lebih dari 10 MB</b>
            </Text>
            <Box
                // display="flex"
                justifyContent="center"
                alignItems="center"
                width="70%"
                height="70vh"
                marginLeft="auto"
                marginRight="auto"
                boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                padding={[3, 6, 6]}
                borderRadius="18px"
                marginBottom={[5, 10, 10]}
            >
                <Text fontWeight={600} fontSize={[12, 14, 14]}>
                    Unggah Resep Dokter
                </Text>
                <Divider mb={[6, 8, 8]} mt={[2, 3, 3]} />
                <Box
                    border="1px dashed teal"
                    borderRadius="16px"
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    height="75%"
                    alignItems="center"
                    marginLeft="auto"
                    marginRight="auto"
                    background="#F6FAFB"
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginLeft="auto"
                        marginRight="auto"
                    >
                        <Input type="file" accept="image/png, image/jpeg" ref={inputFileRef} display="none" />
                        <Button onClick={() => inputFileRef.current.click()} colorScheme="teal">
                            Unggah Resep
                        </Button>
                    </Box>
                </Box>
                <Box
                    mt={[3, 6, 6]}
                    mb={[6, 10, 10]}
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                >
                    <Button marginRight={[3, 6, 6]} variant="outline" colorScheme="teal">
                        Cancel
                    </Button>
                    <Button marginRight={[3, 6, 6]} variant="solid" colorScheme="teal">
                        Unggah
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default uploadResep