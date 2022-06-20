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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ProductCard from "../component/ProductCard";
import LeftCategory from "../component/LeftCategory";
import UrutanProList from "../component/UrutanProList";
import UpLeftCategory from "../component/UpLeftCategory";

const ProductList = () => {
  // overflow={scroll}
  // tabs
  return (
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)",
      ]}
      templateRows="repeat(1, 1fr)"
      gap={[0, 0, 10]}
      mb="114"
      mx="auto"
      w="90%"
      maxW={["100%", "90%", "90%"]}
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Breadcrumb
          display={["none", "none", "none", "grid"]}
          marginLeft="30px"
          mb="38px"
          mt="36px"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/home" fontWeight="600">
              <Text variant="caption" fontWeight="600">
                Home
              </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Text
              variant="caption"
              fontWeight="600"
              _hover={{ cursor: "pointer" }}
            >
              Kategori
            </Text>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Text variant="caption" _hover={{ cursor: "pointer" }}>
              Obat
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
        <UpLeftCategory />
        <LeftCategory />
      </GridItem>
      <GridItem mt={[0, 10, 10]} colSpan={4}>
        <Box mt="49px" display={["none", "none", "none", "grid"]}>
          <Text variant="title">Obat</Text>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <Text my={10} variant="caption">
              45 Produk di Vitamin & Suplemen
            </Text>
            <Stack py={6} direction="row" w="31.9%">
              <Text mt="18px" variant="caption">
                Urutkan:
              </Text>
              <Box>
                <UrutanProList />
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box display={["grid", "grid", "none"]} maxW="100%">
          <Tabs overflowX="scroll" colorScheme="#000000">
            <TabList>
              <Tab _focus={{ outline: 0 }}>Obat-Obatan</Tab>
              <Tab _focus={{ outline: 0 }}>Nutrisi</Tab>
              <Tab _focus={{ outline: 0 }}>Herbal</Tab>
              <Tab _focus={{ outline: 0 }}>Vitamin &amp; Suplemen</Tab>
              <Tab _focus={{ outline: 0 }}>Alat Kesehatan</Tab>
              <Tab _focus={{ outline: 0 }}>Perawatan Tubuh</Tab>
              <Tab _focus={{ outline: 0 }}>Ibu &amp; Anak</Tab>
            </TabList>

            <TabPanels position="fixed">
              <TabPanel>
                <SimpleGrid overflowY="scroll" columns={2} spacing={1}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={1} spacing={3}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <SimpleGrid
          display={["none", "none", "grid"]}
          columns={[2, 4, 4]}
          spacing={3}
        >
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
