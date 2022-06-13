import {
  Box,
  Button,
  Checkbox,
  color,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const RightSectionAdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack ml="14" mt="4">
      <Heading>
        <Text ml="28px" mt="77px" fontSize="24px">
          Masuk
        </Text>
      </Heading>
      <Box>
        <Text ml="37px" mt="20px" fontSize="14px">
          Email
        </Text>
        <Input
          mt="2"
          ml="37px"
          w="531px"
          placeholder="Masukkan Email"
          htmlSize="531px"
        />

        <Text ml="37px" mt="20px" fontSize="14px">
          Password
        </Text>
        <InputGroup>
          <Input
            mt="2"
            ml="37px"
            w="531px"
            placeholder="Masukkan Password"
            htmlSize="531px"
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement h="full">
            <Button
              mr="232px"
              mt="9px"
              variant="ghost"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {" "}
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Box>
        <Checkbox ml="37px">
          <Text mt="1" fontSize="12px">
            Ingat Saya
          </Text>
        </Checkbox>
        <Text
          ml="359px"
          as="span"
          color="gray"
          fontSize="12px"
          _hover={{ cursor: "pointer" }}
        >
          <Link>Lupa Kata Sandi ?</Link>
        </Text>
      </Box>

      <Box>
        <Button
          color="white"
          background="#009B90"
          mt="8"
          ml="37px"
          w="531px"
          _hover={{
            background: "#009B90",
            color: "gray.300",
          }}
        >
          Masuk
        </Button>
      </Box>

      <Box>
        <Text mt="12" mr="28" textAlign="center">
          Atau Masuk Dengan
        </Text>
      </Box>

      <Box>
        <Button ml="37px" w="531px" mt="12">
          G Masuk Dengan Google
        </Button>
      </Box>

      <Text pt="12" textAlign="center" pr="28">
        <Text as="span">Belum Punya Akun? </Text>
        <Link color="blue.300">Daftar</Link>
      </Text>
    </Stack>
  );
};

export default RightSectionAdminLogin;
