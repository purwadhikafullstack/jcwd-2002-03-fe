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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AddressFormComponent = () => {
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
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
  });
  return (
    <Box ml="412px" mr="412px" mb="100px">
      <Text mb="68px" mt="94px" variant="title">
        Alamat Pengiriman
      </Text>
      <Text mb="16px" variant="mini-title">
        Label Alamat
      </Text>
      <Input
        onChange={(event) =>
          formik.setFieldValue("labelAlamat", event.target.value)
        }
      />
      <Text mt="52px" mb="36px" variant="mini-title">
        Info Penerima
      </Text>
      <Stack direction="row" justifyContent="space-between">
        <Stack mb="36px">
          <Text mb="16px" variant="caption">
            Nama Depan
          </Text>
          <Input
            onChange={(event) =>
              formik.setFieldValue("namaDepan", event.target.value)
            }
          />
        </Stack>
        <Stack>
          <Text mb="16px" variant="caption">
            Nama Belakang
          </Text>
          <Input
            onChange={(event) =>
              formik.setFieldValue("namaBelakang", event.target.value)
            }
          />
        </Stack>
      </Stack>
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
        <Input
          mb="36px"
          type="tel"
          onChange={(event) =>
            formik.setFieldValue("nomorHp", event.target.value)
          }
        />
      </InputGroup>
      <Stack direction="row" justifyContent="space-between">
        <Stack mb="36px">
          <Text mb="16px" variant="caption">
            Provinsi
          </Text>
          <InputGroup>
            <Input
              onChange={(event) =>
                formik.setFieldValue("provinsi", event.target.value)
              }
            />
            <InputRightAddon
              bg="white"
              children={<Icon as={IoIosArrowDown} />}
            />
          </InputGroup>
        </Stack>
        <Stack>
          <Text mb="16px" variant="caption">
            Kota/Kabupaten
          </Text>
          <InputGroup>
            <Input
              onChange={(event) =>
                formik.setFieldValue("kotaKabupaten", event.target.value)
              }
            />
            <InputRightAddon
              bg="white"
              children={<Icon as={IoIosArrowDown} />}
            />
          </InputGroup>
        </Stack>
      </Stack>
      <Text mb="16px" variant="caption">
        Kecamatan
      </Text>
      <InputGroup w="215.5px">
        <Input
          mb="36px"
          onChange={(event) =>
            formik.setFieldValue("kecamatan", event.target.value)
          }
        />
        <InputRightAddon bg="white" children={<Icon as={IoIosArrowDown} />} />
      </InputGroup>
      <Text mb="16px" variant="caption">
        Alamat
      </Text>
      <Input
        mb="36px"
        onChange={(event) => formik.setFieldValue("alamat", event.target.value)}
      />
      <Text mb="16px" variant="caption">
        Kode Pos
      </Text>
      <InputGroup w="216px">
        <Input
          mb="36px"
          onChange={(event) =>
            formik.setFieldValue("kodePos", event.target.value)
          }
        />
        <InputRightAddon bg="white" children={<Icon as={IoIosArrowDown} />} />
      </InputGroup>
      <Stack>
        <Checkbox mb="50px">
          <Text variant="caption">Simpan sebagai alamat utama</Text>
        </Checkbox>
        <Stack direction="row" justifyContent="space-between">
          <Button variant="main-outline" w="300px">
            <Text>Batalkan</Text>
          </Button>
          <Button variant="main" w="300px">
            <Text>Simpan Alamat</Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default AddressFormComponent;
