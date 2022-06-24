import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../lib/api";
import jsCookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signin } from "../../redux/reducer/authSlice";

const login = () => {
  const [hidden, setHidden] = useState(false);
  const toast = useToast();
  const authSelector = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const logoButton = useBreakpointValue({
    base: {
      google: "Google",
      faceBook: "Facebook",
    },
    md: {
      google: "Masuk dengan Google",
      faceBook: "Masuk dengan Facebook",
    },
  });

  const formik = useFormik({
    initialValues: {
      credential: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      credential: Yup.string().required("This field is required"),
      password: Yup.string().required("This field is required"),
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      //   console.log(values);
      setTimeout(async () => {
        try {
          const res = await api.post("/auth/signin", values);

          const userResponse = res.data.result;
          //   console.log(userResponse);

          jsCookies.set("user_token", userResponse.token);

          const userResponseAdded = { ...userResponse.user };

          dispatch(signin(userResponseAdded));

          formik.setSubmitting(false);
        } catch (err) {
          console.log(err);
          toast({
            title: "Login failed",
            description: "Wrong email or password",
            status: "error",
            position: "top",
          });
          formik.setSubmitting(false);
        }
      }, 3000);
    },
  });

  useEffect(() => {
    if (authSelector.id) {
      router.push("/home");
    }
  }, [authSelector.id]);

  return (
    <Grid templateColumns="repeat(2,1fr)" margin="auto" width="100%">
      <GridItem
        display={["none", "grid", "grid"]}
        colSpan={[0, 1, 1]}
        background="linear-gradient(142.04deg, rgba(254, 254, 254, 0) -1.93%, #E4F4F8 107.32%)"
      >
        <Img src="/login_image.svg" />
      </GridItem>
      <GridItem colSpan={[2, 1, 1]} alignItems="center" mt={[4]}>
        <Box width={["90%", "80%"]} margin="auto">
          <Box mt={["90px"]}>
            <Text variant="title" display={["none", "block", "block"]}>
              Masuk
            </Text>
            <Text variant="title" display={["block", "none", "none"]}>
              Masuk
            </Text>
          </Box>
          <Stack
            mt={["32px"]}
            display="flex"
            templateColumns="repeat(2,1fr)"
            spacing={["12px", "24px"]}
          >
            <FormControl isInvalid={formik.errors.credential}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdEmail} />
                </InputLeftElement>
                <Input
                  placeholder="email"
                  onChange={(event) =>
                    formik.setFieldValue("credential", event.target.value)
                  }
                />
              </InputGroup>
              <FormHelperText>{formik.errors.credential}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={formik.errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={IoIosLock} />
                </InputLeftElement>
                <Input
                  placeholder="password"
                  type={hidden ? "text" : "password"}
                  onChange={(event) =>
                    formik.setFieldValue("password", event.target.value)
                  }
                />
                <InputRightElement>
                  <Icon
                    as={hidden ? AiOutlineEye : AiOutlineEyeInvisible}
                    onClick={() => setHidden(!hidden)}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText>{formik.errors.password}</FormHelperText>
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox marginY={["25px", "40px"]}>
              <Text fontSize="12px" fontWeight="medium" variant="caption">
                Ingat saya
              </Text>
            </Checkbox>
            <Link
              onClick={() => router.push("/auth/request-reset-password")}
              color="#B4B9C7"
              fontSize="12px"
            >
              Lupa kata sandi?
            </Link>
          </HStack>
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
          <Box
            marginY={["10px", "20px"]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Divider />
            <Text mx={2}>atau</Text>
            <Divider />
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
          <HStack spacing="1" justify="center" mt={["48px"]} variant="caption">
            <Text>Belum punya akun?</Text>
            <Link
              onClick={() => router.push("/auth/register")}
              color="blue.400"
            >
              Register
            </Link>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default login;
