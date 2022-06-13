import {
  Box,
  Button,
  Checkbox,
  Input,
  Stack,
  Text,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Icon,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const AddressFormComponent = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const formik = useFormik({
    initialValues: {
      labelAlamat: "",
      namaDepan: "",
      namaBelakang: "",
      nomorHp: "",
      provinsi: "",
      kotaKabupaten: "",
      kecamatan: "",
      alamat: "",
      kodePos: "",
    },

    validationSchema: Yup.object().shape({
      labelAlamat: Yup.string().required("This field is required"),
      namaDepan: Yup.string().required("This field is required"),
      namaBelakang: Yup.string().required("This field is required"),
      nomorHp: Yup.string().required("This field is required"),
      provinsi: Yup.string().required("This field is required"),
      kotaKabupaten: Yup.string().required("This field is required"),
      kecamatan: Yup.string().required("This field is required"),
      alamat: Yup.string().required("This field is required"),
      kodePos: Yup.string().required("This field is required"),
    }),
    validateOnChange: false,
    onSubmit: (values) => {},
  });
  const inputHandler = (event) => {
    const { value, name, checked } = event.target;
    formik.setFieldValue(name, value);
  };

  return (
    <Box
      display={["block", "block", "block"]}
      mx="auto"
      w={["90%", "60%", "40%"]}
      mb="100px"
      justifyContent={"center"}
    >
      <Text mb="68px" variant="title">
        Alamat Pengiriman
      </Text>
      <Text mb="16px" variant="mini-title">
        Label Alamat
      </Text>
      <Input onChange={inputHandler} name="labelAlamat" />
      <Text mt="52px" mb="36px" variant="mini-title">
        Info Penerima
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={[0, 4, 4]}
      >
        <GridItem colspan={[1, 1, 1]} mb="36px">
          <Text mb="16px" variant="caption">
            Nama Depan
          </Text>
          <Input onChange={inputHandler} name="namaDepan" />
        </GridItem>
        <GridItem colspan={[1, 1, 1]}>
          <Text mb="16px" variant="caption">
            Nama Belakang
          </Text>
          <Input onChange={inputHandler} name="namaBelakang" />
        </GridItem>
      </Grid>
      <Text mb="16px" variant="caption">
        Nomor HP
      </Text>
      <InputGroup>
        <InputLeftAddon
          bg="white"
          children={
            <Stack direction="row">
              <Text pt="2px">+62</Text>
              <Stack spacing="-0.5">
                <Icon as={IoIosArrowUp} />
                <Icon as={IoIosArrowDown} />
              </Stack>
            </Stack>
          }
        />
        <Input mb="36px" type="tel" onChange={inputHandler} name="nomorHp" />
      </InputGroup>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colspan={[2, 1, 1]} mb="36px">
          <Text mb="16px" variant="caption">
            Provinsi
          </Text>
          <InputGroup>
            <Input onChange={inputHandler} name="provinsi" />
            <InputRightAddon
              bg="white"
              children={<Icon as={IoIosArrowDown} />}
            />
          </InputGroup>
        </GridItem>
        <GridItem colspan={[2, 1, 1]}>
          <Text mb="16px" variant="caption">
            Kota/Kabupaten
          </Text>
          <InputGroup>
            <Input onChange={inputHandler} name="kotaKabupaten" />
            <InputRightAddon
              bg="white"
              children={<Icon as={IoIosArrowDown} />}
            />
          </InputGroup>
        </GridItem>
      </Grid>
      <Text mb="16px" variant="caption">
        Kecamatan
      </Text>
      <InputGroup w="215.5px">
        <Input mb="36px" onChange={inputHandler} name="kecamatan" />
        <InputRightAddon bg="white" children={<Icon as={IoIosArrowDown} />} />
      </InputGroup>
      <Text mb="16px" variant="caption">
        Alamat
      </Text>
      <Input mb="36px" onChange={inputHandler} name="alamat" />
      <Text mb="16px" variant="caption">
        Kode Pos
      </Text>
      <InputGroup w="216px">
        <Input mb="36px" onChange={inputHandler} name="kodePos" />
        <InputRightAddon bg="white" children={<Icon as={IoIosArrowDown} />} />
      </InputGroup>
      <Stack>
        <Checkbox onChange={inputHandler} mb="50px">
          <Text variant="caption">Simpan sebagai alamat utama</Text>
        </Checkbox>
        <Stack direction="row" justifyContent="space-between">
          <Button variant="main-outline" w="300px">
            <Text>Batalkan</Text>
          </Button>
          <Button
            // tinggal formik.values. apa trs dibalik tandaseru
            isDisabled={formik.values}
            _hover={{
              bgColor: "#006D7F",
              color: "#FFFFF0",
            }}
            variant="main"
            w="300px"
            onClick={formik.handleSubmit}
          >
            <Text>Simpan Alamat</Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default AddressFormComponent;
