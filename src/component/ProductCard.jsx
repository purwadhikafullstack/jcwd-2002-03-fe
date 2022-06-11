import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFillCircleFill, BsSuitHeartFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <Box
      W="213px"
      h="331px"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow=" 1px 2px 3px 4px rgba(245,251,251)"
      mr="5px"
      mb="5px"
      _hover={{
        boxShadow: " 1px 2px 3px 4px rgba(237,248,248)",
      }}
    >
      <Stack direction="row" justifyContent="end">
        <Stack px="40px" pt="35px">
          <Image
            w="133px"
            h="104px"
            objectFit="cover"
            src="https://lifepack.id/wp-content/uploads/2020/12/94-1.jpg"
          />
        </Stack>
        <Box pt="14px" pr="22px" position="absolute">
          <Icon as={BsFillCircleFill} color="gray.100" w="44px" h="44px" />
        </Box>
        <Box pt="25px" pr="30.5px" position="absolute">
          <Icon as={BsSuitHeartFill} color="gray.400" w="26.32px" h="23.69" />
        </Box>
      </Stack>
      <Stack pl="24px" pr="10px" pt="3">
        <Text fontSize="14px" fontWeight="700" fontFamily="sans-serif">
          PANADOL FLU DAN BATUK
        </Text>
        <Stack direction="row">
          <Box
            border="1px"
            borderColor="#FF6B6B"
            maxW="36px"
            maxH="24px"
            borderRadius="4px"
          >
            <Text
              py="1px"
              px="1px"
              textAlign="center"
              fontSize="12px"
              color="#FF6B6B"
              fontWeight="700"
            >
              17%
            </Text>
          </Box>
          <Text
            textDecorationLine="line-through"
            textDecorationColor="#737A8D"
            fontSize="14px"
            pl="12px"
            fontWeight="100"
          >
            Rp. 17.000
          </Text>
        </Stack>
        <HStack paddingBottom="10px">
          <Text
            mr="10"
            fontSize="14px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            Rp. 13.000
          </Text>
          <Text fontSize="14px" fontWeight="700" fontFamily="sans-serif">
            / Strip
          </Text>
        </HStack>

        <Button w="92%">Keranjang</Button>
      </Stack>
    </Box>
  );
};
export default ProductCard;
