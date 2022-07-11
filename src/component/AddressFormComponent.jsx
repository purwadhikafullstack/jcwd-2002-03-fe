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
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";
import api from "../lib/api"

const AddressFormComponent = () => {
  const toast = useToast()

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
      nama: "",
      main_address: false
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
    onSubmit: async (values) => {
      try {
        const res = await api.post("/profile/tambahAl", values)
        if (res.data.message !== undefined) {
          toast({
            status: "success",
            title: "Add new Address success",
            description: res.data.message || "add New Address success",
            isClosable: true,
            duration: 9000,
            position: "top-right"
          })
        }
        window.history.back();

      } catch (err) {
        toast({
          status: "error",
          title: "error add new Address",
          description: err?.response?.data?.message || err?.message,
          duration: 9000,
          isClosable: true,
          position: "top-right"
        })
      }
    },
  });

  const mainAddresHandler = (event) => {
    formik.setFieldValue("main_address", event.target.checked)
  }

  useEffect(() => { }, [])

  return (
    <Box
      display={["block", "block", "block"]}
      mx="auto"
      w={["90%", "60%", "40%"]}
      mb={["50px", "50px", "100px"]}
      justifyContent="center"
    >
      <Text mb="68px" variant="title">
        Alamat Pengiriman
      </Text>
      <FormControl isInvalid={formik.errors.labelAlamat}>
        <FormLabel>
          <Text mb="16px" variant="mini-title">
            Label Alamat
          </Text>
        </FormLabel>
        <Input
          onChange={(event) =>
            formik.setFieldValue("labelAlamat", event.target.value)
          }
        />
        <FormHelperText>{formik.errors.labelAlamat}</FormHelperText>
      </FormControl>
      <Text mt="52px" mb="36px" variant="mini-title">
        Info Penerima
      </Text>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={[0, 4, 4]}
      >
        <GridItem colSpan={[1, 1, 1]} mb="36px">
          <Text mb="16px" variant="caption">
            Nama Depan
          </Text>
          <Input
            onChange={event => formik.setFieldValue("namaDepan", event.target.value)}
          />
        </GridItem>
        <GridItem colSpan={[1, 1, 1]}>
          <FormControl isInvalid={formik.errors.namaBelakang}>
            <FormLabel>
              <Text mb="16px" variant="caption">
                Nama Belakang
              </Text>
            </FormLabel>
            <Input
              onChange={event => formik.setFieldValue("namaBelakang", event.target.value)}
            />
            <FormHelperText>{formik.errors.namaBelakang}</FormHelperText>
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isInvalid={formik.errors.nomorHp}>
        <FormLabel>
          <Text mb="16px" variant="caption">
            Nomor Hp
          </Text>
        </FormLabel>
        <InputGroup>
          <InputLeftAddon bg="white">
            <Stack direction="row">
              <Text pt="2px">+62</Text>
              <Stack spacing="-0.5">
                <Icon as={IoIosArrowUp} />
                <Icon as={IoIosArrowDown} />
              </Stack>
            </Stack>
          </InputLeftAddon>
          <Input
            mb="36px"
            type="number"
            onChange={(event) =>
              formik.setFieldValue("nomorHp", event.target.value)
            }
          />
        </InputGroup>
        <FormHelperText>{formik.errors.nomorHp}</FormHelperText>
      </FormControl>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={[2, 1, 1]} mb="36px">
          <FormControl isInvalid={formik.errors.provinsi}>
            <FormLabel>
              <Text mb="16px" variant="caption">
                Provinsi
              </Text>
            </FormLabel>
            <InputGroup>
              <Input
                onChange={(event) =>
                  formik.setFieldValue("provinsi", event.target.value)
                }
              />
              <InputRightAddon bg="white">
                <Icon as={IoIosArrowDown} />
              </InputRightAddon>
            </InputGroup>
            <FormHelperText>{formik.errors.provinsi}</FormHelperText>
          </FormControl>
        </GridItem>
        <GridItem colSpan={[2, 1, 1]}>
          <FormControl isInvalid={formik.errors.kotaKabupaten}>
            <FormLabel>
              <Text mb="16px" variant="caption">
                Kota/Kabupaten
              </Text>
            </FormLabel>
            <InputGroup>
              <Input
                onChange={(event) =>
                  formik.setFieldValue("kotaKabupaten", event.target.value)
                }
              />
              <InputRightAddon bg="white">
                <Icon as={IoIosArrowDown} />
              </InputRightAddon>
            </InputGroup>
            <FormHelperText>{formik.errors.kotaKabupaten}</FormHelperText>
          </FormControl>
        </GridItem>
      </Grid>
      <FormControl isInvalid={formik.errors.kecamatan}>
        <FormLabel>
          <Text mb="16px" variant="caption">
            Kecamatan
          </Text>
        </FormLabel>
        <InputGroup w="245.59px">
          <Input
            mb="36px"
            onChange={(event) =>
              formik.setFieldValue("kecamatan", event.target.value)
            }
          />
          <InputRightAddon bg="white">
            <Icon as={IoIosArrowDown} />
          </InputRightAddon>
        </InputGroup>
        <FormHelperText>{formik.errors.kecamatan}</FormHelperText>
      </FormControl>
      <FormControl isInvalid={formik.errors.alamat}>
        <FormLabel>
          <Text mb="16px" variant="caption">
            Alamat
          </Text>
        </FormLabel>
        <Input
          mb="36px"
          onChange={(event) =>
            formik.setFieldValue("alamat", event.target.value)
          }
        />
        <FormHelperText>{formik.errors.alamat}</FormHelperText>
      </FormControl>
      <FormControl isInvalid={formik.errors.kodePos}>
        <FormLabel>
          <Text mb="16px" variant="caption">
            Kode Pos
          </Text>
        </FormLabel>
        <InputGroup w="245.59px">
          <Input
            mb="36px"
            onChange={(event) =>
              formik.setFieldValue("kodePos", event.target.value)
            }
          />
          <InputRightAddon bg="white">
            <Icon as={IoIosArrowDown} />
          </InputRightAddon>
        </InputGroup>
        <FormHelperText>{formik.errors.kodePos}</FormHelperText>
      </FormControl>
      <Stack>
        <Checkbox
          onChange={mainAddresHandler}
          mb="50px"
        >
          <Text variant="caption">Simpan sebagai alamat utama</Text>
        </Checkbox>
        <Stack direction="row" justifyContent="space-between">
          <Button variant="main-outline" w="300px">
            <Text>Batalkan</Text>
          </Button>
          <Button
            isDisabled={
              !(
                formik.values.alamat &&
                formik.values.kecamatan &&
                formik.values.kodePos &&
                formik.values.kotaKabupaten &&
                formik.values.labelAlamat &&
                formik.values.namaBelakang &&
                formik.values.namaDepan &&
                formik.values.nomorHp &&
                formik.values.provinsi
              )
            }
            _hover={{
              bgColor: "#006D7F",
              color: "#FFFFF0",
            }}
            variant="main"
            w="300px"
            onClick={formik.handleSubmit}
          >
            Simpan Alamat
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default AddressFormComponent;
