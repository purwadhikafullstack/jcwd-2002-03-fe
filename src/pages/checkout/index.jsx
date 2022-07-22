/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
  List,
  ListItem,
  UnorderedList,
  Image,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CloseIcon } from "@chakra-ui/icons";
import { selectAuth } from "../../redux/reducer/authSlice";
import Pengirimanbarang from "../../component/ongkir/Pengirimanbarang";
import api from "../../lib/api";

const checkout = () => {

  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    isOpen: pilihPembayaranIsOpen,
    onOpen: pilihPembayaranOnOpen,
    onClose: pilihPembayaranOnClose,
  } = useDisclosure();

  const authSelector = useSelector(selectAuth);
  const [selectedAddress, setSelectedAddress] = useState();
  const [ongkir, setOngkir] = useState(0)
  const [kurir, setKurir] = useState("")
  const [dataAddress, setDataAddres] = useState([]);
  const [dataItems, setDataItems] = useState()
  const [bca, setBca] = useState(true);
  const [bcaBoolean, setBcaBoolean] = useState(true);
  const [bcaVa, setBcaVa] = useState([]);
  const toast = useToast();
  const router = useRouter();

  const { id } = router.query

  const konfirmasiPembayaran = async () => {
    try {
      await api.post("/transaction/create-transaction", {
        method: "BCA VA",
      });
      router.push("/transaction/menunggu-konfirmasi");
    } catch (err) {
      toast({
        status: "error",
        duration: 3000,
        description: err?.response?.data?.message || err?.message,
        isClosable: true,
        title: "error network"
      })
    }
  };

  const fetchTransaction = async (
    queryParams = { params: { id } }
  ) => {
    try {
      const res = await api.get("transaction/items", queryParams)
      setDataItems(res.data.result)

    } catch (err) {
      toast({
        title: "error network",
        status: "error",
        isClosable: true,
        duration: 5000,
        description: err?.response?.data?.message || err?.message,
      })

    }
  }

  // for render main address for the firsttime with parameter main_addres === true
  const mainAddress = () => {
    return dataAddress?.map((val) => {
      if (val.main_address === true) {
        return setSelectedAddress(val);
      }
      return selectedAddress;
    });
  };

  const fetchAddress = async () => {
    try {
      const res = await api.get("/profile/address-user");
      const data = res?.data?.result;
      setDataAddres(data);
      fetchTransaction()
    } catch (err) {
      toast({
        title: "error",
        description: err?.response?.data?.message || err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  if (!authSelector.id || authSelector.role === "admin") {
    window.history.back()
  }

  const createPayment = async (
    data = {
      ongkos_kirim: ongkir, AddressId: selectedAddress.id, kurir, TransactionId: dataItems.id
    }
  ) => {
    try {

      const res = await api.post("/payment/create", data)
      toast({
        title: "success",
        description: res?.data?.message,
        status: "success",
        duration: 2000,
        isClosable: true,
      });

    } catch (err) {
      toast({
        title: "error",
        description: err?.response?.data?.message || err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }
  const deleteHandler = async (val) => {
    try {
      const res = await api.delete(`/profile/address/${val}/delete`)
      toast({
        title: "success",
        description: res?.data?.message,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
      fetchAddress()
    } catch (err) {
      toast({
        title: "error",
        description: err?.response?.data?.message || err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }


  useEffect(() => {
    if (router.isReady) {
      fetchAddress()
      fetchTransaction()
    }

    mainAddress()

    // if (router.isReady) {
    // fetchTransaction()
    // }

  }, [router.isReady, dataAddress.length]);

  if (!authSelector.id || authSelector.role === "admin") {
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
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={8} paddingX={[2, 6]}>
      <GridItem colSpan={[6, 4, 4]}>
        {/* Adress section */}
        <Box
          padding={[2, 5]}
          width="100%"
          boxShadow={[
            "none",
            "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);",
          ]}
          marginX={[0, 4]}
          borderRadius="8px"
          justifyContent="space-between"
        >
          <Box
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <Text variant="title">Alamat Pengiriman</Text>
            <Text
              display={["grid", "none"]}
              onClick={onOpen}
              fontWeight={700}
              variant="caption"
              color="teal"
            >
              Pilih Alamat Lain
            </Text>
          </Box>
          <Divider />
          <Box
            justifyContent="space-between"
            display="flex"
            alignItems="center"
            my={[2, 4]}
          >
            <Text variant="subtitle">
              {selectedAddress && selectedAddress.nama},{" "}
              {selectedAddress && selectedAddress.nomorHp}
            </Text>

            {/* pilih alamat section */}
            <Text
              display={["none", "grid"]}
              onClick={onOpen}
              variant="caption"
              fontWeight={700}
              color="teal"
              cursor="pointer"
            >
              Pilih Alamat Lain
            </Text>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Text variant="title">Pilih Alamat Pengiriman</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {dataAddress &&
                    dataAddress.map((val) => {
                      return (
                        <Box
                          my={[2, 4]}
                          key={val.id}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <HStack width="60%">
                            <Box>
                              <Text variant="caption" fontWeight={600}>
                                {val.labelAlamat}
                              </Text>
                              <Text variant="caption">
                                {val.alamat}, {val.kecamatan}
                              </Text>
                              <Text variant="caption">
                                {val.kotaKabupaten}, {val.provinsi} {val.kodePos}
                              </Text>
                            </Box>
                            <Box onClick={() => deleteHandler(val.id)}>
                              <CloseIcon boxSize={2} />
                            </Box>
                          </HStack>
                          {val === selectedAddress ? (
                            <Icon as={TbTruckDelivery} boxSize={8} mx={2} />
                          ) : (
                            ""
                          )}
                          <Button
                            variant="main"
                            onClick={() => setSelectedAddress(val)}
                          >
                            Pilih
                          </Button>
                        </Box>
                      );
                    })}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="yellow" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Divider />
          <Box my={[2, 4]}>
            <Text variant="caption" fontWeight={600}>
              {selectedAddress && selectedAddress.labelAlamat}
            </Text>
            <Text variant="caption">
              {selectedAddress && selectedAddress.alamat},{" "}
              {selectedAddress && selectedAddress.kecamatan}
            </Text>
            <Text variant="caption">
              {selectedAddress && selectedAddress.kotaKabupaten},{" "}
              {selectedAddress && selectedAddress.provinsi}{" "}
              {selectedAddress && selectedAddress.kodePos}
            </Text>
          </Box>
          <Divider />
          <Box
            display={["block", "flex"]}
            alignItems="center"
            justifyContent={["center", "space-between"]}
            mt={2}
            width="100%"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                size={["xs", "sm", "sm"]}
                mr={3}
                color="teal"
                boxShadow="2xl"
                borderRadius="50%"
                onClick={() => router.push("/address-form")}
              >
                <Icon as={BsPlusLg} />
              </IconButton>
              <Text variant="subtitle">Tambahkan Alamat Baru</Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={[2, 0]}
            >
              {
                selectedAddress && <Pengirimanbarang destinationCode={selectedAddress.city_id || 457} key={selectedAddress.city_id} setOngkir={setOngkir} setKurir={setKurir} />
              }
            </Box>
          </Box>
        </Box>
        {/* end of address section */}

        {/* ringkasan order section */}
        {dataItems && dataItems.Transaction_items.map((val) => {
          return (

            <Box
              key={val.id}
              padding={[2, 5]}
              width="100%"
              boxShadow={[
                "none",
                "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);",
              ]}
              marginX={[0, 4]}
              borderRadius="8px"
              justifyContent="space-between"
            >
              <Box>
                <Text variant="title">Ringkasan Order</Text>
              </Box>
              <Divider />
              <Grid
                templateColumns="repeat(5, 1fr)"
                gap={2}
                templateRows="repeat(2, 1fr)"
              >
                <GridItem colSpan={1} rowSpan={2}>
                  <Img src={val.Product?.Product_images[0]?.image_url} />
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} padding={2} alignItems="center">
                  <Box
                    justifyContent="space-between"
                    display="flex"
                    alignItems="center"
                  >
                    <Text variant="caption-bold">{val.Product.med_name}</Text>
                    <Badge>
                      <Text as="s">Rp.{val.Product.selling_price.toLocaleString()}</Text>
                    </Badge>
                  </Box>
                  <Text variant="caption-bold">{val.quantity}{val.Product.kemasan}</Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} padding={2}>
                  <Text variant="caption-bold">Rp.{(val.Product.selling_price - (val.Product.selling_price * val.Product.discount)).toLocaleString()}</Text>
                </GridItem>
                <GridItem colSpan={3} rowSpan={1} padding={2}>
                  <Text variant="caption-bold">SubTotal</Text>
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} padding={2}>
                  <Text variant="caption-bold">Rp.{val.sub_total.toLocaleString()}</Text>
                </GridItem>
              </Grid>
            </Box>
          )
        })}
      </GridItem>
      {/* end of ringkasan order section */}

      {/* total payment section */}
      <GridItem rowSpan={1} colSpan={[6, 2, 2]}>
        <Box
          padding={[2, 5]}
          width="100%"
          boxShadow={[
            "none",
            "0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08);",
          ]}
          marginX={[0, 4]}
          borderRadius="8px"
          justifyContent="space-between"
        >
          <Box>
            <Text variant="title" display={["none", "flex", "flex"]}>
              Total
            </Text>
          </Box>
          <Divider />
          <Box
            mt={2}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <Text variant="caption-bold">Sub Total</Text>
            <Text variant="caption-bold">Rp. {dataItems && dataItems.total_price.toLocaleString()}</Text>
          </Box>
          <Box
            my={2}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <Text variant="caption-bold">Pengiriman</Text>
            {ongkir !== 0 && <Text variant="caption-bold">Rp.{ongkir.toLocaleString()}</Text>}
            {!ongkir && <Text variant="caption-bold">Silahkan Pilih Kurir</Text>}
          </Box>
          <Divider />
          <Box
            my={2}
            mb={["20px", 0]}
            justifyContent="space-between"
            display="flex"
            alignItems="center"
          >
            <Text variant="title">Total</Text>
            <Text variant="title">Rp. {dataItems && (dataItems.total_price + ongkir)}</Text>
          </Box>
          <Divider mb={[10, 0]} />
          <Box
            justifyContent="space-between"
            display="blok"
            alignItems="center"
          >
            <Box mt={5}>
              <Text variant="title" display={["none", "flex", "flex"]}>
                Metode Pembayaran
              </Text>
              {!bcaBoolean ? (
                <Text display={["none", "flex"]} variant="caption">
                  Silahkan pilih metode pembayaran anda disini lagi atau klik
                  tombol konfirmasi pembayaran untuk melanjutkan pembayaran
                </Text>
              ) : (
                <Text display={["none", "flex"]} variant="caption">
                  Silahkan pilih metode pembayaran anda disini
                </Text>
              )}
            </Box>
            {!bcaBoolean ? (
              <>
                <Stack direction="row" spacing={5} alignItems="center">
                  <Image src="/bca.png" w="60px" h="50px" objectFit="contain" />
                  <Text>BCA Virtual Account</Text>
                </Stack>
                <Box mt={5}>
                  <Button
                    // onClick={() => [pilihPembayaranOnOpen(), setBcaVa("")]}
                    onClick={pilihPembayaranOnOpen}
                    variant="main"
                    width="full"
                    display={["none", "flex"]}
                  >
                    Pilih Metode Pembayaran
                  </Button>
                </Box>
              </>
            ) : (
              <Box mt={5}>
                <Button
                  onClick={pilihPembayaranOnOpen}
                  variant="main"
                  width="full"
                  display={["none", "flex"]}
                >
                  Pilih Metode Pembayaran
                </Button>
              </Box>
            )}

            <Divider my={5} />
            <Box mt={5}>
              <Button
                onClick={() => konfirmasiPembayaran()}
                isDisabled={bcaBoolean}
                _hover={{
                  bgColor: "#004A57",
                  color: "#FFFFF0",
                }}
                variant="main"
                width="full"
                display={["none", "flex"]}
              >
                Konfirmasi Pembayaran
              </Button>
            </Box>
            {/* end of total payment section */}

            <Grid
              // color="#F6FAFB"
              background="#F6FAFB"
              templateColumns="repeat(6, 1fr)"
              display={["flex", "none", "none"]}
              gap={2}
              justifyContent="space-evenly"
              bottom={0}
              paddingBottom={3}
              paddingTop={3}
              left={0}
              right={0}
              position="fixed"
              mt={10}
            >
              <GridItem colSpan={6}>
                <Button colorScheme="teal" onClick={pilihPembayaranOnOpen}>Pilih Metode Pembayaran</Button>
              </GridItem>
            </Grid>

            <Modal
              isOpen={pilihPembayaranIsOpen}
              onClose={pilihPembayaranOnClose}
              size={["xs", "sm"]}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton _focus={{ outline: 0 }} />
                {/* <ModalCloseButton
                    _focus={{ outline: 0 }}
                    onClick={() => setBca(false)}
                  /> */}
                <Icon
                  as={IoIosArrowBack}
                  mt="15px"
                  ml={5}
                  onClick={() => [setBca(true)]}
                />
                <Box pt={5} pb={5}>
                  <Text px={10} mb={5} textAlign="center" variant="subtitle">
                    Metode Pembayaran
                  </Text>
                  <Box
                    mx={10}
                    px={5}
                    py={3}
                    h="95px"
                    boxShadow="1px 2px 3px 4px rgba(245,251,251)"
                    borderRadius="10px"
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack alignItems="flex-start">
                        <Text variant="subtitle-bold" fontWeight={400}>
                          Total Harga
                        </Text>
                        <Text variant="title">Rp. {dataItems && (dataItems.total_price + ongkir)}</Text>
                      </Stack>
                    </Stack>
                  </Box>
                  <Divider mt={10} hidden={!bca} />
                  <Stack
                    mt={10}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={10}
                    hidden={!bca}
                  >
                    <Stack alignItems="center" direction="row" spacing={8}>
                      <Image
                        src="/bca.png"
                        h="60px"
                        w="50px"
                        objectFit="contain"
                      />
                      <Text variant="caption-bold" fontWeight={400}>
                        BCA Virtual Account
                      </Text>
                    </Stack>
                    <Icon
                      as={IoIosArrowForward}
                      onClick={() => setBca(false)}
                    />
                  </Stack>
                  <Box hidden={!bca} mt={7} px={10}>
                    <Divider />
                  </Box>
                  <Box hidden={bca} h="330px" px={10} py={5}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      mb={10}
                      justifyContent="space-between"
                    >
                      <Text variant="subtitle-bold" fontWeight={700}>
                        BCA Virtual Account
                      </Text>
                      <Image
                        src="/bca.png"
                        w="60px"
                        h="50px"
                        objectFit="contain"
                      />
                    </Stack>
                    <Text variant="subtitle" mb={2}>
                      Cara Pembayaran
                    </Text>
                    <List spacing={4}>
                      <UnorderedList>
                        <ListItem>
                          <Text variant="caption-bold" fontWeight={400}>
                            Tagihan ini akan otomatis menggantikan tagihan BCA
                            Virtual account yang belum terbayar.
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text variant="caption-bold" fontWeight={400}>
                            Tidak disarankan pembayaran melalui bank agar
                            transaksi dapat diproses tanpa kendala
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text variant="caption-bold" fontWeight={400}>
                            Dapatkan kode pembayaran setelah klik pembayaran.
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </List>
                  </Box>
                  <Stack px={10} alignItems="center" mt={7}>
                    <Button
                      w="full"
                      hidden={bca}
                      onClick={() => [
                        pilihPembayaranOnClose(),
                        setBcaVa("BCA VA"),
                        setBcaBoolean(false),
                        createPayment()
                      ]}
                      variant="main"
                    >
                      Pilih Metode
                    </Button>
                  </Stack>
                  <Stack
                    mt={10}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={10}
                    hidden={!bca}
                  >
                    <Stack alignItems="center" direction="row" spacing={8}>
                      <Image
                        src="/mandiri.png"
                        h="60px"
                        w="50px"
                        objectFit="contain"
                      />
                      <Text variant="caption-bold" fontWeight={400}>
                        Mandiri Virtual Account
                      </Text>
                    </Stack>
                    <Icon as={IoIosArrowForward} />
                  </Stack>
                  <Box hidden={!bca} mt={7} px={10}>
                    <Divider />
                  </Box>
                  <Stack
                    mt={10}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={10}
                    hidden={!bca}
                  >
                    <Stack alignItems="center" direction="row" spacing={8}>
                      <Image
                        src="/permata.png"
                        h="60px"
                        w="50px"
                        objectFit="contain"
                      />
                      <Text variant="caption-bold" fontWeight={400}>
                        Permata Virtual Account
                      </Text>
                    </Stack>
                    <Icon as={IoIosArrowForward} />
                  </Stack>
                  <Box hidden={!bca} mt={7} px={10}>
                    <Divider />
                  </Box>
                  <Stack
                    mt={10}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={10}
                    hidden={!bca}
                  >
                    <Stack alignItems="center" direction="row" spacing={8}>
                      <Image
                        src="/gopay.png"
                        h="60px"
                        w="50px"
                        objectFit="contain"
                      />
                      <Text variant="caption-bold" fontWeight={400}>
                        GoPay
                      </Text>
                    </Stack>
                    <Icon as={IoIosArrowForward} />
                  </Stack>
                  <Box hidden={!bca} mt={7} px={10}>
                    <Divider />
                  </Box>
                  <Stack
                    mt={10}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={10}
                    hidden={!bca}
                  >
                    <Stack alignItems="center" direction="row" spacing={8}>
                      <Image
                        src="/ovo.png"
                        h="60px"
                        w="50px"
                        objectFit="contain"
                      />
                      <Text variant="caption-bold" fontWeight={400}>
                        OVO
                      </Text>
                    </Stack>
                    <Icon as={IoIosArrowForward} />
                  </Stack>
                  <Box hidden={!bca} mt={7} px={10}>
                    <Divider />
                  </Box>
                </Box>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default checkout;
