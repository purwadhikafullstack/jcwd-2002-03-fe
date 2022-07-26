import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import api from "../../../lib/api";
import { IoIosArrowBack } from "react-icons/io";
import DaftarProdukTable from "component/DaftarProdukTable";
import { useState, useEffect } from "react";
import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

const ProductStockDetails = (props) => {
  const [inventories, setInventories] = useState([]);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [jumlahProduk, setJumlahProduk] = useState(null);
  const [year, setYear] = useState("");
  const [activity, setActivity] = useState("");
  const [month, setMonth] = useState("");

  const router = useRouter();

  const fetchInventories = async () => {
    try {
      const res = await api.get(
        `/report/get-product-stock-history/${props?.product?.id}`,
        {
          params: {
            _limit: rowPerPage,
            _page: pageCount,
            filterByMonth: month || undefined,
            filterByYear: year || undefined,
            filterByActivity: activity || undefined,
          },
        }
      );

      setInventories(res?.data?.result?.findProduct.inventories);
      setJumlahProduk(res.data.result.count.count);
      setMaxPage(Math.ceil(res.data.result.count.count / rowPerPage));
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

  const data = React.useMemo(() => [...inventories], [inventories]);

  function toCurrency(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString("IDR");
  }

  const idxCell = (props) => {
    return <Text>{props.row.index + 1}</Text>;
  };

  const nilaiBeli = (props) => {
    return (
      <Box>
        {props.row.original.buying_price ? (
          <Text>Rp. {toCurrency(props.row.original.buying_price)}</Text>
        ) : (
          <Text>-</Text>
        )}
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
      Cell: (props) => <div>{moment(props.value).format("DD MMMM YYYY")} </div>,
    },
    {
      Header: "Petugas",
      accessor: "Admin.name",
    },
    {
      Header: "Status",
      accessor: "type",
    },
    {
      Header: "Amount",
      accessor: "quantity",
    },
    {
      Header: "Stok",
      accessor: "Product.Stock_opnames.0.amount",
    },
    {
      Header: "Nilai Beli",
      Cell: nilaiBeli,
    },
    {
      Header: "Nilai Jual",
      accessor: "Product.selling_price",
      Cell: (props) => <div>Rp. {toCurrency(props.value)} </div>,
    },
    {
      Header: "Tanggal Kadaluwarsa",
      accessor: "expired_date",
      Cell: (props) => <div>{moment(props.value).format("DD MMMM YYYY")} </div>,
    },
  ];

  const columns = React.useMemo(coloumFunction, []);

  useEffect(() => {
    if (router.query.id) {
      fetchInventories();
    }
  }, [router.query.id, rowPerPage, pageCount, year, month, activity]);

  return (
    <Flex direction="column">
      <HStack boxShadow="md" width="full" py="20px" pl="57px" spacing="4">
        <Button
          onClick={() => router.push("/admin/daftar-produk")}
          pt="2"
          variant="unstyled"
          borderRadius="full"
          fontWeight="bold"
        >
          <Icon boxSize={5} as={IoIosArrowBack} />
        </Button>
        <Text fontWeight="bold" fontSize="20px">
          Detail obat: {props?.product.med_name}
        </Text>
      </HStack>
      <Center
        minH="670px"
        bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
      >
        <Box mb="10" pt="32px" pb="10px" px="87px" bg="white" mt="60px">
          <Box mb="50px">
            <Text mb="32px" fontWeight="bold" fontSize="20px">
              Produk Histori
            </Text>
            <HStack>
              <Box mr="24px">
                <Text mb="2">Bulan</Text>
                <Select
                  textAlign="center"
                  borderRadius="lg"
                  w="141px"
                  h="31px"
                  fontSize="12px"
                  size="small"
                  displayEmpty
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                    setPageCount(1);
                  }}
                >
                  <option value="">Semua</option>
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>Desember</option>
                </Select>
              </Box>
              <Box>
                <Text mb="2">Aktifitas</Text>
                <Select
                  textAlign="center"
                  borderRadius="lg"
                  w="141px"
                  h="31px"
                  fontSize="12px"
                  size="small"
                  displayEmpty
                  value={activity}
                  onChange={(e) => {
                    setActivity(e.target.value);
                    setPageCount(1);
                  }}
                >
                  <option value="">Semua</option>
                  <option value="Barang masuk">Barang Masuk</option>
                  <option value="Paid">Paid</option>
                </Select>
              </Box>
            </HStack>

            <Divider p="4" />
          </Box>
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
            >{`Menampilkan ${jumlahProduk} produk histori`}</Text>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await api.get(`product/${id}`);

  return {
    props: {
      product: res?.data?.result,
    },
  };
}

export default ProductStockDetails;
