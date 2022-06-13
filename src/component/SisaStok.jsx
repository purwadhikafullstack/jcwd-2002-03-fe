import {
  Stack,
  Box,
  Text,
  Flex,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { BiTrendingUp } from "react-icons/bi";

const SisaStok = () => {
  return (
    <Flex pos="absolute">
      <Stack
        justify="space-between"
        direction="row"
        borderRadius="lg"
        ml="1065px"
        mt="52"
        bg="gray.100"
        w="353px"
        h="122px"
      >
        <Box>
          <Text
            fontWeight="bold"
            fontSize="12px"
            color="#737A8D"
            pt="16px"
            pl="16px"
          >
            Sisa Stok Hari Ini
          </Text>
          <Text
            fontWeight="bold"
            color="#213360"
            pt="12px"
            pl="16px"
            fontSize="24px"
          >
            5.980
          </Text>
          <Stack pt="12px" pl="16px" direction="row">
            <Icon color="#21CDC0" as={BiTrendingUp} />
            <Text fontWeight="bold" color="#21CDC0" fontSize="10px">
              +1.200
            </Text>
          </Stack>
        </Box>
        <HStack pr="16px">
          <CircularProgress
            thickness="8px"
            size="70px"
            value={30}
            color="#21CDC0"
          >
            <CircularProgressLabel fontWeight="bold" fontSize="14px">
              +30%
            </CircularProgressLabel>
          </CircularProgress>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default SisaStok;
