import React, { useState, useRef } from "react"
import { Box, Button, Container, Divider, Image, Input, List, ListIcon, ListItem, Spinner, Stack, Text, useToast } from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"
import { useRouter } from "next/router"
import { CloseIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux"
import { selectAuth } from "../../redux/reducer/authSlice"
import api from "../../lib/api"

const uploadResep = () => {
    const [hideUploadForm, setHideUploadForm] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [transactionId, setTransactionId] = useState()
    const authSelector = useSelector(selectAuth)


    // state for upload data product
    const [selectedFileArray, setSelectedFileArray] = useState([])

    const inputRef = useRef()
    const router = useRouter()
    const toast = useToast()

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFileArray(Array.from(e.dataTransfer.files))
        }
    };

    const handleChange = (e) => {
        setSelectedFileArray(Array.from(e.target.files))
    }

    const uploadHandler = () => {
        setTimeout(async () => {
            try {
                setUploading(true)
                setHideUploadForm(true)
                const formData = new FormData()

                Object.values(selectedFileArray).forEach(async (val,) => {
                    formData.append("prescriptions", val)
                })
                const res = await api.post("/transaction/prescription", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

                setTransactionId(res.data.result.id)
                setUploading(false)
            } catch (err) {
                toast({
                    title: "upload error",
                    status: "error",
                    description: err?.response?.data?.message || err.message,
                    duration: 5000,
                    isClosable: true
                })
            }
        }, 3000)
    }

    const cancelHandler = () => {
        setSelectedFileArray([])
    }

    const lihatPemesananHandler = () => {
        if (authSelector.Addresses.length === 0) {
            return router.push({ pathname: "/address-form", query: { id: transactionId } })
        }
        return router.push({ pathname: "/checkout", query: { id: transactionId } })
    }

    if (!authSelector.id || authSelector.role !== "user") {
        router.push("/auth/login")

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
        <Container
            width={["100%", "90%", "90%"]}
            maxWidth={["100%", "90%", "90%"]}
            marginLeft={["0px", "auto", "auto"]}
            marginRight={["0px", "auto", "auto"]}
            marginBottom={[10, 10, 10]}
        >
            <Box hidden={hideUploadForm}>
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
                    height={["90vh", "60vh", "60vh"]}
                    marginLeft={["0px", "auto", "auto"]}
                    marginRight={["0px", "auto", "auto"]}
                    boxShadow={["none", "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"]}
                    padding={[3, 8, 8]}
                    borderRadius="18px"

                >
                    <Text variant={["title", "caption-bold"]}>
                        Unggah Resep Dokter
                    </Text>
                    <Divider mb={[6, 6, 6]} mt={[2, 3, 3]} />
                    <Box display={["block", "none", "none"]}>
                        <Text
                            variant="caption"
                            marginBottom={[3, 5, 5]}
                        >
                            Tak perlu antre &amp; obat langsung dikirimkan ke lokasi anda! <b>Foto tidak boleh lebih dari 10 MB</b>
                        </Text>
                    </Box>
                    <Box
                        height="70%"
                        width="100%"
                        border="1px dashed teal"
                        borderRadius="16px"
                        alignItems="center"
                        justifyContent="center"
                        marginY="auto"
                        onDragEnter={handleDrag}
                        onSubmit={(e) => e.preventDefault()}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <Stack spacing="20px" width="100%">
                            <Box display={selectedFileArray === 0 ? "none" : "block"} >
                                <List>
                                    {selectedFileArray && selectedFileArray.map((val) => {
                                        return (
                                            <ListItem key={val.name} justifyContent="space-between">
                                                <ListIcon key={val.name} as={MdCheckCircle} color='green.500' />
                                                {val.name}
                                                <CloseIcon key={val.id} ml="10px" onClick={() => {
                                                    setSelectedFileArray(selectedFileArray.filter((e) => e !== val))
                                                }} />
                                            </ListItem>
                                        )
                                    })
                                    }
                                </List>
                            </Box>
                            <Box alignItems="center" justifyContent="center" display={["none", "flex"]}>
                                <Box>
                                    {selectedFileArray.length === 0 &&
                                        <>
                                            <Text variant="title" color="grey">Tarik &amp; Letakan File</Text>
                                            <Box alignItems="center" justifyContent="center" display={["none", "flex"]} width="30%" marginX="auto">
                                                <Divider />
                                                <Text variant="subtile" color="grey">
                                                    atau
                                                </Text>
                                                <Divider />
                                            </Box>
                                        </>
                                    }
                                </Box>
                            </Box>
                            <Input type="file" id="input-file-upload" multiple ref={inputRef} display="none" onChange={handleChange} />
                            <Box alignItems="center" justifyContent="center" display="flex">
                                <Button
                                    colorScheme="teal"
                                    type="button"
                                    onClick={() => inputRef.current.click()}
                                >
                                    Upload Resep
                                </Button>
                            </Box>
                        </Stack>
                    </Box>


                    <Box justifyContent="end" display="flex" alignItems="center" my={3}>
                        {selectedFileArray.length !== 0 &&
                            <Box width={["60%", "30%"]} alignItems="center" display="flex" justifyContent="space-around">
                                <Button height="36px" variant="outline" type="button" colorScheme="teal" onClick={() => cancelHandler()}>
                                    Cancel
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    type="button"
                                    height="36px"
                                    variant="solid"
                                    isLoading={uploading}
                                    onClick={() => uploadHandler()}
                                >
                                    Unggah
                                </Button>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
            {
                uploading === true &&
                <>
                    <Spinner
                        thickness='6px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color="teal"
                        size='xl'
                        display="flex"
                        mt="10px"
                        mb="auto"
                        ml="auto"
                        mr="auto"
                    />
                    <Text textAlign="center" variant="subtitle">Sedang menunggah...</Text>
                </>
            }
            {
                hideUploadForm === true && uploading === false &&
                <Box
                    justifyContent="center"
                    alignItems="center"
                    width={["100%", "70%", "70%"]}
                    height={["50vh", "80vh", "80vh"]}
                    marginLeft={["0px", "auto", "auto"]}
                    marginRight={["0px", "auto", "auto"]}
                    marginTop={["30px", "5px"]}
                    padding={[3, 6, 6]}
                    display="flex"
                >
                    <Stack spacing="30px">
                        <Image src="/uploadResepBerhasil.svg" />
                        <Box>
                            <Text textAlign="center" variant="title">Unggah Resep Berhasil</Text>
                            <Text textAlign="center" variant="caption">Kamu akan mendapatkan notifikasi apabila resep doktermu</Text>
                            <Text textAlign="center" variant="caption">dikonfirmasi oleh admin</Text>
                        </Box>
                        <Button variant="main" onClick={() => lihatPemesananHandler()}>Lihat Proses Pemesanan</Button>
                    </Stack>
                </Box>
            }
        </Container >
    )
}

export default uploadResep