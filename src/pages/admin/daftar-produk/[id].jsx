import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
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

  const router = useRouter();

  const fetchInventories = async () => {
    try {
      const res = await api.get(`/product/${props?.product?.id}`);

      setInventories(() => [...res?.data?.result?.inventories]);
    } catch (err) {
      console.log(err);
    }
  };

  const data = React.useMemo(() => [...inventories], [inventories]);

  function toCurrency(numberString) {
    let number = parseFloat(numberString);
    return number.toLocaleString("IDR");
  }

  const idxCell = (props) => {
    console.log(props);
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
    fetchInventories();
  }, []);

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
        <Box pt="32px" pb="87px" px="87px" bg="white" mt="60px">
          <Text mb="32px" fontWeight="bold" fontSize="20px">
            Produk Histori
          </Text>
          <Box borderRadius="17px" overflow="auto" maxH="572px">
            <DaftarProdukTable columns={columns} data={data} />
          </Box>
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
