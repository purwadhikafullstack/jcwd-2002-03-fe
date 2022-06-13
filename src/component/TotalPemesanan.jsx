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
import { BiTrendingDown } from "react-icons/bi";

const TotalPemesanan = () => {
  return (
    <Flex pos="absolute">
      <Stack
        justify="space-between"
        direction="row"
        borderRadius="lg"
        ml="692px"
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
            Total Pemesanan Hari Ini
          </Text>
          <Text
            fontWeight="bold"
            color="#213360"
            pt="12px"
            pl="16px"
            fontSize="24px"
          >
            110
          </Text>
          <Stack pt="12px" pl="16px" direction="row">
            <Icon color="#FF6B6B" as={BiTrendingDown} />
            <Text fontWeight="bold" color="#FF6B6B" fontSize="10px">
              -60
            </Text>
          </Stack>
        </Box>
        <HStack pr="16px">
          <CircularProgress
            thickness="8px"
            size="70px"
            value={62}
            color="#FF6B6B"
          >
            <CircularProgressLabel fontWeight="bold" fontSize="14px">
              -62%
            </CircularProgressLabel>
          </CircularProgress>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default TotalPemesanan;
