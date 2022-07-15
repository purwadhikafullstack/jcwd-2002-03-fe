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
import { selectAuth } from "../../../redux/reducer/authSlice";
import AddProduct from "../../../component/admin/AddProduct";
import AddStock from "../../../component/admin/AddStock";
import DeleteProduct from "../../../component/admin/DeleteProduct";
import EditProduct from "../../../component/admin/EditProduct";
import DaftarProdukTable from "component/DaftarProdukTable";
import api from "../../../lib/api";
import { search } from "../../../redux/reducer/search"
import { CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"
import { HiOutlineDotsVertical } from "react-icons/hi";

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

  const { onOpen, getDisclosureProps, isOpen, onClose } = useDisclosure()
  const [hidden, setHidden] = useState(!isOpen)

  const fetchProductCategory = async () => {
    try {
      const findAllProductCategory = await api.get("/category");

      setProductCategory(findAllProductCategory?.data?.result);
    } catch (err) {
      return err
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
      return err
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

  const actionButton = (props) => {
    return (
      <Box justifyContent="space-around">
        <DeleteProduct
          key={props.row.original.id}
          id={props.row.original.id}
          fetchHandler={fecthApi}
        />

        <EditProduct
          id={props.row.original.id}
          medName={props.row.original.med_name}
          property={props.row}
          nomerMed={props.row.original.nomer_med}
          nomerBpom={props.row.original.nomer_bpom}
          sellingPrice={props.row.original.selling_price}
          discount={props.row.original.discount}
          indikasi={props.row.original.indikasi}
          kandungan={props.row.original.kandungan}
          kemasan={props.row.original.kemasan}
          categoryId={props.row.original.categoryId}
          categoryName={props.row.original.category.category_name}
          fetchHandler={fecthApi}
          arrayOfImagesProduct={props.row.original.Product_images}
        />
      </Box>
    )
  }

  const idxCell = (props) => {
    console.log(props)
    return (
      <Text>{props.row.index + 1}</Text>
    )
  } 

  const cellFunction = (props) => {
    return (
      <Button
        onClick={() =>
          router.push(`/admin/daftar-produk/${props.row.original.id}`)
        }
        colorScheme="teal"
        fontSize="12px"
        size="sm"
      >
        Lihat Detail
      </Button>
    );
  };


  const coloumFunction = () => [
    {
      Header: "No",
      Cell : idxCell
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
    {
      Header: "Stok",
      accessor: "Stock_opnames.0.amount",
    },
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
      Cell: cellFunction
    },
    {
      Header: "Action",
      Cell: actionButton
    },
  ];

  const columns = React.useMemo(coloumFunction, []);

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
              <AddStock />
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
