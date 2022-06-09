import {
  Box,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import UpLeftCategory from "component/UpLeftCategory";
import ProductCard from "component/ProductCard";

const ProductList = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(1, 1fr)"
      gap={10}
      mb="40px"
    >
      <GridItem rowSpan={1} colSpan={1}>
      <Breadcrumb marginLeft="10px" mb="38px" mt="36px">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <UpLeftCategory />
      </GridItem>
      <GridItem mt="100px" colSpan={4}>
        <Box>
          <Text fontSize="24px" fontWeight="700" fontFamily="sans-serif">
            Obat
          </Text>
          <Divider />
          <Text mt="31px" mb="45px">
            45 Produk di Vitamin &Suplemen
          </Text>
        </Box>
        <SimpleGrid columns={4} spacing={2} mr="85px">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default ProductList;
