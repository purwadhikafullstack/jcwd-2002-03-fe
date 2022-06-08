import { Box, Img, Stack, Text } from "@chakra-ui/react";

const UpLeftCategory = () => {
  return (
    <Box
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      marginLeft="10px"
      marginBottom="10px"
      W="300px"
      h="309px"
      borderRadius="16px"
    >
      <Stack pl="28px" py="29px" pr="28px">
        <Stack direction="row" justifyContent="space-between">
          <Text
            mb="16px"
            fontSize="16px"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            KATEGORI
          </Text>
          <Img src="iconhati.svg"/>
        </Stack>
        <Text fontSize="14px" fontWeight="700" fontFamily="sans-serif">
          Obat-Obatan
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Nutrisi
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Herbal
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Vitamin & Suplemen
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Alat Kesehatan
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Perawatan Tubuh
        </Text>
        <Text fontSize="14px" fontWeight="400" fontFamily="sans-serif">
          Ibu & Anak
        </Text>
      </Stack>
    </Box>
  );
};
export default UpLeftCategory;
