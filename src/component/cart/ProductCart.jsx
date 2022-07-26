/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  Img,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiDeleteBin6Line } from "react-icons/ri";
import api from "../../lib/api";

// need to add max quantity product, so user can't buy morethan stok available

const ProductCart = ({
  id,
  med_name,
  image_url,
  discount,
  selling_price,
  productDescription,
  quantity,
  passingFetchProduct,
  ProductId,
  subTotal,
  setSelectedItem,
  props,
  selectedItem,
}) => {
  const [toggleSelected, setToggleSelected] = useState(false);

  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      quantity,
    },
    validationSchema: Yup.object().shape({
      quantity: Yup.number().required().min(1).max(quantity),
    }),
  });

  const editCartBtnHandler = async (type) => {
    try {
      let totalQuantity;
      if (type === "inc") {
        totalQuantity = formik.values.quantity + 1;
      } else {
        totalQuantity = formik.values.quantity - 1;
      }
      await api.post("/cart", {
        id,
        quantity: totalQuantity,
        price: props.price,
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
      if (toggleSelected)
        setSelectedItem(current =>
          current.map(obj =>
            obj.id === id ? { ...obj, quantity: formik.values.quantity + 1, sub_total: (props.price * (formik.values.quantity + 1)) } : obj))

      // setSelectedItems(selectedItem.filter((val)=>))
    } else if (dir === "dec") {
      formik.setFieldValue("quantity", formik.values.quantity - 1);
      editCartBtnHandler("dec");
      if (toggleSelected) {
        setSelectedItem(current =>
          current.map(obj =>
            obj.id === id ? { ...obj, quantity: formik.values.quantity - 1, sub_total: (props.price * (formik.values.quantity - 1)) } : obj))
      }
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
      <GridItem colSpan={5} >
        <Box width="100%" justifyContent="space-between">
          <Box display="flex" justifyContent="left">
            <Checkbox value={props} mr={2} onChange={() => selectedProduct()} />
            <Img
              width={["71px", "86px", "86px"]}
              height={["71px", "86px", "86px"]}
              mr={3}
              src={image_url}
            />
            <Box width="100%" justifyContent="space-between" >
              <Box justifyContent="space-between" width="100%"  >
                <Box display="flex" justifyContent="space-between" width="100%"  >
                  <Box>
                    <Text variant="caption-bold">
                      {med_name} {productDescription}
                    </Text>
                  </Box>
                  <Box display={["block", "flex"]} alignItems="center" justifyContent="space-between">
                    <Text
                      as="del"
                      color="#B4B9C7"
                      fontSize={["12px"]}
                      fontWeight={[400, 600]}
                      mr={[0, 2]}
                      hidden={!discount}
                    >
                      Rp. {selling_price.toLocaleString()}
                    </Text>
                    <Box textAlign={["right", "center"]}>
                      <Text variant="subtitle-bold">Rp. {props.price.toLocaleString()}</Text>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                  <Text variant="caption">{props.Product.kemasan}</Text>
                  <Text variant="subtitle-bold">sub total   Rp. {subTotal}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={5} padding={[0, 4]} alignItems="center">
        <Grid templateColumns="repeat(5,1fr)">
          <GridItem colSpan={[0, 1]} />
          <GridItem colSpan={[5, 4]}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              <HStack spacing={4}>
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
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </>
  );
};

export default ProductCart;
