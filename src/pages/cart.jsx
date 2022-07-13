/* eslint-disable import/no-unresolved */
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cart, selectCart } from "redux/reducer/cartSlice";
import { selectAuth } from "redux/reducer/authSlice";
import { useEffect, useState } from "react";
import ProductCart from "../component/cart/ProductCart";
import api from "../lib/api";

const Cart = () => {
  const cartSelector = useSelector(selectCart);
  const authSelector = useSelector(selectAuth);
  const [productData, setProductData] = useState();
  const fetchProduct = async () => {
    try {
      const UserId = 2;
      const res = await api.get(`/cart/${UserId}`);
      setProductData(res.data.result.rows);
      console.log(res.data.result.rows);
    } catch (err) {
      console.log(err);
    }
  };
  const renderProductList = () => {
    return productData?.map((val) => {
      return (
        <ProductCart
          key={val.id}
          id={val?.id}
          med_name={val?.Product?.med_name}
          image_url={val?.Product?.Product_images[0].image_url}
          discount={val?.Product?.discount}
          selling_price={val?.price}
          quantity1={val?.quantity}
          ProductId={val?.ProductId}
          passingFetchProduct={() => fetchProduct()}
        />
      );
    });
  };
  useEffect(() => {
    fetchProduct();
    //   if (!authSelector.id || authSelector.role === "admin") {
    //     window.history.back()
    // }
  }, []);
  //   if (!authSelector.id || authSelector.role === "admin") {
  //     return <Spinner thickness='4px'
  //         speed='0.65s'
  //         emptyColor='gray.200'
  //         color='blue.500'
  //         size='xl'
  //         display="flex"
  //         mt="10px"
  //         mb="auto"
  //         ml="auto"
  //         mr="auto"
  //     />
  // }
  return (
    <Grid templateColumns="repeat(6,1fr)" paddingX={[0, 6, 6]} gap={4}>
      <GridItem colSpan={[0, 6, 6]} padding={2}>
        <Text variant="title" display={["none", "flex"]}>
          Keranjang Saya
        </Text>
      </GridItem>
      <GridItem colSpan={[6, 4, 4]}>
        <Box
          paddingX={4}
          paddingY={[0, 4]}
          boxShadow={[
            "none",
            "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);",
          ]}
          borderRadius="8px"
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={5} paddingX={2} alignItems="Center">
              <Checkbox>Pilih Semua</Checkbox>
            </GridItem>
            <GridItem colSpan={5} padding={2} alignItems="Center">
              <Divider />
            </GridItem>
            {renderProductList()}
          </Grid>
        </Box>
      </GridItem>
      <GridItem colSpan={[6, 2, 2]}>
        <Box
          boxShadow={[
            "none",
            "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);",
          ]}
          borderRadius="8px"
          display={["none", "grid", "grid"]}
        >
          <Box padding={5}>
            <Stack spacing={4}>
              <Box>
                <Text variant="subtitle">Total</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="subtitle-bold" color="#737A8D" fontWeight="400">
                  Sub total
                </Text>
                <Text variant="subtitle-bold" color="#737A8D">
                  Rp.13.000
                </Text>
              </Box>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="subtitle-bold">Total</Text>
                <Text variant="subtitle-bold">Rp.13.000</Text>
              </Box>
              <Button variant="main" mt={3}>
                Bayar
              </Button>
            </Stack>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Cart;
