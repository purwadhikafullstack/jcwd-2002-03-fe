import {
  Box,
  Button,
  Divider,
  Icon,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  Collapse,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import api from "../lib/api";
import { useRouter } from "next/router";

const LeftCategory = ({
  setPage,
  setFilterProducts,
  filterProducts,
  fetchProducts,
}) => {
  // terpopuler
  // termurah
  // termahal
  const { isOpen: hargaIsOpen, onToggle: hargaOnToggle } = useDisclosure();
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
      h="85px"
      borderRadius="16px"
      display={["none", "none", "none", "grid"]}
    >
      <Box pl="33px" pt="24px">
        <Button
          onClick={() => {
            router.replace("/product-list", undefined, { shallow: true });
            fetchProducts();
          }}
          variant="main-outline"
          w="211px"
        >
          <Text>Hapus Semua Filter</Text>
        </Button>
      </Box>
    </Box>
  );
};
export default LeftCategory;
