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
  useDisclosure,
  Spinner,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import AdminSideBar from "component/AdminSideBar";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/reducer/authSlice";
import AddProduct from "../../component/admin/AddProduct";
import DeleteProduct from "../../component/admin/DeleteProduct";
import EditProduct from "../../component/admin/EditProduct";
import DaftarProdukTable from "component/DaftarProdukTable";
import api from "../../lib/api";
import { search } from "../../redux/reducer/search";

const AdminDaftarProduk = () => {
  const {
    isOpen: isOpenAddProduct,
    onOpen: onOpenAddProduct,
    onClose: onCloseAddProduct,
  } = useDisclosure();
  const router = useRouter();

  const searchSelector = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchValue, setSearchValue] = useState(searchSelector.searchInput);
  const [sortInput, setSortInput] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [maxPage, setMaxPage] = useState(1);
  const [jumlahProduk, setJumlahProduk] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [productCategory, setProductCategory] = useState([]);
  const [kategoriTerpilih, setKategoriTerpilih] = useState(null);
  const [pilihKategori, setPilihKategori] = useState(null);

  const fetchProductCategory = async () => {
    try {
      const findAllProductCategory = await api.get("/product/category");

      setProductCategory(findAllProductCategory?.data?.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);

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
          selectedProduct: kategoriTerpilih || undefined,
          searchProduct: searchValue,
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

  const inputHandler = (event) => {
    const { value } = event.target;
    setSortInput(value);
    setSearchInput(event.target.value);
  };

  const kategoriHandler = (value) => {
    setPilihKategori(value);
    setKategoriTerpilih(value);
    setPageCount(1);
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
        query: {
          _sortBy: sortBy ? sortBy : undefined,
          _sortDir: sortDir ? sortDir : undefined,
          priceMax: priceMax || undefined,
          priceMin: priceMin || undefined,
          selectedProduct: kategoriTerpilih || undefined,
          searchProduct: searchValue || undefined,
        },
      });
    }
  }, [sortDir, sortBy, priceMin, priceMax, kategoriTerpilih, searchValue]);

  useEffect(() => {
    setSearchValue(searchSelector.searchInput);
    setPageCount(1);
  }, [searchSelector.searchInput]);

  useEffect(() => {
    if (router.isReady) {
      if (router.query.searchProduk) {
        dispatch(search(router.query.searchProduk));
      }
    }
  }, []);

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
          <>
            <Button colorScheme="teal" fontSize="12px" size="sm">
              Lihat Detail
            </Button>
            <EditProduct />
            <DeleteProduct />
          </>
        ),
      },
    ],
    []
  );

  const renderCategory = () => {
    return productCategory?.map((val) => {
      return (
        <RadioGroup
          sx={{
            color: val.id == pilihKategori ? "teal" : "gray.400",
            fontWeight: val.id == pilihKategori ? "700" : "400",
            "&:hover": {
              cursor: "pointer",
              color: "teal",
              fontWeight: 700,
            },
          }}
          w="110px"
          onClick={() => kategoriHandler(val.id)}
          color="black"
        >
          <Radio color="teal" value={val.id}>
            {val.category_name}
          </Radio>
        </RadioGroup>
      );
    });
  };

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
      <AdminSideBar
        isOpenAddProduct={isOpenAddProduct}
        onOpenAddProduct={onOpenAddProduct}
        onCloseAddProduct={onCloseAddProduct}
      />
      <Box
        bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
        color="white"
        ml="64"
        pb="32px"
        minH="5xl"
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
            <HStack ml="32px" spacing="16px" mr="20px">
              <InputGroup
                color="black"
                borderRadius="full"
                bg="white"
                mt="32px"
                mb="32px"
                w="full"
              >
                <Input onChange={inputHandler} placeholder="Cari nama obat" />
                <InputRightElement>
                  <Button
                    onClick={() => {
                      dispatch(search(searchInput));
                      router.push({
                        query: {
                          med_name: searchInput,
                        },
                      });
                    }}
                    bg="transparent"
                  >
                    <Icon color="black" as={FiSearch} />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <HStack>{renderCategory()}</HStack>
            </HStack>
            <HStack w="400px">
              <AddProduct fetchData={() => fecthApi()} />
            </HStack>
          </Flex>
          <Divider my="38px" w="full" maxW="1056px" />

          <HStack mb="4">
            <Text color="black">Urutkan:</Text>
            <Select
              fontSize="12px"
              onClick={sortButton}
              color="black"
              onChange={inputHandler}
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
    </>
  );
};

export default AdminDaftarProduk;
