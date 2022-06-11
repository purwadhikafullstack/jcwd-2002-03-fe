import {
  Box,
  Collapse,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const UpLeftCategory = () => {
  const { isOpen: kategoriIsOpen, onToggle: kategoriOnToggle } =
    useDisclosure();
  const [kategoriArrow, setKategoriArrow] = useState(false);
  return (
    <Box
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      marginLeft="20px"
      marginBottom="40px"
      maxW="280px"
      maxH="309px"
      borderRadius="16px"
    >
      <Stack pl="28px" py="29px" pr="28px">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="16px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            KATEGORI
          </Text>
          {kategoriArrow ? (
            <Icon
              as={IoIosArrowUp}
              onClick={() => [setKategoriArrow(false), kategoriOnToggle()]}
            />
          ) : (
            <Icon
              as={IoIosArrowDown}
              onClick={() => [setKategoriArrow(true), kategoriOnToggle()]}
            />
          )}
        </Stack>
        <Collapse in={kategoriIsOpen} animateOpacity>
          <Text fontSize="14px" fontWeight="700" fontFamily="sans-serif">
            Obat-Obatan
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Nutrisi
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Herbal
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Vitamin & Suplemen
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Alat Kesehatan
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Perawatan Tubuh
          </Text>
          <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
            Ibu & Anak
          </Text>
        </Collapse>
      </Stack>
    </Box>
  );
};
export default UpLeftCategory;
