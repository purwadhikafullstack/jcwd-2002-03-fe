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
import { useRouter } from "next/router";
import { useEffect } from "react";

const UpLeftCategory = ({ setPage, filterByCategory, setFilterByCategory }) => {
  const { isOpen: kategoriIsOpen, onToggle: kategoriOnToggle } =
    useDisclosure();
  const [kategoriArrow, setKategoriArrow] = useState(false);
  const router = useRouter();
  return (
    <Box
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      marginBottom="40px"
      maxW="280px"
      maxH="309px"
      borderRadius="16px"
      display={["none", "none", "none", "grid"]}
    >
      <Stack pl="28px" py="29px" pr="28px">
        <Stack direction="row" justifyContent="space-between">
          <Text mb="16px" variant="caption-bold" fontWeight="600">
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
          <Text
            variant="mini-title"
            onClick={() => [
              setFilterByCategory(1),
              setPage(1),
              // router.push({
              //   query: { FilterByCategory: { filterByCategory } },
              // }),
            ]}
          >
            Obat-Obatan
          </Text>
          <Text variant="caption">Nutrisi</Text>
          <Text variant="caption">Herbal</Text>
          <Text variant="caption">Vitamin &amp; Suplemen</Text>
          <Text variant="caption">Alat Kesehatan</Text>
          <Text variant="caption">Perawatan Tubuh</Text>
          <Text variant="caption">Ibu &amp; Anak</Text>
        </Collapse>
      </Stack>
    </Box>
  );
};
export default UpLeftCategory;
