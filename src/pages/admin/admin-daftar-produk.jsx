import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";
import AdminSideBar from "component/AdminSideBar";
import { FiSearch, FiDownload } from "react-icons/fi";
import { useState } from "react";
import React from "react";
import { TbWriting } from "react-icons/tb";
import { useNumberInput } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/reducer/authSlice";
import { useEffect } from "react";
import api from "../../lib/api";
import DaftarProdukTable from "component/DaftarProdukTable";

const AdminDaftarProduk = () => {
  const {
    isOpen: isTambahObatOpen,
    onOpen: onTambahObatOpen,
    onClose: onTambahObatClose,
  } = useDisclosure();
  const {
    isOpen: isTambahStokOpen,
    onOpen: onTambahStokOpen,
    onClose: onTambahStokClose,
  } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const router = useRouter();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [dataProduct, setDataProduct] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [sortInput, setSortInput] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [jumlahProduk, setJumlahProduk] = useState(null);

  const maxPageRow = 10;

  const fecthApi = async () => {
    try {
      const res = await api.get("/product", {
        params: {
          _sortBy: sortBy ? sortBy : undefined,
          _sortDir: sortDir ? sortDir : undefined,
          _limit: maxPageRow,
          _page: pageCount,
          priceMin: priceMin || undefined,
          priceMax: priceMax || undefined,
        },
      });
      setJumlahProduk(res.data.result.result.count);
      setDataProduct(res.data.result.result.rows);
      setMaxPage(Math.ceil(res.data.result.result.count / maxPageRow));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNextPage = () => {
    if (pageCount >= maxPage) {
      return;
    }
    setPageCount(pageCount + 1);
  };

  const fetchPrevPage = () => {
    if (pageCount === 1) {
      return;
    }
    setPageCount(pageCount - 1);
  };

  const fetchFirstPage = () => {
    setPageCount((pageCount = 1));
    return;
  };

  const fetchLastPage = () => {
    setPageCount((pageCount = maxPage));
    return;
  };

  useEffect(() => {
    if (router.isReady) {
      if (router.query._sortDir) {
        setSearchValue(router.query._sortDir);
      }
      if (router.query._sortBy) {
        setSearchValue(router.query._sortBy);
      }
    }
  }, [router.isReady]);

  const sortInputHandler = (event) => {
    const { value } = event.target;
    setSortInput(value);
  };

  const sortButton = () => {
    if (sortInput == "Highest Price") {
      setSortBy("selling_price");
      setSortDir("DESC");
    } else if (sortInput == "Lowest Price") {
      setSortBy("selling_price");
      setSortDir("ASC");
    } else if (sortInput == "name_ASC") {
      setSortBy("med_name");
      setSortDir("ASC");
    } else if (sortInput == "name_DESC") {
      setSortBy("med_name");
      setSortDir("DESC");
    } else if (sortInput == "default") {
      setSortBy("");
      setSortDir("");
    }
    setPageCount(1);
  };

  useEffect(() => {
    fecthApi();
  }, [pageCount]);

  useEffect(() => {
    fecthApi();

    if (sortInput) {
      router.push({
        _sortBy: sortBy ? sortBy : undefined,
        _sortDir: sortDir ? sortDir : undefined,
      });
    }
  }, [sortDir, sortBy, priceMin, priceMax]);

  const data = React.useMemo(() => [...dataProduct], [dataProduct]);

  function toCurrency(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString("IDR");
  }

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "id",
      },
      {
        Header: "Nama Obat",
        accessor: "med_name",
      },
      {
        Header: "No. Obat",
        accessor: "nomer_med",
      },
      {
        Header: "No. BPOM",
        accessor: "nomer_bpom",
      },
      {
        Header: "Kategori",
        accessor: "category.category_name",
      },
      // {
      //   Header: "Stok",
      //   accessor: "stok",
      // },
      {
        Header: "Satuan",
        accessor: "kemasan",
      },
      {
        Header: "Nilai Jual",
        accessor: "selling_price",
        Cell: (props) => <div>Rp. {toCurrency(props.value)} </div>,
      },
      {
        Header: "Lihat Detail",
        accessor: "LihatDetail",
        Cell: () => (
          <Button colorScheme="teal" fontSize="12px" size="sm">
            Lihat Detail
          </Button>
        ),
      },
    ],
    []
  );

  const authSelector = useSelector(selectAuth);
  React.useEffect(() => {
    if (!authSelector.role) {
      router.push("/admin/login");
    }
  }, [authSelector]);

  if (!authSelector.role) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        display="flex"
        mt="10px"
        mb="auto"
        ml="auto"
        mr="auto"
      />
    );
  }
  return (
    <>
      <AdminSideBar />
      <Box
        bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
        color="white"
        ml="64"
        pb="32px"
      >
        <Text
          color="#213360"
          fontWeight="bold"
          fontSize="20px"
          pl="48px"
          pt="32px"
        >
          Daftar Obat
        </Text>

        <Center flexDirection="column" mr="48px" ml="48px" mt="38px" bg="white">
          <Flex minW="full" justify="space-between">
            <HStack ml="32px" spacing="16px">
              <InputGroup
                color="black"
                borderRadius="full"
                bg="white"
                mt="32px"
                mb="32px"
                w="full"
              >
                <Input placeholder="Cari nama obat" />
                <InputRightElement>
                  <Button bg="transparent">
                    <Icon color="black" as={FiSearch} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Select
                  fontSize="14px"
                  w="156px"
                  bg="white"
                  color="black"
                  placeholder="Semua Obat"
                >
                  <option value="option1">Obat Bebas</option>
                  <option value="option2">Obat Racik</option>
                  <option value="option3">Obat Resep</option>
                </Select>
              </InputGroup>
            </HStack>
            <HStack>
              <Button
                onClick={onTambahStokOpen}
                fontSize="12px"
                p="5"
                colorScheme="teal"
                leftIcon={<TbWriting size="20" />}
              >
                Tambah Stok
              </Button>
              <Button
                onClick={onTambahObatOpen}
                fontSize="12px"
                p="5"
                leftIcon={<FiDownload size="20" />}
                mr="32px"
                colorScheme="teal"
                mt="32px"
              >
                Tambah Obat
              </Button>
            </HStack>
          </Flex>
          <Divider my="38px" w="full" maxW="1056px" />

          <HStack mb="4">
            <Text color="black">Urutkan:</Text>
            <Select
              fontSize="12px"
              onClick={sortButton}
              color="black"
              onChange={sortInputHandler}
            >
              <option value="default">Default</option>
              <option value="name_ASC">A - Z</option>
              <option value="name_DESC">Z - A</option>
              <option value="Highest Price">Termahal</option>
              <option value="Lowest Price">Termurah</option>
            </Select>
          </HStack>

          <Center flexDirection="column">
            <DaftarProdukTable
              columns={columns}
              data={data}
              next={fetchNextPage}
            />
            <HStack my="4">
              <Button
                borderRadius="lg"
                colorScheme="teal"
                onClick={fetchFirstPage}
              >{`First Page`}</Button>
              <Button
                borderRadius="lg"
                fontWeight="bold"
                colorScheme="teal"
                onClick={fetchPrevPage}
              >{`<`}</Button>
              <Text color="black">{`Halaman ${pageCount} dari ${maxPage}`}</Text>
              <Button
                borderRadius="lg"
                fontWeight="bold"
                colorScheme="teal"
                onClick={fetchNextPage}
              >{`>`}</Button>
              <Button
                borderRadius="lg"
                colorScheme="teal"
                onClick={fetchLastPage}
              >{`Last Page`}</Button>
            </HStack>
            <Text
              mb="4"
              color="black"
            >{`Menampilkan ${jumlahProduk} produk`}</Text>
          </Center>
        </Center>
      </Box>

      {/* Tambah obat page */}
      <Modal
        isCentered={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isTambahObatOpen}
        onClose={onTambahObatClose}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="20px" fontWeight="bold">
            Tambah Obat
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody mt="30px">
            <HStack mb="12px">
              <Text mr="85px">Nama Obat</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nama obat"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="104px">No. Obat</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan no. obat"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="94px">No. BPOM</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan no. BPOM"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="105px">Nilai Jual</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nilai jual"
              />
            </HStack>

            <HStack mb="12px">
              <Text mr="108px">Kategori</Text>
              <Select
                fontSize="12px"
                w="auto"
                minW="141px"
                bg="white"
                color="black"
              >
                <option value="option1">Obat Bebas</option>
                <option value="option2">Obat Racik</option>
                <option value="option3">Obat Resep</option>
              </Select>
            </HStack>

            <HStack mb="12px">
              <Text mr="52px">Tgl. Kadaluwarsa</Text>
              <Input
                placeholder="DD-MM-YYYY"
                fontSize="12px"
                w="auto"
                type="date"
              />
            </HStack>

            <Divider border="2px" mt="20px" minW="full" />

            <Flex ml="32px" mb="16px" mt="16px" justify="right">
              <Button
                onClick={onTambahObatClose}
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
              >
                Simpan
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Tambah stok page */}
      <Modal
        isCentered={true}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isTambahStokOpen}
        onClose={onTambahStokClose}
        size="2xl"
      >
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
                <Button {...dec}>-</Button>
                <Input textAlign="center" maxW="55px" {...input} />
                <Button {...inc}>+</Button>
              </HStack>
            </HStack>

            <HStack mb="12px">
              <Text mr="91px">Nama obat</Text>
              <Select
                fontSize="12px"
                w="auto"
                minW="141px"
                bg="white"
                color="black"
                placeholder="Pilih Obat"
              >
                <option value="option1">Actived</option>
                <option value="option2">Vit C</option>
                <option value="option3">Bodrex</option>
              </Select>
            </HStack>

            <HStack mb="12px">
              <Text mr="105px">Nilai Jual</Text>
              <Input
                fontSize="12px"
                w="auto"
                minW="226px"
                placeholder="Masukkan nilai jual"
              />
            </HStack>

            <Divider border="2px" mt="20px" minW="full" />

            <Flex ml="32px" mb="16px" mt="16px" justify="right">
              <Button
                onClick={onTambahStokClose}
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

export default AdminDaftarProduk;
