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
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LeftCategory = () => {
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
      <Stack pl="28px" spacing="-0.5" pr="28px">
        <Stack direction="row" justifyContent="space-between">
          <Text mb="16px" variant="caption-bold" fontWeight="600">
            KELUHAN
          </Text>
          {keluhanArrow ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => [setKeluhanArrow(false), keluhanOnToggle()]}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => [setKeluhanArrow(true), keluhanOnToggle()]}
            />
          )}
        </Stack>
        <Collapse in={keluhanIsOpen} animateOpacity>
          <CheckboxGroup borderRadius="4px">
            <Stack spacing="10px" direction={["column", "none"]}>
              <Checkbox>
                <Text variant="caption">Batuk &amp; Flu</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Demam</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Imun Booster</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Kesehatan Seksual</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Mata &amp; Mulut</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Obat Diare</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Pelancar BAB</Text>
              </Checkbox>
              <Checkbox>
                <Text variant="caption">Sakit Gigi</Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
          <Text
            mt="12px"
            variant="caption"
            _hover={{ cursor: "pointer", color: "#586193" }}
          >
            Lihat Lebih Lengkap
          </Text>
        </Collapse>
      </Stack>
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
                />
              </InputGroup>
              <FormHelperText>{formik.errors.hargaMinimum}</FormHelperText>
            </FormControl>
          </Stack>
        </Collapse>
      </Stack>
      <Divider mb="20px" mt="20px" />
      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text mb="16px" variant="caption-bold" fontWeight="600">
            JENIS OBAT
          </Text>
          {jenisArrow ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => [setJenisArrow(false), jenisOnToggle()]}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => [setJenisArrow(true), jenisOnToggle()]}
            />
          )}
        </Stack>
        <Collapse in={jenisIsOpen} animateOpacity>
          <Stack>
            <CheckboxGroup borderRadius="16px">
              <Stack spacing="10px" direction={["column", "none"]}>
                <Checkbox>
                  <Text variant="caption">Drop</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Gel</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Strip</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Emulsi</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Balsem</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Cairan</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Koyo</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Serbuk</Text>
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            <Text
              mb="20px"
              variant="caption"
              _hover={{ cursor: "pointer", color: "#586193" }}
            >
              Lihat Lebih Lengkap
            </Text>
          </Stack>
        </Collapse>
      </Stack>
      <Divider mb="20px" mt="20px" />
      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text mb="18px" variant="caption-bold" fontWeight="600">
            BRAND OBAT
          </Text>
          {brandArrow ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => [setBrandArrow(false), brandOnToggle()]}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => [setBrandArrow(true), brandOnToggle()]}
            />
          )}
        </Stack>
        <Collapse in={brandIsOpen} animateOpacity>
          <Stack>
            <InputGroup mb="18px">
              <InputRightElement pointerEvents="none">
                <Icon as={IoSearchOutline} color="gray.300" />
              </InputRightElement>
              <Input type="text" placeholder="Cari Brand" />
            </InputGroup>
            <CheckboxGroup borderRadius="16px">
              <Stack spacing="10px" direction={["column", "none"]}>
                <Checkbox>
                  <Text variant="caption">Drop</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Gel</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Strip</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Emulsi</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Balsem</Text>
                </Checkbox>
                <Checkbox>
                  <Text fvariant="caption">Cairan</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Koyo</Text>
                </Checkbox>
                <Checkbox>
                  <Text variant="caption">Serbuk</Text>
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            <Text
              pb="30px"
              variant="caption"
              _hover={{ cursor: "pointer", color: "#586193" }}
            >
              Lihat Lebih Lengkap
            </Text>
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
};
export default LeftCategory;
