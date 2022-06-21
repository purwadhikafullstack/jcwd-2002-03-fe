import React, { useState } from "react"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, Grid, GridItem, Icon, Img, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useToast } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { MdEmail } from "react-icons/md"
import { IoIosLock } from "react-icons/io"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useFormik } from "formik"
import * as Yup from "yup"
import api from "../../lib/api"

const register = () => {
    const [hidden, setHidden] = useState(false)
    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            email: "",
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("This field is required"),
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
                    if (res.data.message !== undefined) {
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
                    <Box mb="20px">
                        <Text variant="title" display={["none", "block", "block"]}>Masuk</Text>
                    </Box>
                    <Stack spacing={["12px", "24px"]}>
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
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Checkbox marginY={["10px", "20px"]}>
                            <Text>
                                ingat saya
                            </Text>
                        </Checkbox>

                        <Text as="button">Lupa kata Sandi ?</Text>
                    </Box>
                    <Button
                        variant="main"
                        width="100%"
                        height={["48px"]}
                        onClick={formik.handleSubmit}
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Masuk
                    </Button>
                    <Box marginY={["10px", "20px"]} display="flex" alignItems="center" justifyContent="space-between">
                        <Divider width="30%" />
                        <Text mx={2} flexWrap="nowrap">Atau Masuk Dengan</Text>
                        <Divider width="30%" />
                    </Box>
                    <Box
                        mt={["32px"]}
                        display="flex"
                        alignItems="center"
                    >
                        <Button width="100%" height="48px" variant="outline">
                            <Icon as={FcGoogle} mr={2} boxSize={6} />
                            <Text>Masuk Dengan Google</Text>
                        </Button>

                    </Box>
                </Box>
            </GridItem >
        </Grid >
    )
}

export default register