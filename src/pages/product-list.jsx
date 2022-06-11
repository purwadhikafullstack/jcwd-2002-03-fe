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
  Stack,
} from "@chakra-ui/react";
import UpLeftCategory from "component/UpLeftCategory";
import ProductCard from "component/ProductCard";
import LeftCategory from "component/LeftCategory";
import UrutanProList from "component/UrutanProList";

const ProductList = () => {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(1, 1fr)"
      gap={10}
      mb="40px"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Breadcrumb marginLeft="30px" mb="38px" mt="36px">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">
              <Text variant="caption">Home</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Text variant="caption">Kategori</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">
              <Text variant="caption">Obat</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <UpLeftCategory />
        <LeftCategory />
      </GridItem>
      <GridItem mt="100px" colSpan={4}>
        <Box mr="30px">
          <Text variant="title">Obat</Text>
          <Divider pr="85px" />
          <Stack direction="row" justifyContent="space-between">
            <Text pt="31px" pb="45px" variant="caption">
              45 Produk di Vitamin & Suplemen
            </Text>
            <Stack spacing="50px" direction="row" pt="20px" pr="165px">
              <Text mt="18px" mr="52px" variant="caption">
                Urutkan
              </Text>
              <UrutanProList />
            </Stack>
          </Stack>
        </Box>
        <SimpleGrid columns={4} spacing={2} mr="40px">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
