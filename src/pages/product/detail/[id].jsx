/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import {
  HiPlus,
  HiMinus,
  HiShoppingCart,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineChat,
} from "react-icons/hi";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { selectAuth } from "redux/reducer/authSlice";
import { selectCart } from "redux/reducer/cartSlice";
import { useEffect } from "react";
import api from "../../../lib/api";

const detail = ({ productDetail }) => {
  const top = useBreakpointValue({ base: "40%", md: "50%" });
  const side = useBreakpointValue({ base: "10px", md: "10px" });
  const toast = useToast();
  const router = useRouter();
  const authSelector = useSelector(selectAuth);
  const [slider, setSlider] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const fetchCartData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:2003/cart?UserId=${2}&ProductId=${productDetail.id}`
      );
      console.log(res.data.result);
      setQuantity(res.data.result.quantity);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const formik = useFormik({
    initialValues: {
      quantity: 1,
    },
    validationSchema: Yup.object().shape({
      quantity: Yup.number().required().min(1).max(quantity),
    }),
  });

  const cards = productDetail.Product_images;

  const tabelShow = useBreakpointValue({
    base: (
      <Tbody>
        <Tr>
          <Td>
            <Text variant="subtitle-bold"> Indikasi/Kegunaan</Text>
            <Text variant="subtitle">{productDetail.indikasi}</Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Kandungan/Komposisi
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              {productDetail.kandungan}
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Kemasan
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              {productDetail.kemasan}
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Golongan
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              Golongan
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Butuh Resep
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              Butuh Resep
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Cara Penyimpanan
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              Cara Penyimpanan
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Principal
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              Principal
            </Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Text fontWeight={700} fontSize={16}>
              {" "}
              Nomer Ijin Edar (NIE)
            </Text>
            <Text fontWeight={400} fontSize={14}>
              {" "}
              Nomer Ijin Edar (NIE)
            </Text>
          </Td>
        </Tr>
      </Tbody>
    ),
    md: (
      <Tbody>
        <Tr>
          <Td>Indikasi/Kegunaan</Td>
          <Td>{productDetail.indikasi}</Td>
        </Tr>
        <Tr>
          <Td>Kandungan/Komposisi</Td>
          <Td>{productDetail.kandungan}</Td>
        </Tr>
        <Tr>
          <Td>Kemasan</Td>
          <Td>Kemasan</Td>
        </Tr>
        <Tr>
          <Td>Golongan</Td>
          <Td>Golongan</Td>
        </Tr>
        <Tr>
          <Td>Butuh Resep</Td>
          <Td>Butuh Resep</Td>
        </Tr>
        <Tr>
          <Td>Cara Penyimpanan</Td>
          <Td>Cara Penyimpanan</Td>
        </Tr>
        <Tr>
          <Td>Principal</Td>
          <Td>Principal</Td>
        </Tr>
        <Tr>
          <Td>Nomer Ijin Edar (NIE)</Td>
          <Td>Nomer Ijin Edar (NIE)</Td>
        </Tr>
      </Tbody>
    ),
  });
  const addToCartBtnHandler = async () => {
    try {
      const res = await api.post("/cart", {
        // UserId: authSelector.id,
        UserId: 2,
        ProductId: productDetail.id,
        price: productDetail.selling_price,
        quantity: quantity + formik.values.quantity,
      });
      console.log(res.data.result);
      setQuantity(res.data.result.quantity);

      toast({
        title: "Item added to cart",
        duration: 2000,
        status: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const qtyBtnHandler = (dir) => {
    if (dir === "inc") {
      if (formik.values.quantity === "") {
        formik.setFieldValue("quantity", 1);
        return;
      }

      if (formik.values.quantity >= quantity) return;

      formik.setFieldValue("quantity", parseInt(formik.values.quantity) + 1);
    } else if (dir === "dec") {
      if (formik.values.quantity < 1) return;

      formik.setFieldValue("quantity", formik.values.quantity - 1);
    }
  };
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)", "repeat(5, 1fr)"]}
      gap={[2, 2, 2]}
      alignContent="center"
      w={["100%", "90", "90%"]}
      marginLeft="auto"
      marginRight="auto"
    // mb={[10, 8, 8]}
    >
      <GridItem
        colSpan={[1, 2, 2]}
        padding={[2, 6, 6]}
        alignItems="center"
        justifyContent="center"
        display="flex-Box"
      >
        <Box
          boxShadow={["none", "base", "base"]}
          width="100%"
          padding={[2, 6, 6]}
          borderRadius="16px"
        >
          <Box
            position="relative"
            height={[250, 300, 300]}
            width={[300, 405, 405]}
            maxW="100%"
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
            marginRight="auto"
            marginLeft="auto"
          >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              left={side}
              top={top}
              transform="translate(0%, -50%)"
              zIndex={2}
              onClick={() => slider?.slickPrev()}
              display={["none", "flex"]}
            >
              <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              colorScheme="messenger"
              borderRadius="full"
              position="absolute"
              right={side}
              top={top}
              transform="translate(0%, -60%)"
              zIndex={2}
              onClick={() => slider?.slickNext()}
              display={["none", "flex"]}
            >
              <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={() => setSlider(slider)}>
              {cards.map((val) => (
                <Box
                  key={val.image_url}
                  height={[180, 250, 250]}
                  width={["full", 405, 405]}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${val.image_url})`}
                />
              ))}
            </Slider>
          </Box>
          <Box mt={2} display={["none", "flex", "flex"]}>
            <Button
              width="145px"
              height="46px"
              variant="main"
              mr={5}
              borderRadius="130px"
              alignItems="center"
            >
              <Icon mr={2} as={HiOutlineChat} />
              Chat Admin
            </Button>
            <Button
              width="145px"
              height="46px"
              variant="main"
              borderRadius="130px"
              alignItems="center"
            >
              <Icon mr={2} as={HiOutlineShare} />
              Bagikan
            </Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem
        hight={["auto", "auto", "auto"]}
        padding={[2, 6, 6]}
        colSpan={[1, 3, 3]}
      >
        <Box
          // boxShadow={["none", "dark-lg", "dark-lg"]}
          padding={[2, 6, 6]}
          borderRadius="16px"
          margin={[2, 4, 4]}
        >
          <Box>
            <Text variant="mini-title">{productDetail.med_name}</Text>
            <Text variant="caption-ligth">Bisolvon 8MG 4 Tablet</Text>
            <Box display="flex" alignItems="center">
              <Text variant="title">Rp.{productDetail.selling_price}</Text>{" "}
              &nbsp;
              <Text variant="caption"> / per strip(4 tablet)</Text>
            </Box>
            <Box mt={3} display="flex" alignItems="center">
              <Text as="s" variant="caption">
                Rp.17.000
              </Text>
              <Badge ml={2}>{productDetail.discount}%</Badge>
            </Box>
          </Box>
          <Box alignItems="center" display="flex" mt={5}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width={["138px", "164px"]}
              height={["36px", "38px"]}
            >
              <IconButton
                onClick={() => qtyBtnHandler("dec")}
                isDisabled={formik.values.quantity <= 1}
              >
                <Icon as={HiMinus} />
              </IconButton>
              <Box variant="main" textAlign="center">
                <Text mx={6}>{formik.values.quantity}</Text>
              </Box>
              <IconButton
                onClick={() => qtyBtnHandler("inc")}
                isDisabled={formik.values.quantity >= 10}
              >
                <Icon as={HiPlus} />
              </IconButton>
            </Box>
            <Text variant="caption-bold" ml={5}>
              {" "}
              sisa stock
            </Text>
          </Box>
          {/* <Box marginTop={5}> */}
          <Box display={["none", "flex", "flex"]} alignItems="center" mt={5}>
            <Button
              onClick={() => addToCartBtnHandler()}
              width="194px"
              height="48px"
              variant="main"
            >
              <Icon mr={2} as={HiShoppingCart} />
              keranjang
            </Button>
            <Button width="153px" height="48px" variant="main" ml={5}>
              Beli
            </Button>
            <IconButton variant="outline" ml={5}>
              <Icon size="49px" as={HiOutlineHeart} />
            </IconButton>
          </Box>
          {/* </Box> */}
        </Box>
        <Box
          // boxShadow={["none", "dark-lg", "dark-lg"]}
          padding={[2, 6, 6]}
          borderRadius="16px"
          margin={[2, 4, 4]}
        >
          <Tabs
            align="center"
            // variant="enclosed"
            isFitted
            isLazy
          >
            <TabList>
              <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>
                Deskripsi
              </Tab>
              <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>
                Cara Pakai
              </Tab>
              <Tab _focus={{ borderBottomColor: "teal", outline: 0 }}>
                Peringatan
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table variant="simple">{tabelShow}</Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>Cara Pakai</TabPanel>
              <TabPanel>Peringatan</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </GridItem>
    </Grid>
  );
};
export const getServerSideProps = async (context) => {
  try {
    const productId = context.query.id;
    const res = await axios.get(`http://localhost:2003/product/${productId}`);

    return {
      props: {
        productDetail: res.data.result,
      },
    };
  } catch (err) {
  }
};

export default detail;
