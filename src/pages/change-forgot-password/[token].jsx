import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
  InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import api from "../../lib/api";

const forgotPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { token } = router.query;

  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("This field is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      setTimeout(async () => {
        try {
          const res = await api.patch(
            `/auth/change-password/${token}`,
            formik.values
          );


          toast({
            title: "Reset Password",
            description: res.data.message,
            status: "success",
            isClosable: true,
          });
          router.push("/auth/login");
        } catch (err) {
          toast({
            title: "error",
            description: err.message,
            status: "error",
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
    <Center>
      <Flex justify="center" m="56">
        <Box w="sm" shadow="2xl" p="8" borderRadius={10} bgColor="gray.200">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Reset password
          </Text>
          <Text textAlign="center">Enter your new password</Text>
          <form>
            <FormControl mt="2" isInvalid={formik.errors.password}>
              <FormLabel htmlFor="inputPassword">Password</FormLabel>
              <Input
                onChange={inputHandler}
                id="inputPassword"
                name="password"
                bgColor="white"
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement mt="4" h="full">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {" "}
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
              <FormHelperText>{formik.errors.password}</FormHelperText>
            </FormControl>

            <Flex mt="4" justify="center">
              <Button
                onClick={formik.handleSubmit}
                type="submit"
                disabled={formik.isSubmitting}
                colorScheme="teal"
              >
                Reset password
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Center>
  );
};

export default forgotPasswordPage;
