import React, { useState } from "react"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, Grid, GridItem, Icon, Img, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useBreakpointValue, useToast } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { IoIosLock } from "react-icons/io"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useFormik } from "formik"
import * as Yup from "yup"
import api from "../../lib/api"

const register = () => {
    const [hidden, setHidden] = useState(false)
    const [accept, setAccept] = useState(false)
    const toast = useToast();

    const logoButton = useBreakpointValue({
        base: {
            google: "Google",
            faceBook: "Facebook"
        },
        md: {
            google: "Masuk dengan Google",
            faceBook: "Masuk dengan Facebook"
        }

    })

    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            email: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("This field is required").min(5, "minimum 5 character").max(20, "maximum 20 character"),
            password: Yup.string()
                .required("This field is required")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
            email: Yup.string().required("This field is required").email("invalid email"),
        }),
        validateOnChange: false,
        onSubmit: (values) => {
            setTimeout(async () => {
                try {
                    const res = await api.post("/auth/register", values);
                    if (res?.data?.message !== undefined) {
                        toast({
                            title: "Account created.",
                            description: `${res.data.message} `,
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        });
                    }

                    formik.setSubmitting(false);
                } catch (err) {
                    toast({
                        status: "error",
                        title: "Register Failed",
                        description: err?.response?.data?.message || err.message,
                        duration: 9000,
                        position: "top-right",
                        isClosable: true,
                    });
                    formik.setSubmitting(false);
                }
            }, 3000);
        },
    });

    const inputHandler = (event) => {
        const { value, name } = event.target;
        formik.setFieldValue(name, value);
    };

    return (
        <Grid templateColumns="repeat(2,1fr)" margin="auto" width="100%" height="100vh">
            <GridItem display={["none", "grid", "grid"]} colSpan={[0, 1, 1]} background="linear-gradient(142.04deg, rgba(254, 254, 254, 0) -1.93%, #E4F4F8 107.32%)">
                <Img src="/login_image.svg" />
            </GridItem>
            <GridItem colSpan={[2, 1, 1]} alignItems="center" mt={[4]}>
                <Box width={["90%", "80%"]} margin="auto">
                    < Box >
                        <Text variant="title" display={["none", "block", "block"]}>Mari Kita Mulai</Text>
                        <Text variant="title" display={["block", "none", "none"]}>Register</Text>
                        <Text mt={["12px"]} variant="caption">Sudah punya akun? <b>Masuk</b></Text>
                    </Box>
                    <Grid
                        mt={["32px"]}
                        display="flex"
                        templateColumns="repeat(2,1fr)"
                        gap={4}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <GridItem colSpan={1} width="100%">
                            <Button width="100%" height="48px" variant="outline">
                                <Icon as={FcGoogle} mr={2} boxSize={6} />
                                <Text>{logoButton.google}</Text>
                            </Button>
                        </GridItem>
                        <GridItem colSpan={1} width="100%">
                            <Button width="100%" height="48px" background="#527BCB">
                                <Icon as={BsFacebook} color="white" mr={2} boxSize={6} />
                                <Text>{logoButton.faceBook}</Text>
                            </Button>
                        </GridItem>
                    </Grid>
                    <Box marginY={["10px", "20px"]} display="flex" alignItems="center" justifyContent="space-between">
                        <Divider />
                        <Text mx={2}>atau</Text>
                        <Divider />
                    </Box>
                    <Stack spacing={["12px", "24px"]}>
                        <FormControl isInvalid={formik.errors.name}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Icon as={CgProfile} />
                                </InputLeftElement>
                                <Input placeholder="name" name="name" onChange={inputHandler} />
                            </InputGroup>
                            <FormHelperText>{formik.errors.name}</FormHelperText>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.email}>
                            <FormLabel htmlFor='email'>Email Address</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Icon as={MdEmail} />
                                </InputLeftElement>
                                <Input placeholder="Email Address" type="email" name="email" onChange={inputHandler} />
                            </InputGroup>
                            <FormHelperText>{formik.errors.email}</FormHelperText>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.password}>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                >
                                    <Icon as={IoIosLock} />
                                </InputLeftElement>
                                <Input name="password" placeholder="password" type={hidden ? "text" : "password"} onChange={inputHandler} />
                                <InputRightElement>
                                    <Icon as={hidden ? AiOutlineEye : AiOutlineEyeInvisible} onClick={() => setHidden(!hidden)} />
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText>{formik.errors.password}</FormHelperText>
                        </FormControl>
                    </Stack>
                    <Checkbox
                        marginY={["25px", "40px"]}
                        isChecked={accept}
                        onChange={() => setAccept(!accept)}
                    >
                        <Text variant="caption">
                            Saya setuju dengan <b color="teal"> persyaratan </b> &amp; <b color="teal"> ketentuan </b>
                        </Text>
                    </Checkbox>
                    <Button
                        colorScheme="teal"
                        width="100%"
                        height={["48px"]}
                        onClick={formik.handleSubmit}
                        type="submit"
                        isLoading={formik.isSubmitting}
                        disabled={accept === false}
                    >
                        Register
                    </Button>
                </Box>
            </GridItem >
        </Grid >
    )
}

export default register