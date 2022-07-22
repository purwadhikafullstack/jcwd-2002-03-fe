import {
  Box,
  Button,
  Divider,
  Icon,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
  Collapse,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import api from "../lib/api";
import { useRouter } from "next/router";

const LeftCategory = ({ setPage, setFilterProducts, filterProducts }) => {
  // terpopuler
  // termurah
  // termahal
  const { isOpen: jenisIsOpen, onToggle: jenisOnToggle } = useDisclosure();
  const { isOpen: brandIsOpen, onToggle: brandOnToggle } = useDisclosure();
  const { isOpen: hargaIsOpen, onToggle: hargaOnToggle } = useDisclosure();
  const { isOpen: keluhanIsOpen, onToggle: keluhanOnToggle } = useDisclosure();
  const [brandArrow, setBrandArrow] = useState(false);
  const [keluhanArrow, setKeluhanArrow] = useState(false);
  const [jenisArrow, setJenisArrow] = useState(false);
  const [hargaArrow, setHargaArrow] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      hargaMinimum: "",
      hargaMaksimum: "",
    },

    validationSchema: Yup.object().shape({
      labelAlamat: Yup.string().required("This field is required"),
      namaDepan: Yup.string().required("This field is required"),
    }),
    validateOnChange: false,
  });
  return (
    <Box
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      marginBottom="10px"
      w="280px"
      maxH="1370px"
      borderRadius="16px"
      display={["none", "none", "none", "grid"]}
    >
      <Box pl="33px" mb="-6.5px" pt="24px">
        <Button variant="main-outline" w="211px">
          <Text>Hapus Semua Filter</Text>
        </Button>
      </Box>
      <Divider mb="20px" mt="20px" />

      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text mb="16px" fontWeight="600" variant="caption-bold">
            HARGA
          </Text>
          {hargaArrow ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => [setHargaArrow(false), hargaOnToggle()]}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => [setHargaArrow(true), hargaOnToggle()]}
            />
          )}
        </Stack>
        <Collapse in={hargaIsOpen} animateOpacity>
          <Stack spacing="4">
            <FormControl isInvalid={formik.errors.hargaMinimum}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Text variant="caption">Rp.</Text>
                </InputLeftElement>
                <Input
                  _focus={{ outline: 0 }}
                  type="number"
                  placeholder="Harga Minimum"
                />
              </InputGroup>
              <FormHelperText>{formik.errors.hargaMinimum}</FormHelperText>
            </FormControl>
            <FormControl isInvalid={formik.errors.hargaMinimum}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Text variant="caption">Rp.</Text>
                </InputLeftElement>
                <Input
                  _focus={{ outline: 0 }}
                  type="number"
                  placeholder="Harga Maksimal"
                  mb={4}
                />
              </InputGroup>
              <FormHelperText>{formik.errors.hargaMinimum}</FormHelperText>
              <Button mb={5} w="100%" variant="main">
                Filter Harga
              </Button>
            </FormControl>
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
};
export default LeftCategory;
