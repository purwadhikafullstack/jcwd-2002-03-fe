import { Box, Button, HStack, Image, Img, Stack, Text } from "@chakra-ui/react";

const ProductCard = () => {
  return (
    <Box
      maxW="213px"
      h="331px"
      borderWidth="1px"
      borderRadius="xl"
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      overflow="hidden"
    >
      <Stack direction="row" justifyContent="end" px="40px" pt="35px">
        <Image src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//109/MTA-7979383/panadol_panadol_flu_-_batuk_-1_box-10_catch_cover-1_blister-10_tablet-_hijau_full01_rk8ov96d.jpg" />
        <Box position="absolute">
          <Img src="iconhati.svg" />
        </Box>
        <Box position="absolute">
          <Img src="iconhati.svg" />
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
