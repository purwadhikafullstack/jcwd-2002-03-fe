import { Flex, HStack, Stack, Text } from "@chakra-ui/react";

const CartKadaluwarsaObat = () => {
  return (
    <Flex>
      <Stack
        w="353px"
        h="197px"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        mt="16px"
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

        <HStack direction="row" justify="space-between">
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
        </HStack>
      </Stack>
    </Flex>
  );
};

export default CartKadaluwarsaObat;
