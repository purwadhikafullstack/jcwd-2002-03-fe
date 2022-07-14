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
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import LeftCategory from "../component/LeftCategory";
import UpLeftCategory from "../component/UpLeftCategory";
import api from "../lib/api";
import ProductCard from "../component/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [filterByCategory, setFilterByCategory] = useState();
  const [filterProducts, setFilterProducts] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [dir, setDir] = useState();
  const router = useRouter();
  const { filter } = router.query;
  // console.log(typeof filter);
  const fetchProducts = async (
    queryParams = {
      params: {
        categoryId: filterByCategory,
        med_name: filterProducts,
        _sortBy: selectedValue,
        _sortDir: dir,
        _limit: 24,
        _page: page,
      },
    }
  ) => {
    try {
      const res = await api.get("/product/", queryParams);
      if (page === 1) {
        setProducts(res.data.result.result.rows);
      } else {
        setProducts((prevProducts) => [
          ...prevProducts,
          ...res.data.result.result.rows,
        ]);
      }
      setMaxPage(Math.ceil(res.data.result.count / 24));
    } catch (err) {
    }
  };
  const renderProducts = () => {
    return products.map((val) => {
      return (
        <ProductCard
          key={val.id.toString()}
          medName={val?.med_name}
          Kategori={val?.Kategori}
          discount={val?.discount}
          sellingPrice={val?.selling_price}
          productImage={val?.Product_images[0]?.image_url}
        />
      );
    });
  };
  const fetchNextPage = () => {
    setPage(page + 1);
  };
  const sortHandler = (event) => {
    const { target } = event;
    if (target.type === "select-one") {
      const selectValue = target.selectedOptions[0].value;

      if (selectValue === "selling_price1") {
        setSelectedValue("selling_price");
        setDir("ASC");
        setPage(1);
      } else if (selectValue === "selling_price") {
        setSelectedValue("selling_price");
        setDir("DESC");
        setPage(1);
      } else if (selectValue === "az") {
        setSelectedValue("med_name");
        setDir("ASC");
        setPage(1);
      } else if (selectValue === "za") {
        setSelectedValue("med_name");
        setDir("DESC");
        setPage(1);
      }
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page, filterByCategory, filterProducts, dir, selectedValue]);
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
      px={[0, 0, 5]}
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
        <UpLeftCategory
          fetchProducts={fetchProducts}
          setPage={setPage}
          setFilterByCategory={setFilterByCategory}
          filterByCategory={filterByCategory}
        />
        <LeftCategory
          fetchProducts={fetchProducts}
          setPage={setPage}
          setFilterProducts={setFilterProducts}
          filterProducts={filterProducts}
        />
      </GridItem>
      <GridItem mt={[0, 10, 10]} colSpan={4}>
        <Box mt="49px" display={["none", "none", "none", "grid"]}>
          <Text variant="title">Obat</Text>
          <Divider />
          <Stack
            my={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text variant="caption">45 Produk di Vitamin &amp; Suplemen</Text>
            <Stack py={6} direction="row" alignItems="center">
              <Text variant="caption">Urutkan:</Text>
              <Select _focus={{ outline: 0 }} onChange={sortHandler}>
                <option>Terpopuler</option>
                <option value="selling_price">Termahal</option>
                <option value="selling_price1">Termurah</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </Select>
            </Stack>
          </Stack>
        </Box>
        <Box display={["grid", "grid", "grid", "none"]}>
          <Tabs colorScheme="#000000" maxW="100vw">
            <TabList overflowX="scroll">
              <Tab _focus={{ outline: 0 }}>Obat-Obatan</Tab>
              <Tab _focus={{ outline: 0 }}>Nutrisi</Tab>
              <Tab _focus={{ outline: 0 }}>Herbal</Tab>
              <Tab _focus={{ outline: 0 }}>Vitamin &amp; Suplemen</Tab>
              <Tab _focus={{ outline: 0 }}>Alat Kesehatan</Tab>
              <Tab _focus={{ outline: 0 }}>Perawatan Tubuh</Tab>
              <Tab _focus={{ outline: 0 }}>Ibu &amp; Anak</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid overflowY="scroll" columns={[2, 3, 3]} spacing={1}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
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
        <InfiniteScroll
          dataLength={products.length}
          next={fetchNextPage}
          // calculate max pagenya berapa
          // count total dibagi page
          hasMore={page !== maxPage}
          loader={
            <Box
              textAlign="center"
              mt="5"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner />
              <h4>Loading...</h4>
            </Box>
          }
        >
          <SimpleGrid
            display={["none", "none", "none", "grid"]}
            columns={[2, 3, 3, 3, 4]}
            mt={5}
            spacing={3}
          >
            {renderProducts()}
          </SimpleGrid>
        </InfiniteScroll>
      </GridItem>
    </Grid>
  );
};

export default ProductList;
