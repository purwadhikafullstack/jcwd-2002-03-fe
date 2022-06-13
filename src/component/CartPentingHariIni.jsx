import { Flex, Stack, Text } from "@chakra-ui/react";

const CartPentingHariIni = () => {
  return (
    <>
    <Flex pos="absolute">
      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="80"
        mt="450px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Pesanan Baru
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">7</Text>
      </Stack>

      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="15px"
        mt="450px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Siap Kirim
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">3</Text>
      </Stack>

      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="15px"
        mt="450px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Sedang Dikirim
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">3</Text>
      </Stack>
    </Flex>

    <Flex pos="absolute">
      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="80"
        mt="560px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Selesai
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">7</Text>
      </Stack>

      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="15px"
        mt="560px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Dibatalkan
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">3</Text>
      </Stack>

      <Stack
        w="168px"
        h="93"
        bg="gray.100"
        ml="15px"
        mt="560px"
        borderRadius="lg"
      >
        <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
          Chat Baru
        </Text>
        <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">3</Text>
      </Stack>
    </Flex>
    </>
  );
};

export default CartPentingHariIni;
