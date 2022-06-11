import {
  Box,
  Collapse,
  Divider,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const UrutanProList = () => {
  const { isOpen: urutanIsOpen, onToggle: urutanOnToggle } = useDisclosure();
  const [urutanArrow, setUrutanArrow] = useState(false);
  return (
    <Box
      w="200px"
      maxH="250px"
      bg="white"
      borderRadius="8px"
      border="1px solid #E5E7E9"
      ml="10px"
      position="absolute"
      style={{ zIndex: 10 }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        pt="15px"
        pr="20px"
        pb="15px"
        pl="15px"
      >
        <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
          Terpopuler
        </Text>
        {urutanArrow ? (
          <Icon
            as={IoIosArrowUp}
            onClick={() => [setUrutanArrow(false), urutanOnToggle()]}
          />
        ) : (
          <Icon
            as={IoIosArrowDown}
            onClick={() => [setUrutanArrow(true), urutanOnToggle()]}
          />
        )}
      </Stack>
      <Collapse in={urutanIsOpen} animateOpacity>
        <Divider mb="15px" />
        <Stack pl="15px" spacing="16px" mb="14px">
          <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
            Terpopuler
          </Text>
          <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
            Termahal
          </Text>
          <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
            Termurah
          </Text>
          <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
            Ulasan
          </Text>
          <Text fontSize="14px" fontWeight="200" fontFamily="sans-serif">
            Terbaru
          </Text>
        </Stack>
      </Collapse>
    </Box>
  );
};
export default UrutanProList;
