import { Flex, Stack, Text } from "@chakra-ui/react";

const CartKadaluwarsaObat = () => {
  return (
    <Flex pos="absolute">
      <Stack
        w="353px"
        h="202px"
        bg="gray.100"
        ml="900px"
        mt="450px"
        borderRadius="lg"
      >
        <Stack direction="row" justify="space-between">
          <Text pt="40px" pl="16px" fontSize="16px" fontWeight="700">
            Telah Kadaluwarsa
          </Text>
          <Text
            pt="34px"
            pr="16px"
            fontSize="24px"
            fontWeight="700"
            color="#FF6B6B"
          >
            17
          </Text>
        </Stack>

        <Stack direction="row" justify="space-between">
          <Text pt="11px" pl="16px" fontSize="16px" fontWeight="700">
            Kadaluwarsa Bulan Ini
          </Text>
          <Text
            pt="5px"
            pr="16px"
            fontSize="24px"
            fontWeight="700"
            color="#FFDE6B"
          >
            0
          </Text>
        </Stack>

        <Stack direction="row" justify="space-between">
          <Text pt="11px" pl="16px" fontSize="16px" fontWeight="700">
            Kadaluwarsa 3 Bulan Kedepan
          </Text>
          <Text
            pt="5px"
            pr="16px"
            fontSize="24px"
            fontWeight="700"
            color="#21CDC0"
          >
            3
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default CartKadaluwarsaObat;
