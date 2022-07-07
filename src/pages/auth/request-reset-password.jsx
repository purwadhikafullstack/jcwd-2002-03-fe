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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import api from "../../lib/api";

const requestResetPassword = () => {
  const toast = useToast();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      credential: "",
    },
    validationSchema: Yup.object().shape({
      credential: Yup.string()
        .required("This field is required")
        .email("invalid email"),
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      setTimeout(async () => {
        try {
          await api.post(`/auth/forgot-password-email`, formik.values);

          toast({
            title: "Reset Password",
            description: "confirmation has been send to your email",
            status: "success",
            duration: 2000,
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
      <Flex m="56" justify="center">
        <Box w="sm" shadow="2xl" p="8" borderRadius={10} bgColor="gray.200">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            Reset password
          </Text>
          <Text textAlign="center">
            Enter your email to reset your password
          </Text>
          <form>
            <FormControl mt="2" isInvalid={formik.errors.credential}>
              <FormLabel htmlFor="inputEmail">Email</FormLabel>
              <Input
                onChange={(event) => formik.setFieldValue("credential", event.target.value)}
                id="inputEmail"
                name="email"
                bgColor="white"
              />
              <FormHelperText>{formik.errors.credential}</FormHelperText>
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

export default requestResetPassword;
