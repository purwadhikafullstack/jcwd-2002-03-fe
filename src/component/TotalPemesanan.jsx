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

const TotalPemesanan = ({ title, amount, value, percentage, notation }) => {
  return (
    <Flex>
      <Stack
        justify="space-between"
        direction="row"
        borderRadius="lg"
        bg="white"
        w="353px"
        h="122px"
        boxShadow="md"
        mr="15px"
      >
        <Box>
          <Text
            fontWeight="bold"
            fontSize="12px"
            color="#737A8D"
            pt="16px"
            pl="16px"
          >
            {title}
          </Text>
          <Text
            fontWeight="bold"
            color="#213360"
            pt="12px"
            pl="16px"
            fontSize="24px"
          >
            {amount}
          </Text>
          <Stack pt="12px" pl="16px" direction="row">
            <Text
              fontWeight="bold"
              color={notation === "+" ? "#21CDC0" : "#FF6B6B"}
              fontSize="10px"
              pl="2"
            >
              {notation} {value.toLocaleString()}
            </Text>
          </Stack>
        </Box>
        <HStack pr="16px">
          <CircularProgress
            thickness="8px"
            size="70px"
            value={percentage}
            color={notation === "+" ? "#21CDC0" : "#FF6B6B"}
          >
            <CircularProgressLabel fontWeight="bold" fontSize="14px">
              {notation}
              {percentage}%
            </CircularProgressLabel>
          </CircularProgress>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default TotalPemesanan;
