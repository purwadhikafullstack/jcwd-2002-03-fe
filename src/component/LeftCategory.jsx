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
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

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
  return (
    <Box
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      marginLeft="20px"
      marginBottom="10px"
      w="280px"
      maxH="1370px"
      borderRadius="16px"
    >
      <Box pl="33px" mb="-6.5px" pt="24px">
        <Button w="211px">
          <Text>Hapus Semua Filter</Text>
        </Button>
      </Box>
      <Divider mb="20px" mt="20px" />
      <Stack pl="28px" spacing="-0.5" pr="28px">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="16px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
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
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Batuk & Flu
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Demam
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Imun Booster
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Kesehatan Seksual
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Mata & Mulut
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Obat Diare
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Pelancar BAB
                </Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
                  Sakit Gigi
                </Text>
              </Checkbox>
            </Stack>
          </CheckboxGroup>
          <Text
            mt="12px"
            fontSize="14px"
            fontWeight="400"
            fontFamily="sans-serif"
          >
            Lihat Lebih Lengkap
          </Text>
        </Collapse>
      </Stack>
      <Divider mb="20px" mt="20px" />

      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="16px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
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
          <Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Text>Rp.</Text>}
              />
              <Input type="tel" placeholder="Harga Minimum" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Text>Rp.</Text>}
              />
              <Input type="tel" placeholder="Harga Maksimal" />
            </InputGroup>
          </Stack>
        </Collapse>
      </Stack>
      <Divider mb="20px" mt="20px" />
      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="16px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
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
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Drop
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Gel
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Strip
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Emulsi
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Balsem
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Cairan
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Koyo
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Serbuk
                  </Text>
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            <Text
              mb="20px"
              fontSize="14px"
              fontWeight="400"
              fontFamily="sans-serif"
            >
              Lihat Lebih Lengkap
            </Text>
          </Stack>
        </Collapse>
      </Stack>
      <Divider mb="20px" mt="20px" />
      <Stack pl="28px" pr="28px" spacing="-0.5">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="18px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
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
              <InputRightElement
                pointerEvents="none"
                children={<Icon as={IoSearchOutline} color="gray.300" />}
              />
              <Input type="tel" placeholder="Cari Brand" />
            </InputGroup>
            <CheckboxGroup borderRadius="16px">
              <Stack spacing="10px" direction={["column", "none"]}>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Drop
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Gel
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Strip
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Emulsi
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Balsem
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Cairan
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Koyo
                  </Text>
                </Checkbox>
                <Checkbox>
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    Serbuk
                  </Text>
                </Checkbox>
              </Stack>
            </CheckboxGroup>
            <Text
              pb="30px"
              fontSize="14px"
              fontWeight="400"
              fontFamily="sans-serif"
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
