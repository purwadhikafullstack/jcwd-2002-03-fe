import {
  Stack,
  Text,
  Flex,
  HStack,
  Spinner,
  Box,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { selectAuth } from "../../redux/reducer/authSlice";
import ProfitHariIni from "../../component/ProfitHariIni";
import TotalPemesanan from "../../component/TotalPemesanan";
import SisaStok from "../../component/SisaStok";
import CartPentingHariIni from "../../component/CartPentingHariIni";
import CartKadaluwarsaObat from "../../component/CartKadaluwarsaObat";
import ProfitCart from "../../component/ProfitCart";
import CartPenjualanObat from "../../component/CartPenjualanObat";
import moment from "moment";
import api from "../../lib/api";

const { default: AdminSideBar } = require("../../component/AdminSideBar");

const AdminDashboard = () => {
  const authSelector = useSelector(selectAuth);
  const router = useRouter();

  const [pemesanan, setPemesanan] = useState([]);
  const [expStok, setExpStok] = useState({});
  const [todayTransaction, setTodayTransaction] = useState({});
  const [todayStock, setTodayStock] = useState({});
  const [penjualan, setPenjualan] = useState([]);
  const [categoryPenjualan, setCategoryPenjualan] = useState([]);
  const [dataPenjualan, setDataPenjualan] = useState([]);
  const [sortPenjualan, setSortPenjualan] = useState("");
  const [sortProfit, setSortProfit] = useState("");
  const [todayRevenue, setTodayRevenue] = useState({});
  const [profitData, setProfitData] = useState({});
  const [categoryProfit, setCategoryProfit] = useState([]);
  const [profit, setProfit] = useState([]);

  const penjualanObatOption = {
    stroke: { width: 2, curve: "smooth" },
    xaxis: {
      categories: categoryPenjualan,
    },
  };

  const penjualanObatSeries = dataPenjualan;

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const convertDataPenjualan = () => {
    if (sortPenjualan === "Bulanan" || !sortPenjualan) {
      return;
    }
    const category = [];
    const data = [];
    penjualan.forEach((val) => {
      if (val.week) {
        category.push(moment(val.week).format("DD MMM"));
        data.push(val.sum);
      }
      if (val.year) {
        category.push(moment(val.year).format("YYYY"));
        data.push(val.sum);
      }
    });

    const arrayOfData = [
      {
        name: "Obat",
        data,
      },
    ];

    setCategoryPenjualan(category);
    setDataPenjualan(arrayOfData);
  };

  const covertDataPenjualanByMonth = () => {
    if (sortPenjualan === "Bulanan" || sortPenjualan === "") {
      const arr = new Array(parseInt(moment().format("MM"))).fill(0);
      penjualan.forEach((val) => {
        arr[parseInt(moment(val.month).format("MM")) - 1] = val.sum;
      });

      const arrayOfData = [
        {
          name: "Obat",
          data: arr,
        },
      ];

      setCategoryPenjualan(Month);
      setDataPenjualan(arrayOfData);
    }
  };

  const profitOption = {
    xaxis: {
      categories: categoryProfit,
    },
  };

  const profitSeries = profit;

  const converProfitDataByMonth = () => {
    const { revenue, capital } = profitData;
    const dataArr = new Array(parseInt(moment().format("MM"))).fill(0);
    revenue?.forEach((val) => {
      dataArr[parseInt(moment(val.month).format("MM")) - 1] = val.sum;
    });

    capital?.forEach((val) => {
      dataArr[parseInt(moment(val.month).format("MM")) - 1] -= val.sum;
    });

    const data = [
      {
        name: "profit",
        data: dataArr,
      },
    ];

    setCategoryProfit(Month);
    setProfit(data);
  };

  const handleChangePenjualan = (event) => {
    setSortPenjualan(event.target.value);
  };

  const handleChangeProfit = (event) => {
    setSortProfit(event.target.value);
  };

  const fetchPemesananDataCount = async () => {
    try {
      const res = await api.post("/report/get-transaction-count");
      setPemesanan(res.data.result);
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchExpStok = async () => {
    try {
      const res = await api.get("/report/get-exp-product");
      setExpStok(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTodayTransaction = async () => {
    try {
      const res = await api.get("/report/get-today-transaction");
      setTodayTransaction(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTodayStok = async () => {
    try {
      const res = await api.get("/report/get-today-stock");
      const stockInfo = {
        todayStock: res.data.result.todayStock.sum,
        yesterdayStock: res.data.result.yesterdayStock.sum,
      };
      setTodayStock(stockInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPenjualan = async () => {
    try {
      const res = await api.post("/report/get-sales", {
        stateOfDate: sortPenjualan || "Bulanan",
      });
      setPenjualan(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRevenue = async () => {
    try {
      const res = await api.get("/report/get-today-revenue");
      setTodayRevenue(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfit = async () => {
    try {
      const res = await api.post("/report/get-profit");
      setProfitData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPemesananDataCount();
    fetchExpStok();
    fetchTodayTransaction();
    fetchTodayStok();
    fetchRevenue();
    fetchProfit();
  }, []);

  useEffect(() => {
    fetchPenjualan();
  }, [sortPenjualan]);

  useEffect(() => {
    if (penjualan?.length) {
      convertDataPenjualan();
      covertDataPenjualanByMonth();
    }
  }, [penjualan]);

  useEffect(() => {
    if (Object.keys(profitData).length) {
      converProfitDataByMonth();
    }
  }, [profitData]);

  useEffect(() => {
    if (authSelector.role !== "admin") {
      router.push("/admin/login");
    }
  }, [authSelector]);

  if (authSelector.role !== "admin") {
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
        color="black"
        ml="64"
        pb="32px"
        minH="5xl"
      >
        <Box>
          <Text
            color="#213360"
            fontWeight="bold"
            fontSize="20px"
            pl="48px"
            pt="32px"
          >
            Analisis Produk & Toko
          </Text>
          <HStack color="gray" pl="48px">
            <Text fontSize="14px">Update terakhir: </Text>
            <Text fontWeight="bold" fontSize="14px">
              {moment().format("DD MMMM YYYY, h:mm A")}
            </Text>
          </HStack>
        </Box>

        <HStack mt="16px" ml="48px">
          <ProfitHariIni
            title="Profit Hari Ini"
            amount={`Rp. ${todayRevenue?.todayRevenue?.result || 0}`}
            value={Math.abs(
              todayRevenue?.todayRevenue?.result -
                todayRevenue?.yesterdayRevenue?.result
            ).toLocaleString()}
            percentage={
              isNaN(
                Math.abs(
                  ((todayRevenue?.todayRevenue?.result -
                    todayRevenue?.yesterdayRevenue?.result) /
                    todayRevenue?.yesterdayRevenue?.result) *
                    100
                ).toFixed(1)
              )
                ? 0
                : Math.abs(
                    ((todayRevenue?.todayRevenue?.result -
                      todayRevenue?.yesterdayRevenue?.result) /
                      todayRevenue?.yesterdayRevenue?.result) *
                      100
                  ).toFixed(1)
            }
            notation={
              todayRevenue?.todayRevenue?.result -
                todayRevenue?.yesterdayRevenue?.result <
              0
                ? "-"
                : "+"
            }
          />
          <TotalPemesanan
            title="Total Pemesanan Hari Ini"
            amount={todayTransaction.todayOrder}
            value={Math.abs(
              todayTransaction.todayOrder - todayTransaction.yesterdayOrder
            )}
            percentage={
              isNaN(
                Math.abs(
                  ((todayTransaction.todayOrder -
                    todayTransaction.yesterdayOrder) /
                    todayTransaction.yesterdayOrder) *
                    100
                ).toFixed(1)
              )
                ? 0
                : Math.abs(
                    ((todayTransaction.todayOrder -
                      todayTransaction.yesterdayOrder) /
                      todayTransaction.yesterdayOrder) *
                      100
                  ).toFixed(1)
            }
            notation={
              todayTransaction.todayOrder - todayTransaction.yesterdayOrder < 0
                ? "-"
                : "+"
            }
          />
          <SisaStok
            title="Sisa Stok Hari Ini"
            amount={todayStock.todayStock}
            value={Math.abs(todayStock.todayStock - todayStock.yesterdayStock)}
            percentage={
              isNaN(
                Math.abs(
                  ((todayStock.todayStock - todayStock.yesterdayStock) /
                    todayStock.yesterdayStock) *
                    100
                ).toFixed(1)
              )
                ? 0
                : Math.abs(
                    ((todayStock.todayStock - todayStock.yesterdayStock) /
                      todayStock.yesterdayStock) *
                      100
                  ).toFixed(1)
            }
            notation={
              todayStock.todayStock - todayStock.yesterdayStock < 0 ? "-" : "+"
            }
          />
        </HStack>

        <HStack spacing="86px" ml="48px" mt="32px">
          <Box>
            <Text fontWeight="700" fontSize="20px">
              Penting Hari Ini
            </Text>
            <Text color="#737A8D">
              Aktivitas yang perlu kamu ketahui untuk menjaga kepuasan pelanggan
            </Text>
          </Box>

          <Box>
            <Text fontWeight="700" fontSize="20px">
              Kadaluwarsa Obat
            </Text>
            <Text width="630px" color="#737A8D">
              Cek tanggal kedaluwarsa untuk mengorganisir stok obat
            </Text>
          </Box>
        </HStack>

        <HStack mt="16px" spacing="50px" ml="48px">
          <VStack>
            <CartPentingHariIni value={pemesanan} />
          </VStack>

          {/* Chart kadaluwarsa */}
          <Stack
            w="353px"
            h="197px"
            bg="white"
            borderRadius="lg"
            boxShadow="md"
          >
            <Stack direction="row" justify="space-between">
              <Text pt="40px" pl="16px" fontSize="16px" fontWeight="700">
                Telah Kadaluwarsa
              </Text>
              <Text
                pt="34px"
                pr="16px"
                fontSize="24px"
                fontWeight="700"
                color="#FF6B6B"
              >
                {expStok?.expStok?.sum || "-"}
              </Text>
            </Stack>

            <Stack direction="row" justify="space-between">
              <Text pt="11px" pl="16px" fontSize="16px" fontWeight="700">
                Kadaluwarsa Bulan Ini
              </Text>
              <Text
                pt="5px"
                pr="16px"
                fontSize="24px"
                fontWeight="700"
                color="#FFDE6B"
              >
                {expStok?.expSoon?.sum || "-"}
              </Text>
            </Stack>

            <HStack direction="row" justify="space-between">
              <Text pt="11px" pl="16px" fontSize="16px" fontWeight="700">
                Kadaluwarsa 3 Bulan Kedepan
              </Text>
              <Text
                pt="5px"
                pr="16px"
                fontSize="24px"
                fontWeight="700"
                color="#21CDC0"
              >
                {expStok?.expIn3Months?.sum || "-"}
              </Text>
            </HStack>
          </Stack>
        </HStack>

        <HStack spacing="50px" ml="48px" mt="32px">
          <ProfitCart
            cardTitle="Profit"
            column={6}
            chartOption={profitOption}
            chartSeries={profitSeries}
            selectHandle={handleChangeProfit}
            selectValue={sortProfit}
            chartSort={[
              { sortValue: "Mingguan", sortTitle: "Mingguan" },
              { sortValue: "Bulanan", sortTitle: "Bulanan" },
              { sortValue: "Tahunan", sortTitle: "Tahunan" },
            ]}
            chartType="bar"
            showSelectOption={false}
          />
          <CartPenjualanObat
            cardTitle="Penjualan Obat"
            column={6}
            chartOption={penjualanObatOption}
            chartSeries={penjualanObatSeries}
            selectHandle={handleChangePenjualan}
            selectValue={sortPenjualan}
            chartSort={[
              { sortValue: "Bulanan", sortTitle: "Bulanan" },
              { sortValue: "Mingguan", sortTitle: "Mingguan" },
              { sortValue: "Tahunan", sortTitle: "Tahunan" },
            ]}
            chartType="line"
          />
        </HStack>
      </Box>
    </>
  );
};

export default AdminDashboard;
