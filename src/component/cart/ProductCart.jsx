/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Img,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { selectAuth } from "redux/reducer/authSlice";
import api from "../../lib/api";

const ProductCart = ({
  id,
  med_name,
  image_url,
  discount,
  selling_price,
  productDescription,
  kemasan,
  quantity1,
  passingFetchProduct,
  ProductId,
  subTotal,
  setSelectedItem,
  props,
  selectedItem,
}) => {
  const [toggleSelected, setToggleSelected] = useState(false);
  const authSelector = useSelector(selectAuth)
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      quantity: quantity1,
    },
    validationSchema: Yup.object().shape({
      quantity: Yup.number().required().min(1).max(quantity1),
    }),
  });
  const finalPrice = () => {
    const result = selling_price - (selling_price * discount);
    return result.toLocaleString();
  };
  const editCartBtnHandler = async (type) => {
    try {
      let totalQuantity;
      if (type === "inc") {
        totalQuantity = formik.values.quantity + 1;
      } else {
        totalQuantity = formik.values.quantity - 1;
      }
      await api.post("/cart", {
        UserId: authSelector.id,
        id,
        quantity: totalQuantity,
        price: selling_price,
        ProductId,
      });
      passingFetchProduct();
    } catch (err) {
      toast({ status: "error", title: "error network", description: err?.message || "error network" })
    }
  };
  const deleteCartHandler = async () => {
    try {
      await api.delete(`/cart/${id}`);
      passingFetchProduct();
    } catch (err) {
      toast({ status: "error", title: "error network", description: err?.message || "error network" })
    }
  };
  const qtyBtnHandler = (dir) => {
    if (dir === "inc") {
      formik.setFieldValue("quantity", formik.values.quantity + 1);
      editCartBtnHandler("inc");
    } else if (dir === "dec") {
      formik.setFieldValue("quantity", formik.values.quantity - 1);
      editCartBtnHandler("dec");
    }
  };
  const selectedProduct = () => {
    if (!toggleSelected) {
      setSelectedItem((prev) => [...prev, props]);
      setToggleSelected(true);
    } else {
      setSelectedItem(selectedItem.filter((event) => event.id !== props.id));
      setToggleSelected(false);
    }
  };
  return (
    <>
      <GridItem colSpan={5} padding={2}>
        <Stack direction="row" width="100%" justifyContent="space-between">
          <Box display="flex" justifyContent="left">
            <Checkbox value={props} mr={2} onChange={() => selectedProduct()} />
            <Img
              width={["71px", "86px", "86px"]}
              height={["71px", "86px", "86px"]}
              mr={3}
              src={image_url}
            />
            <Box>
              <Stack direction="row" alignItems="center">
                <Text variant="caption-bold">
                  {med_name} {productDescription}
                </Text>
                <Box
                  w="23px"
                  h="19px"
                  bgColor="#fff5d3"
                  border="1px"
                  borderRadius="2px"
                  borderColor="#FFDE6B"
                  pl={0.5}
                >
                  <Text
                    textAlign="center"
                    fontSize="12px"
                    fontWeight="400"
                    color="#cbaf4e"
                  >
                    X {quantity1}
                  </Text>
                </Box>
              </Stack>
              <Text variant="caption">{kemasan}</Text>
              <Stack
                mt={4}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              // spacing={5}
              >
                <Text variant="caption-bold">Sub Total</Text>
              </Stack>
            </Box>
          </Box>
          <Box
            widht="30%"
            display={["block", "flex", "flex"]}
            justifyContent="space-between"
          >
            <Box hidden={!discount} textAlign={["right", "center"]}>
              <Text
                as="del"
                color="#B4B9C7"
                fontSize={["12px"]}
                fontWeight={[400, 600]}
                mr={[0, 2]}
              >
                Rp. {selling_price.toLocaleString()}
              </Text>
            </Box>
            <Box textAlign={["right", "center"]}>
              <Text variant="subtitle-bold">Rp. {finalPrice()}</Text>
            </Box>
          </Box>
        </Stack>
        <Stack alignItems="end" mt={-7} mb={7}>
          <Text variant="subtitle-bold">Rp. {subTotal}</Text>
        </Stack>
      </GridItem>
      <GridItem colSpan={5} padding={[0, 4]} alignItems="center">
        <Grid templateColumns="repeat(5,1fr)">
          <GridItem colSpan={[0, 1]} />
          <GridItem colSpan={[5, 4]}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box textAlign={["left", "center"]}>
                <Text color="teal" mr={2} variant="caption">
                  Pindahkan ke Wishlist
                </Text>
              </Box>
              <Box
                borderLeft="1px solid teal"
                onClick={() => deleteCartHandler()}
              >
                <Icon ml={3} color="teal" as={RiDeleteBin6Line} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                height="30px"
                background="#F6FAFB"
                borderRadius="8px"
              >
                <IconButton
                  onClick={() => qtyBtnHandler("dec")}
                  borderLeftRadius="8px"
                  isDisabled={formik.values.quantity <= 1}
                  background="#F6FAFB"
                  boxSize="30px"
                >
                  <Icon color="teal" as={MinusIcon} />
                </IconButton>
                <Text mx={6}>{formik.values.quantity}</Text>
                <IconButton
                  onClick={() => qtyBtnHandler("inc")}
                  borderRightRadius="8px"
                  background="#F6FAFB"
                  boxSize="30px"
                >
                  <Icon color="teal" as={AddIcon} />
                </IconButton>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
};

export default ProductCart;
