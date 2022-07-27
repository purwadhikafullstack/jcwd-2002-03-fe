import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  Select,
  VStack,
} from "@chakra-ui/react";
import AdminSideBar from "component/AdminSideBar";
import { Line, Bar } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import moment from "moment";
import ProfitCart from "component/ProfitCart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RingkasanStatistik = () => {
  const data3 = {
    labels: ["Dibatalkan Otomatis", "Ditolak Apotik", "Permintaan Pembeli"],
    datasets: [
      {
        label: "Jumlah dalam jutaan rupiah",
        data: ["0", "0", "0"],
        backgroundColor: "rgba(33, 205, 200, 10)",
        maxBarThickness: "10",
        borderRadius: "30",
      },
    ],
  };

  const options3 = {
    scales: {
      yAxis: {
        ticks: {
          beginAtZero: true,
        },
        max: 12,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const [ringkasanSort, setRingkasanSort] = useState(undefined);
  const [sort, setSort] = useState("");
  const [sortPendapatan, setSortPendapatan] = useState("");
  const [sortPembatalan, setSortPembatalan] = useState("");
  const [pemesanan, setPemesanan] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(moment());
  const [penjualan, setPenjualan] = useState([]);
  const [categoryPenjualan, setCategoryPenjualan] = useState([]);
  const [dataPenjualan, setDataPenjualan] = useState([]);
  const [earningData, setEarningData] = useState({});
  const [earningCategory, setEarningCategory] = useState([]);
  const [earning, setEarnings] = useState([]);
  const [cancelationData, setCancelationData] = useState([]);
  const [cancelationCategory, setCancelationCategory] = useState([]);
  const [cancelation, setCancelation] = useState([]);

  const penjualanObatOption = {
    stroke: { width: 2, curve: "smooth" },
    xaxis: {
      categories: categoryPenjualan,
    },
    chart: { type: "line", height: "200px" },
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
    if (sort === "Bulanan" || !sort) {
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
    if (sort === "Bulanan" || sort === "") {
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

  const pendapatanOption = {
    stroke: { width: 2, curve: "smooth" },
    xaxis: {
      categories: earningCategory,
    },
    chart: { type: "area", height: "200px" },
    fill: {
      type: "gradient",
    },
  };

  const pendapatanSeries = earning;

  const converProfitDataByMonth = () => {
    const { revenue } = earningData;
    const dataArr = new Array(parseInt(moment().format("MM"))).fill(0);
    revenue?.forEach((val) => {
      dataArr[parseInt(moment(val.month).format("MM")) - 1] = val.sum;
    });

    const data = [
      {
        name: "profit",
        data: dataArr,
      },
    ];

    setEarningCategory(Month);
    setEarnings(data);
  };

  const pembatalanOption = {
    stroke: { width: 2, curve: "stepline" },
    xaxis: {
      categories: cancelationCategory,
    },
    chart: { type: "line" },
  };

  const pembatalanSeries = cancelation;

  const convertDataPembatalan = () => {
    if (sortPembatalan === "Bulanan" || !sortPembatalan) {
      return;
    }
    const category = [];
    const data = [];
    cancelationData.forEach((val) => {
      if (val.week) {
        category.push(moment(val.week).format("DD MMM"));
        data.push(val.count);
      }
      if (val.year) {
        category.push(moment(val.year).format("YYYY"));
        data.push(val.count);
      }
    });

    const arrayOfData = [
      {
        name: "Obat",
        data,
      },
    ];

    setCancelationCategory(category);
    setCancelation(arrayOfData);
  };

  const covertDataPembatalanByMonth = () => {
    if (sortPembatalan === "Bulanan" || sortPembatalan === "") {
      const arr = new Array(parseInt(moment().format("MM"))).fill(0);
      cancelationData.forEach((val) => {
        arr[parseInt(moment(val.month).format("MM")) - 1] = val.count;
      });

      const arrayOfData = [
        {
          name: "Obat",
          data: arr,
        },
      ];

      setCancelationCategory(Month);
      setCancelation(arrayOfData);
    }
  };

  const handleChange = (event) => {
    setRingkasanSort(event.target.value);
  };

  const sortHandle = (event) => {
    setSort(event.target.value);
  };

  const pendapatanHandle = (event) => {
    setSortPendapatan(event.target.value);
  };

  const pembatalanHandle = (event) => {
    setSortPembatalan(event.target.value);
  };

  const fetchPemesananDataCount = async () => {
    try {
      const res = await api.post("/report/get-transaction-count", {
        stateOfDate: ringkasanSort,
      });
      setPemesanan(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPenjualan = async () => {
    try {
      const res = await api.post("/report/get-sales", {
        stateOfDate: sort || "Bulanan",
      });
      setPenjualan(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEarnings = async () => {
    try {
      const res = await api.post("/report/get-profit");
      setEarningData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCancelation = async () => {
    try {
      const res = await api.post("/report/get-cancel-order", {
        stateOfDate: sortPembatalan || "Bulanan",
      });
      setCancelationData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPemesananDataCount();
    setLastUpdated(moment());
  }, [ringkasanSort]);

  useEffect(() => {
    fetchPenjualan();
    setLastUpdated(moment());
  }, [sort]);

  useEffect(() => {
    if (penjualan?.length) {
      convertDataPenjualan();
      covertDataPenjualanByMonth();
    }
  }, [penjualan]);

  useEffect(() => {
    fetchEarnings();
    setLastUpdated(moment());
  }, []);

  useEffect(() => {
    fetchCancelation();
    setLastUpdated(moment());
  }, [sortPembatalan]);

  useEffect(() => {
    if (Object.keys(earningData).length) {
      converProfitDataByMonth();
    }
  }, [earningData]);

  useEffect(() => {
    if (cancelationData?.length) {
      convertDataPembatalan();
      covertDataPembatalanByMonth();
    }
  }, [cancelationData]);

  return (
    <>
      <AdminSideBar />
      <Box
        bg="linear-gradient(155.7deg, #D6F5F3 -45.88%, #F7FCFC 45.77%, #F1F5FC 117.72%)"
        color="black"
        ml="64"
        pb="32px"
        minH="6xl"
      >
        <HStack justify="space-between">
          <Box>
            <Text
              color="#213360"
              fontWeight="bold"
              fontSize="20px"
              pl="48px"
              pt="32px"
            >
              Ringkasan Statistik
            </Text>
            <HStack color="gray" pl="48px">
              <Text fontSize="14px">Update terakhir: </Text>
              <Text fontWeight="bold" fontSize="14px">
                {moment().format("DD MMMM YYYY, h:mm A")}
              </Text>
            </HStack>
          </Box>
          <Box pr="48px">
            <Select
              bgColor="white"
              fontSize="12px"
              width="161px"
              height="24px"
              onChange={handleChange}
              value={ringkasanSort}
            >
              <option value="Harian">1 Hari Terakhir</option>
              <option value="Mingguan">1 Minggu Terakhir</option>
              <option value="Bulanan">1 Bulan Terakhir</option>
            </Select>
          </Box>
        </HStack>

        {/* Chart aktivitas */}
        <HStack spacing="5" pl="48px" pt="16px">
          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Pesanan Baru
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              {pemesanan.findIsPaid}
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Siap Dikirim
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              {pemesanan.findIsPacking}
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Sedang Dikirim
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              {pemesanan.findIsSend}
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Selesai
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              {pemesanan.findIsDone}
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Dibatalkan
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              {pemesanan.findCancelOrder}
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Chat Baru
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              0
            </Text>
          </Stack>
        </HStack>

        {/* Chart penjualan obat */}
        <Flex>
          <Stack
            borderRadius="lg"
            bg="white"
            w="1110px"
            h="388px"
            ml="48px"
            mt="38px"
            boxShadow="md"
          >
            <HStack justify="space-between">
              <Text fontWeight="700" fontSize="20px" pt="32px" pl="16px">
                Penjualan Obat
              </Text>
              <Box pt="32px" pr="16px">
                <Select
                  fontSize="12px"
                  w="124px"
                  h="24px"
                  bg="white"
                  border="2px"
                  onChange={sortHandle}
                  value={sort}
                >
                  <option value="Bulanan">Bulanan</option>
                  <option value="Tahunan">Tahunan</option>
                  <option value="Mingguan">Mingguan</option>
                </Select>
              </Box>
            </HStack>
            <Box p="6">
              <Chart
                height="218px"
                options={penjualanObatOption}
                series={penjualanObatSeries}
              />
            </Box>
          </Stack>
        </Flex>

        {/* Chart tren */}
        <Flex>
          <Box ml="48px" mt="32px">
            <ProfitCart
              cardTitle="Tren Pendapatan"
              column={6}
              chartOption={pendapatanOption}
              chartSeries={pendapatanSeries}
              selectHandle={pendapatanHandle}
              selectValue={sortPendapatan}
              chartSort={[
                { sortValue: "Mingguan", sortTitle: "Mingguan" },
                { sortValue: "Bulanan", sortTitle: "Bulanan" },
                { sortValue: "Tahunan", sortTitle: "Tahunan" },
              ]}
              showSelectOption={false}
            />
          </Box>

          <Box ml="48px" mt="32px">
            <ProfitCart
              cardTitle="Tren Pembatalan"
              column={6}
              chartOption={pembatalanOption}
              chartSeries={pembatalanSeries}
              selectHandle={pembatalanHandle}
              selectValue={sortPembatalan}
              chartSort={[
                { sortValue: "Bulanan", sortTitle: "Bulanan" },
                { sortValue: "Mingguan", sortTitle: "Mingguan" },
                { sortValue: "Tahunan", sortTitle: "Tahunan" },
              ]}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default RingkasanStatistik;
