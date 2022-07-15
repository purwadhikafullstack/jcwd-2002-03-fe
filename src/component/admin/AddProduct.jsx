import React, { useEffect, useRef, useState } from "react"
import { Button, Modal, ModalFooter, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, Text, Select, useToast, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Grid, GridItem, Img, AspectRatio, } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { FiDownload } from "react-icons/fi";
import { CloseIcon } from "@chakra-ui/icons";
import api from "../../lib/api";

const AddProduct = ({ fetchData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [disabeled, setDisable] = useState(true)

    // state for picture preview Onload
    const [selectedImages, setSelectedImages] = useState([])

    // state for upload data product
    const [selectedFileArray, setSelectedFileArray] = useState()

    // state for response from create product, for params uploadHandler
    const [newProduct, setNewProduct] = useState()


    const [categoryData, setCategoryData] = useState()
    const [tabIndex, setTabIndex] = useState(0)
    const inputRef = useRef()
    const toast = useToast()

    // eslint-disable-next-line no-unused-vars
    const formik = useFormik({
        initialValues: {
            med_name: "",
            nomer_med: "",
            nomer_bpom: "",
            selling_price: 0,
            discount: 0.0,
            indikasi: "",
            kandungan: "",
            kemasan: "strip",
            categoryId: 0,
        },
        validationSchema: Yup.object().shape({
            med_name: Yup.string().required("this Field require"),
            nomer_med: Yup.string().required("this Field require"),
            nomer_bpom: Yup.string().required("this Field require"),
            selling_price: Yup.string().required("this Field require"),
            discount: Yup.number("input discount in decimal"),
            indikasi: Yup.string("number not allowed"),
            kandungan: Yup.string("number not allowed"),
            kemasan: Yup.string().required("this Field require"),
            categoryId: Yup.string().required("this Field require"),
        }),
        validateOnChange: false,
        onSubmit: (values) => {
            setTimeout(async () => {
                try {
                    const res = await api.post("/product/newProduct", values);

                    if (res?.data?.message !== undefined) {
                        toast({
                            title: "input product success",
                            description: `${res.data.message} `,
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                    }

                    formik.setSubmitting(false);
                    setNewProduct(res.data.result)
                    setDisable(false)
                    setTabIndex(1)

                } catch (err) {
                    toast({
                        status: "error",
                        title: "error input product",
                        description: err?.response?.data?.message || err.message,
                        duration: 9000,
                        position: "top-right",
                        isClosable: true,
                    });
                    formik.setSubmitting(false);
                }
            }, 3000);
        },
    })

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    const fetchCategory = async () => {
        onOpen()
        try {
            const res = await api.get("/category")
            const data = res?.data?.result

            setCategoryData(data)
        } catch (err) {
            toast({
                status: "error",
                title: "error fetch category",
                description: err?.response?.data?.message || err.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            })
        }
    }

    const inputHandler = (event) => {
        const { value, name } = event.target;
        formik.setFieldValue(name, value);
    };

    const handleOnChange = (event) => {
        setSelectedFileArray(event.target.files)
        const fileArray = Array.from(event.target.files)

        //  untuk cetak gambar onload
        const imagesArray = fileArray.map((val) => {
            return URL.createObjectURL(val)
        })

        setSelectedImages(imagesArray)
    }

    const handleUpload = async () => {
        try {
            const formData = new FormData()

            Object.values(selectedFileArray).forEach(async (val,) => {
                formData.append("product_images", val)
            })

            const res = await api.post(`/product/images/upload/${newProduct.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (res?.data?.message !== undefined) {
                toast({
                    title: "upload Success",
                    description: `${res.data.message} ${selectedFileArray.length} images `,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
            }
            setSelectedFileArray([])
            setSelectedImages([])
            setDisable(true)
            setTabIndex(0)
            onClose()
            fetchData()

        } catch (err) {
            toast({
                status: "error",
                title: "Register Failed",
                description: err?.response?.data?.message || err.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            });
        }
    }

    const cancelInput = async () => {
        try {
            if (newProduct !== undefined) {
                await api.delete(`/product/delete/${newProduct.id}`)
                setNewProduct()
                setDisable(true)

                toast({
                    status: "warning",
                    title: "input product canceled",
                    duration: 5000,
                    position: "top-right",
                    isClosable: true,
                })
                setSelectedFileArray([])
                setSelectedImages([])
                setDisable(true)
                setTabIndex(0)
                return onClose()
            }
            return onClose()
        } catch (err) {
            onClose()
            return toast({
                status: "error",
                title: "delete fail",
                description: err?.response?.data?.message || err.message,
                duration: 5000,
                position: "top-right",
                isClosable: true,
            });
        }
    }


    // const noMed = () => {
    //     if (formik.values.categoryData) {
    //         const medcode = "F-"
    //         const nameCode = formik.values.med_name.slice(1, 4)
    //         const bpomCode = formik.values.no_bpom.slice(-3)
    //         const result = `${medcode}+${nameCode}+${bpomCode}`
    //         return result
    //     }
    //     const medcode = "R-"
    //     const nameCode = formik.values.name_med.slice(1, 4)
    //     const bpomCode = formik.values.no_bpom.slice(-3)
    //     const result = `${medcode}+${nameCode}+${bpomCode}`
    //     return result
    // }



    useEffect(() => {
        // fetchCategory()
    }, [])

    return (
        <>
            <Button
                onClick={() => fetchCategory()}
                fontSize="12px"
                p="5"
                leftIcon={<FiDownload size="20" />}
                variant="main"
                width="xs"
                colorScheme="teal"          
            >
                Tambah Produk
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                size="2xl"
                height="50%"
                closeOnOverlayClick={false}
                scrollBehavior="inside"
            >
                <ModalOverlay
                    bg='blackAlpha.300'
                    backdropFilter='blur(10px) hue-rotate(90deg)'
                />

                <ModalContent>
                    <Tabs index={tabIndex} isFitted variant='line' onChange={handleTabsChange} >
                        <ModalHeader fontSize="20px" fontWeight="bold">
                            <TabList >
                                <Tab _focus={{ borderBottomColor: "teal", outline: 0 }} _selected={{ color: "teal", fontWeight: "600" }} > Tambah Obat</Tab>
                                <Tab _focus={{ borderBottomColor: "teal", outline: 0 }} _selected={{ color: "teal", fontWeight: "600" }} isDisabled={disabeled}  > Upload Foto Obat</Tab>
                            </TabList>
                        </ModalHeader>
                        <ModalBody>
                            <TabPanels>
                                <TabPanel height="lg">
                                    <Box width="lg" height="md" px={2}>
                                        <Grid templateColumns="repeat(3,1fr)" alignItems="center" gap={2}>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Nama Obat</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="Masukkan nama obat"
                                                    onChange={inputHandler}
                                                    name="med_name"
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">No. Obat</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="No. Obat"
                                                    onChange={inputHandler}
                                                    name="nomer_med"
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">No. BPOM</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="Masukkan no. BPOM"
                                                    onChange={inputHandler}
                                                    name="nomer_bpom"
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Nilai Jual</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="Masukkan nilai jual"
                                                    onChange={inputHandler}
                                                    name="selling_price"
                                                    type="number"
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Discount</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="Masukkan nilai jual"
                                                    onChange={inputHandler}
                                                    name="discount"
                                                    defaultValue={0.00}
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Indikasi</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Input
                                                    placeholder="Masukkan Indikasi"
                                                    onChange={inputHandler}
                                                    name="indikasi"
                                                    disabled={!disabeled}
                                                />
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Kategori</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Select
                                                    bg="white"
                                                    color="black"
                                                    onChange={inputHandler}
                                                    name="categoryId"
                                                    placeholder="Pilih Kategori Obat"
                                                    disabled={!disabeled}
                                                >
                                                    {categoryData && categoryData.map((val) => {
                                                        return (
                                                            <option key={val.id} value={val.id}>{val.category_name}</option>
                                                        )
                                                    })}
                                                </Select>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Kemasan</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Select
                                                    bg="white"
                                                    color="black"
                                                    onChange={inputHandler}
                                                    name="kemasan"
                                                    placeholder="Pilih kemasan Obat"
                                                    disabled={!disabeled}
                                                >
                                                    <option value="strip">Strip</option>
                                                    <option value="botol">Botol</option>
                                                </Select>
                                            </GridItem>
                                            <GridItem colSpan={1}>
                                                <Text variant="caption-bold">Kandungan</Text>
                                            </GridItem>
                                            <GridItem colSpan={2}>
                                                <Select
                                                    bg="white"
                                                    color="black"
                                                    onChange={inputHandler}
                                                    name="kandungan"
                                                    placeholder="Pilih kandungan Obat"
                                                    disabled={!disabeled}
                                                >
                                                    <option value="non-herbal">Non-Herbal</option>
                                                    <option value="herbal">Herbal</option>
                                                </Select>
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                    <ModalFooter>
                                        <Button colorScheme="yellow" mr={3} onClick={() => cancelInput()}
                                            w="15%"
                                        >
                                            Batal
                                        </Button>
                                        <Button
                                            colorScheme="teal"
                                            w="15%"
                                            onClick={formik.handleSubmit}
                                            type="submit"
                                            isLoading={formik.isSubmitting}
                                            disabled={formik.isSubmitting}
                                            hidden={!disabeled}
                                        >
                                            Simpan
                                        </Button>
                                    </ModalFooter>
                                </TabPanel>
                                <TabPanel height="lg" >
                                    <Box>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <Input
                                                type="file"
                                                accept="image/png, image/jpeg"
                                                ref={inputRef}
                                                onChange={handleOnChange}
                                                multiple
                                                display="none"
                                                maxLength={5}
                                            />
                                            <Button onClick={() => inputRef.current.click()} variant="main" width="60%">
                                                Pilih Gambar
                                            </Button>
                                        </Box>
                                        <Box
                                            borderRadius="8px"
                                            border="2px teal dashed"
                                            my={2}
                                            height="sm"
                                            overflowY="auto"
                                        >
                                            <Grid templateColumns="repeat(4, 1fr)" gap={2} alignItems="center"
                                                justifyContent="center">
                                                {selectedImages && selectedImages.map((images) => {
                                                    return (
                                                        <GridItem key={images} colSpan={2} my={2} p={2}
                                                            boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                                                            justifyItems="center"
                                                            border="1px solid teal"
                                                            borderRadius="8px"
                                                        >
                                                            <CloseIcon
                                                                cursor="pointer"
                                                                onClick={() => {
                                                                    setSelectedImages(
                                                                        selectedImages.filter((e) => e !== images))
                                                                }}
                                                            />
                                                            <AspectRatio ratio={4 / 3}>
                                                                <Img textAlign="center" src={images} />
                                                            </AspectRatio>
                                                        </GridItem>
                                                    )
                                                })}
                                            </Grid>
                                        </Box>
                                    </Box>
                                    <ModalFooter mt={1}>
                                        <Button
                                            colorScheme="yellow"
                                            mr={3}
                                            onClick={() => cancelInput()}
                                            w="15%"
                                        >
                                            Batal
                                        </Button>
                                        <Button
                                            colorScheme="teal"
                                            w="15%"
                                            onClick={() => handleUpload()}
                                            type="submit"
                                            isLoading={formik.isSubmitting}

                                        >
                                            Simpan
                                        </Button>
                                    </ModalFooter>
                                </TabPanel>
                            </TabPanels>
                        </ModalBody>
                    </Tabs>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddProduct
