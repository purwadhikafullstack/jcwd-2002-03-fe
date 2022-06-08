import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import UpLeftCategory from "component/UpLeftCategory";
import ProductCard from "component/ProductCard";

const ProductList = () => {
  return (
    <SimpleGrid mx="30px" mt="102px" columns={4} spacing={10}>
      <UpLeftCategory />
      <Box>
        <Text fontSize="24px" fontWeight="700" fontFamily="sans-serif">
          Obat
        </Text>
        <Divider />
        <Text mt="31px" mb="45px">
          45 Produk di Vitamin & Suplemen
        </Text>
        <ProductCard />
      </Box>
    </SimpleGrid>
  );
};

export default ProductList;
