import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import api from "../../lib/api";

const AddStock = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productList, setProductList] = useState();
  const [amount, setAmount] = useState(0);
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      quantity: 0,
      expired_date: "",
      ProductId: 0,
      buying_price: 0,
      type: "Barang masuk"
    },
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/inventory/add-stock", values);
        const data = res?.data?.result;

        if (data) {
          toast({
            position: "top",
            status: "success",
            title: "add stock success",
            description: data.message,
            isClosable: true,
            duration: 3000,
          });
          formik.isSubmitting;
          formik.values.quantity = 0;
          formik.values.expired_date = "";
          formik.values.ProductId = 0;
          formik.values.buying_price = 0;
          formik.values.type = "Barang masuk"
        }
      } catch (err) {
        toast({
          status: "error",
          title: "error input product",
          description: err?.response?.data?.message || err.message,
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
        formik.setSubmitting(false);
      }
    },
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    formik.setFieldValue(name, value);
  };

  const fetchProduct = async () => {
    try {
      const res = await api.get("/product");
      const data = res?.data?.result.result.rows;
      setProductList(data);
    } catch (err) {
      toast({
        status: "error",
        title: "Fetch product fail",
        description: err?.response?.data?.message || err.message,
        duration: 5000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (amount < 2) {
      setAmount(1);
    }
    setAmount((prev) => prev - 1);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AddIcon size="20" />}
        fontSize="12px"
        colorScheme="teal"
        mt="32px"
        variant="main"
        width="xs"
        mr="32px"
      >
        Tambah Stock
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="20px" fontWeight="bold">
            Tambah Stok
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody mt="30px">
            <HStack mb="12px">
              <Text mr="104px">Kuantitas</Text>
              <HStack maxW="320px">
                {/* <Button onClick={() => decreaseAmount()}>-</Button> */}
                <Input
                  placeholder="Masukkan jumlah stok obat"
                  minW="226px"
                  onChange={(event) =>
                    formik.setFieldValue("quantity", event.target.value)
                  }
                  fontSize="12px"
                  name="amount"
                //   value={amount}
                  type="number"
                />
                {/* <Button onClick={() => increaseAmount()}>+</Button> */}
              </HStack>
            </HStack>

            <HStack mb="12px">
              <Text mr="91px">Nama obat</Text>
              <Select
                w="auto"
                minW="226px"
                fontSize="12px"
                bg="white"
                color="black"
                placeholder="Pilih Obat"
                name="ProductId"
                onChange={(event) =>
                  formik.setFieldValue("ProductId", event.target.value)
                }
                overflow="auto"
              >
                {productList &&
                  productList.map((val) => {
                    return (
                      <option value={val.id} key={val.id}>
                        {val.med_name}
                      </option>
                    );
                  })}
              </Select>
            </HStack>

            <HStack mb="12px">
              <Text mr="85px">Nilai Barang</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nilai barang"
                onChange={(event) =>
                  formik.setFieldValue("buying_price", event.target.value)
                }
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="60px">Tanggal Expired</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan Tanggal Expired"
                type="date"
                onChange={(event) =>
                  formik.setFieldValue("expired_date", event.target.value)
                }
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="130px">Status</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Barang masuk"
                defaultValue="Barang masuk"
                isDisabled={true}
                onChange={(event) =>
                  formik.setFieldValue("type", event.target.value)
                }
              />
            </HStack>

            <Divider border="2px" mt="20px" minW="full" />

            <Flex ml="32px" mb="16px" mt="16px" justify="right">
              <Button
                onClick={onClose}
                colorScheme="yellow"
                fontSize="14px"
                w="auto"
                minW="156px"
              >
                Batal
              </Button>
              <Button
                ml="3"
                colorScheme="teal"
                fontSize="14px"
                w="auto"
                minW="156px"
                type="submit"
                onClick={formik.handleSubmit}
                isLoading={formik.isSubmitting}
                disabled={formik.isSubmitting}
              >
                Simpan
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddStock;
