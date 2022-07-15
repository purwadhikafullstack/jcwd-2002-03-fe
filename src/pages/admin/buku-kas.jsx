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
  Text,
  VStack,
} from "@chakra-ui/react";
import AdminSideBar from "component/AdminSideBar";
import DaftarProdukTable from "component/DaftarProdukTable";
import React from "react";
import api from "../../lib/api";
import { useState, useEffect } from "react";
import moment from "moment";
import { FiSearch } from "react-icons/fi";
import { search } from "../../redux/reducer/search"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const BukuKas = () => {
  const router = useRouter();
  const searchSelector = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState(1);
  const [dataSales, setDataSales] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [jumlah, setJumlah] = useState(null);
  const [searchValue, setSearchValue] = useState(searchSelector.searchInput);
  const [searchInput, setSearchInput] = useState("");

  const maxPageRow = 10;

  const fecthApi = async () => {
    try {
      const res = await api.get("/inventory/sales-report", {
        params: {
          _limit: maxPageRow,
          _page: pageCount,
          searchProduct: searchValue,
        },
      });
      setJumlah(res.data.result.count);
      setDataSales(res.data.result.rows);
      setMaxPage(Math.ceil(res.data.result.count / maxPageRow));
    } catch (err) {
      return err;
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

  const data = React.useMemo(() => [...dataSales], [dataSales]);

  function toCurrency(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString("IDR");
  }

  const idxCell = (props) => {
    return <Text>{props.row.index + 1}</Text>;
  };

  const pengeluaran = (props) => {
    return (
      <Box>
        {props.row.original.buying_price * props.row.original.quantity ? (
          <Text>
            Rp.{" "}
            {toCurrency(
              props.row.original.buying_price * props.row.original.quantity
            )}
          </Text>
        ) : (
          <Text>-</Text>
        )}
      </Box>
    );
  };

  const pemasukan = (props) => {
    const uangMasuk =
      props.row.original.Product?.selling_price * props.row.original.quantity;
    const uangKeluar =
      props.row.original.buying_price * props.row.original.quantity;

    if (uangKeluar) {
      uangMasuk = null;
    }

    return (
      <Box>
        {uangMasuk ? <Text>Rp. {toCurrency(uangMasuk)}</Text> : <Text>-</Text>}
      </Box>
    );
  };

  const coloumFunction = () => [
    {
      Header: "No",
      Cell: idxCell,
    },
    {
      Header: "Tanggal",
      accessor: "createdAt",
      Cell: (props) => <div>{moment(props.value).format("DD/MM/YYYY")} </div>,
    },
    {
      Header: "Aktifitas",
      accessor: "type",
    },
    {
      Header: "Nama Barang",
      accessor: "Product.med_name",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Masuk",
      Cell: pemasukan,
    },
    {
      Header: "Keluar",
      Cell: pengeluaran,
    },
    {
      Header: "Atur",
      Cell: (props) => (
        <Button h="32px" w="100px" colorScheme="teal" fontSize="12px" size="sm">
          Batalkan
        </Button>
      ),
    },
  ];

  const columns = React.useMemo(coloumFunction, []);

  const inputHandler = (event) => {
    const { value } = event.target;
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    setSearchValue(searchSelector.searchInput);
    setPageCount(1);
  }, [searchSelector.searchInput]);

  useEffect(() => {
    fecthApi();
  }, [pageCount])

  useEffect(() => {
    fecthApi();

    router.push({
        query: {
          searchProduct: searchValue || undefined,
        },
      });
  }, [searchValue]);

  useEffect(() => {
    if (router.isReady) {
      if (router.query.searchProduk) {
        dispatch(search(router.query.searchProduk));
      }
    }
  }, []);

  return (
    <>
      <AdminSideBar />
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
          Buku Kas
        </Text>

        <Box flexDirection="column" mr="48px" ml="48px" mt="38px" bg="white">
          <HStack pr="32px" justify="space-between">
            <VStack align="start">
              <Text
                pt="33px"
                pl="32px"
                fontWeight="medium"
                fontSize="12px"
                color="gray"
              >
                Akun kas
              </Text>
              <Text
                pt="14px"
                pl="32px"
                fontWeight="bold"
                fontSize="14px"
                color="gray"
              >
                BCA xxxxxxxxxxx
              </Text>
            </VStack>

            <Flex pt="30px">
              <InputGroup
                color="black"
                borderRadius="full"
                bg="white"
                minW="434px"
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
                  bg="transparent">
                    <Icon color="black" as={FiSearch} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </HStack>

          <Center flexDirection="column" mt="78px">
            <DaftarProdukTable data={data} columns={columns} />

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
            <Text mb="4" color="black">{`Menampilkan ${jumlah} data`}</Text>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default BukuKas;
