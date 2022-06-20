import React, { useEffect, useRef, useState } from "react"
import { Box, Button, Container, Divider, Grid, GridItem, Input, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"
import { useDropzone } from "react-dropzone"

const uploadResep = () => {
    const inputFileRef = useRef()
    const [show, setShow] = useState(false)
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".png", ".jpg", ".jpeg"],
        },
        noClick: true,
        noKeyboard: true
    });

    const trigerShow = () => {
        if (acceptedFiles.length) {
            setShow(true)
        }
    }

    const files = acceptedFiles.map((file) => (
        <List >
            <ListItem key={file.path}>
                <ListIcon as={MdCheckCircle} color='green.500' />
                {file.path} - {file.size} bytes
            </ListItem>
        </List>
    ));

    useEffect(() => {
        trigerShow()
    }, [acceptedFiles])

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

                <Box
                    border="1px dashed teal"
                    borderRadius="16px"
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    height="75%"
                    alignItems="center"
                    background="#F6FAFB"
                    {...getRootProps({ className: "dropzone" })}
                >

                    <Box>
                        <Text textAlign="center" display={["none", "block", "block"]}>Tarik &amp; Letakan File </Text>
                        <Text textAlign="center" display={["none", "block", "block"]}>atau </Text>
                        <Input {...getInputProps()} ref={inputFileRef} />
                        <Button onClick={() => inputFileRef.current.click()} variant="main">
                            Unggah Resep
                        </Button>
                    </Box>
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
                                <Button variant="main">
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