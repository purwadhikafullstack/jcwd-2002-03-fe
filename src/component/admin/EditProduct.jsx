import React, { useEffect, useRef, useState } from "react"
import { Button, Modal, ModalFooter, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, Text, Select, useToast, Tabs, TabList, Tab, TabPanels, TabPanel, Box, Grid, GridItem, Img, AspectRatio, Icon, } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup"
import { CloseIcon } from "@chakra-ui/icons";
import { FaRegEdit } from "react-icons/fa";
import api from "../../lib/api";


const EditProduct = ({
    id,
    medName,
    nomerMed,
    nomerBpom,
    sellingPrice,
    discount,
    indikasi,
    kandungan,
    kemasan,
    categoryId,
    imagesProduct
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImages, setSelectedImages] = useState([])
    const [selectedFileArray, setSelectedFileArray] = useState()
    const [productImage, setProductImage] = useState()
    const [updateProduct, setUpdateProduct] = useState(
        {
            id,
            med_name: medName,
            nomer_med: nomerMed,
            nomer_bpom: nomerBpom,
            selling_price: sellingPrice,
            discount,
            indikasi,
            kandungan,
            kemasan,
            categoryId,
        }
    )
    const [category, setCategory] = useState()
    const inputRef = useRef()
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            id,
            med_name: medName,
            nomer_med: nomerMed,
            nomer_bpom: nomerBpom,
            selling_price: sellingPrice,
            discount,
            indikasi,
            kandungan,
            kemasan,
            categoryId,
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
                    const res = await api.patch(`/product/edit/${id}`, values);

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
                    setUpdateProduct(res.data.result)
                } catch (err) {
                    toast({
                        status: "error",
                        title: "error update data product",
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

    const handleOnChange = (event) => {
        setSelectedFileArray(event.target.files)
        const fileArray = Array.from(event.target.files)

        //  untuk cetak gambar onload
        const imagesArray = fileArray.map((val) => {
            return URL.createObjectURL(val)
        })

        setSelectedImages(imagesArray)
    }

    const inputHandler = (event) => {
        const { value, name } = event.target;
        formik.setFieldValue(name, value);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData()

            Object.values(selectedFileArray).forEach(async (val,) => {
                formData.append("product_images", val)
            })

            const res = await api.patch(`/product/${id}/images/upload/${imagesProduct.id}`, formData, {
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
            onClose()

        } catch (err) {
            onClose()
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

    const fetchCategory = async () => {
        try {
            const res = await api.get("/category/findAll")
            const data = res.data.result
            setCategory(data)

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

    const fetchImage = async () => {
        try {
            const res = await api.get(`/${id}/image/`)
            const data = res.data.result
            setProductImage(data)
        } catch (err) {
            toast({
                status: "error",
                title: "error fetch picture",
                description: err?.response?.data?.message || err.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            })
        }
    }

    const deleteImageHandler = async (images) => {
        try {
            const res = await api.delete(`/image/delete/${productImage.id}`)
            toast({
                status: "error",
                title: "error delete picture",
                description: res?.data?.message || res.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            })
            setProductImage(productImage.filter((e) => e !== images))
        } catch (err) {
            toast({
                status: "error",
                title: "error delete picture",
                description: err?.response?.data?.message || err.message,
                duration: 9000,
                position: "top-right",
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])
    return (
        <>
            <Button
                onClick={onOpen}
                colorScheme="yellow"
            >
                <Icon as={FaRegEdit} boxSize={6} />
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
                    <Tabs isFitted variant='line'>
                        <ModalHeader fontSize="20px" fontWeight="bold">
                            <TabList >
                                <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}> Tambah Obat</Tab>
                                <Tab _focus={{ borderBottomColor: "teal", outline: 0 }} onClick={() => fetchImage()}> Upload Foto Obat</Tab>
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
                                                    defaultValue={updateProduct.med_name}
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
                                                    defaultValue={updateProduct.nomer_med}
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
                                                    defaultValue={updateProduct.nomer_bpom}
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
                                                    defaultValue={updateProduct.selling_price}

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
                                                    defaultValue={updateProduct.discount}
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
                                                    defaultValue={updateProduct.indikasi}
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
                                                    defaultValue={updateProduct.categoryId}
                                                >
                                                    {category && category.map((val) => {
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
                                                    defaultValue={updateProduct.kemasan}
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
                                                    defaultValue={updateProduct.kandungan}
                                                >
                                                    <option value="non-herbal">Non-Herbal</option>
                                                    <option value="herbal">Herbal</option>
                                                </Select>
                                            </GridItem>
                                        </Grid>
                                    </Box>
                                    <ModalFooter>
                                        <Button colorScheme="yellow" mr={3} onClick={onClose}
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
                                                accept="image/*"
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
                                                {productImage && productImage.map((images) => {
                                                    return (
                                                        <GridItem key={images} colSpan={2} my={2} p={2}
                                                            boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
                                                            justifyItems="center"
                                                            border="1px solid teal"
                                                            borderRadius="8px"
                                                        >
                                                            <CloseIcon
                                                                cursor="pointer"
                                                                onClick={() =>
                                                                    deleteImageHandler()
                                                                    // {
                                                                    // setProductImage(
                                                                    //     productImage.filter((e) => e !== images))
                                                                    // }
                                                                }
                                                            />
                                                            <AspectRatio ratio={4 / 3}>
                                                                <Img textAlign="center" src={images} />
                                                            </AspectRatio>
                                                        </GridItem>
                                                    )
                                                })}
                                            </Grid>
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
                                            onClick={onClose}
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

export default EditProduct