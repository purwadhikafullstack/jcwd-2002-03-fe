import React, { useState } from "react"
import { Box, Button, Container, Divider, Grid, GridItem, Input, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"
import { useDropzone } from "react-dropzone"

const uploadResep = () => {
    // const inputFileRef = useRef()
    const [show, setShow] = useState(false)

    const { getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const upload = () => {
        setShow(true)
    }

    const files = () => {
        return (
            <List >
                <ListItem >
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {acceptedFiles.values}
                </ListItem>
            </List>
        )
    }

    return (
        <Container
            width={["100%", "90%", "90%"]}
            maxWidth={["100%", "90%", "90%"]}
            marginLeft={["0px", "auto", "auto"]}
            marginRight={["0px", "auto", "auto"]}
            marginBottom={[10, 10, 10]}
        >
            <Text display={["none", "flex", "flex"]} variant="title">Kirim Resep</Text>
            <Text
                variant="caption"
                display={["none", "flex", "flex"]}
                marginBottom={[3, 5, 5]}
            >
                Tak perlu antre &amp; obat langsung dikirimkan ke lokasi anda! <b>Foto tidak boleh lebih dari 10 MB</b>
            </Text>

            <Box
                justifyContent="center"
                alignItems="center"
                width={["100%", "70%", "70%"]}
                height={["50vh", "70vh", "70vh"]}
                marginLeft={["0px", "auto", "auto"]}
                marginRight={["0px", "auto", "auto"]}
                boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"]}
                padding={[3, 6, 6]}
                borderRadius="18px"
                marginBottom={[10, 10, 10]}
            >
                <Text variant={["title", "caption-bold"]}>
                    Unggah Resep Dokter
                </Text>
                <Divider mb={[6, 8, 8]} mt={[2, 3, 3]} />
                <Box display={["block", "none", "none"]}>
                    <Text
                        variant="caption"
                        marginBottom={[3, 5, 5]}
                    >
                        Tak perlu antre &amp; obat langsung dikirimkan ke lokasi anda! <b>Foto tidak boleh lebih dari 10 MB</b>
                    </Text>
                </Box>
                <Box height="400px" width="100%" border="1px dashed teal" borderRadius="16px">
                    <Input {...getInputProps()} />
                    <Button varian="main" type="button" onClick={open}>upload resep</Button>
                </Box>

                <Grid
                    templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={2}
                    mt={[3, 6, 6]}
                    mb={[10, 10, 10]}
                >
                    <GridItem justifyContent="space-between" display="flex" alignItems="center" colSpan={[1, 2, 2]}>{files}</GridItem>
                    <GridItem colSpan={[1, 1, 1]} justifyContent="space-evenly" display="flex" alignItems="center">
                        {show ?
                            <>
                                <Button variant="main-outline">
                                    Cancel
                                </Button>
                                <Button variant="main" onClick={() => upload()}>
                                    Unggah
                                </Button>
                            </>
                            : ""
                        }
                    </GridItem>
                </Grid>
            </Box>
        </Container >
    )
}

export default uploadResep