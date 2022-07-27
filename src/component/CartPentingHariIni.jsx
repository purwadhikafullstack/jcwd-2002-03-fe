import { Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";

const CartPentingHariIni = ({value}) => {
  return (
    <>
      <HStack spacing="16px">
        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Pesanan Baru
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
          {value.findIsPaid}
          </Text>
        </Stack>

        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Siap Kirim
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
            {value.findIsPacking}
          </Text>
        </Stack>

        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Sedang Dikirim
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
          {value.findIsSend}
          </Text>
        </Stack>
      </HStack>

      <HStack spacing="16px" mt="16px">
        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Selesai
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
          {value.findIsDone}
          </Text>
        </Stack>

        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Dibatalkan
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
            {value.findCancelOrder}
          </Text>
        </Stack>

        <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
          <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
            Chat Baru
          </Text>
          <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
            0
          </Text>
        </Stack>
      </HStack>
    </>
  );
};

export default CartPentingHariIni;
