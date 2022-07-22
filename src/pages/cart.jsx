/* eslint-disable import/no-unresolved */
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/reducer/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCart from "../component/cart/ProductCart";
import api from "../lib/api";

const Cart = () => {
  const authSelector = useSelector(selectAuth);
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState([]);
  const [productData, setProductData] = useState([])
  const toast = useToast()

  const fetchProduct = async () => {
    try {
      const res = await api.get("/cart");
      setProductData(res.data.result.rows);
    } catch (err) {
      toast({
        title: "error",
        status: "error",
        duration: 5000,
        description: err?.response?.data?.message || err?.message,
        isClosable: true
      })
    }
  };
  const renderProductList = () => {
    return productData?.map((val) => {
      return (
        <ProductCart
          key={val.id}
          id={val?.id}
          med_name={val?.Product?.med_name}
          image_url={val?.Product?.Product_images[0]?.image_url}
          discount={val?.Product?.discount}
          selling_price={val?.Product?.selling_price}
          quantity={val?.quantity}
          ProductId={val?.ProductId}
          subTotal={val?.sub_total.toLocaleString()}
          passingFetchProduct={() => fetchProduct()}
          setSelectedItem={setSelectedItem}
          props={val}
          selectedItem={selectedItem}
        />
      );
    });
  };
  const grandTotal = () => {
    return selectedItem?.reduce((sum, object) => {
      return sum + object.sub_total;
    }, 0);
  };
  useEffect(() => {
    fetchProduct();

    if (!authSelector.id || authSelector.role !== "user") {
      router.push("/auth/login")
    }
  }, []);

  if (!authSelector.id || authSelector.role !== "user") {
    return <Spinner thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      display="flex"
      mt="10px"
      mb="auto"
      ml="auto"
      mr="auto"
    />
  }

  const buyItems = async () => {
    try {
      const res = await api.post("/transaction/create-transaction", selectedItem)
      toast({
        status: "success",
        title: "success buy product",
        duration: 5000,
        description: res?.data?.message,
        isClosable: true
      })
      router.push({ pathname: "/checkout", query: { id: `${res.data.result}` } })
      setSelectedItem([])
      fetchProduct()

    } catch (err) {
      toast({
        status: "error",
        description: "error transaction"
      })
    }
  }

  return (
    <>
      <Grid mb="40px" templateColumns="repeat(6,1fr)" paddingX={[0, 6, 6]} gap={4}>
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
                    Grand total
                  </Text>
                  <Text variant="subtitle-bold" color="#737A8D">
                    Rp. {grandTotal().toLocaleString()}
                  </Text>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text variant="subtitle-bold">Total</Text>
                  <Text variant="subtitle-bold">Rp. {grandTotal().toLocaleString()}</Text>
                </Box>
                <Button variant="main" mt={3} onClick={() => buyItems()} disabled={selectedItem.length === 0}>
                  Bayar
                </Button>
              </Stack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Grid
        background="#F6FAFB"
        width="100%"
        display={["flex", "none"]}
        paddingY={2}
        paddingX={2}
        bottom={0}
        position="fixed"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box pl="10px">
          <Text variant="subtitle-bold">Total</Text>
          <Text variant="subtitle-bold">Rp. {grandTotal().toLocaleString()}</Text>
        </Box>
        <Button width="60%" variant="main" onClick={() => buyItems()}>
          Bayar
        </Button>
      </Grid>
    </>
  );
};

export default Cart;
