import React, { useEffect, useState } from "react"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, Grid, GridItem, Icon, Img, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useToast } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"
import { IoIosLock } from "react-icons/io"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Cookie from "js-cookie"
import { loginAdmin, selectAdminAuth } from "../../../redux/reducer/authAdminSlice"
import api from "../../../lib/api"

const login = () => {
    const [hidden, setHidden] = useState(false)
    const [accept, setAccept] = useState(false)
    const toast = useToast();
    const authAdminSelector = useSelector(selectAdminAuth)
    const dispatch = useDispatch()

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
        },
        validationSchema: Yup.object().shape({
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
                    const res = await api.post("/auth/admin/login", values);
                    if (res?.data?.message !== undefined) {
                        toast({
                            title: "Account created.",
                            description: `${res.data.message} `,
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                    }

                    const stringifyData = JSON.stringify(res.data.result);
                    Cookie.set("token", stringifyData.token)
                    localStorage.setItem("user", res.data.result)
                    dispatch(loginAdmin(res.data.result.user))
                    formik.setSubmitting(false);

                    router.push("/admin-dashboard")
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

    useEffect(() => {
        if (authAdminSelector.id) {
            router.push("/admin-dashboard")
        }
    }, [])
    return (
        <Grid templateColumns="repeat(2,1fr)" margin="auto" width="100%" height="100vh">
            <GridItem display={["none", "grid", "grid"]} colSpan={[0, 1, 1]} background="linear-gradient(142.04deg, rgba(254, 254, 254, 0) -1.93%, #E4F4F8 107.32%)">
                <Img src="/login_image.svg" />
            </GridItem>
            <GridItem colSpan={[2, 1, 1]} alignItems="center" mt={[4]}>
                <Box width={["90%", "80%"]} margin="auto">
                    <Stack spacing={["12px", "16px"]}>
                        < Box >
                            <Text variant="title" display={["none", "block", "block"]}>Masuk</Text>
                        </Box>
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
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Checkbox
                                isChecked={accept}
                                onChange={() => setAccept(!accept)}
                            >
                                <Text variant="caption">
                                    Ingat saya
                                </Text>
                            </Checkbox>
                            <Text variant="caption">
                                Lupa kata sandi ?
                            </Text>
                        </Box>
                    </Stack>
                    <Button
                        colorScheme="teal"
                        width="100%"
                        height={["48px"]}
                        onClick={formik.handleSubmit}
                        type="submit"
                        isLoading={formik.isSubmitting}
                        disabled={formik.isSubmitting}
                        mt="25px"
                    >
                        Masuk
                    </Button>
                    <Box marginY={["10px", "20px"]} display="flex" alignItems="center" justifyContent="space-between">
                        <Divider width="30%" />
                        <Text mx={2} textAlign="center">Atau Masuk Dengan</Text>
                        <Divider width="30%" />
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
                                <Text>Masuk dengan Google</Text>
                            </Button>
                        </GridItem>
                    </Grid>
                </Box>
            </GridItem >
        </Grid >
    )
}

export default login