import { Box, HStack, Stack, Text, Flex, Select } from "@chakra-ui/react";
import AdminSideBar from "component/AdminSideBar";
import { Line, Bar } from "react-chartjs-2";
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
import moment from "moment"

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

const RingkasanStatistik = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Obat Bebas",
        data: [
          "900",
          "800",
          "400",
          "250",
          "300",
          "400",
          "500",
          "600",
          "400",
          "500",
          "300",
          "150",
        ],
        backgroundColor: "rgba(33, 205, 200, 10)",
        maxBarThickness: "10",
        borderRadius: "30",
        borderColor: "#21CDC0",
        tension: 0.4,
      },
      {
        label: "Obat Resep",
        data: [
          "750",
          "800",
          "350",
          "250",
          "500",
          "400",
          "350",
          "300",
          "250",
          "330",
          "200",
          "150",
        ],
        backgroundColor: "#3353CC",
        maxBarThickness: "10",
        borderRadius: "30",
        borderColor: "#3353CC",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        ticks: {
          beginAtZero: true,
        },
        max: 1200,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  const data2 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Tren pendapatan",
        data: [
          "900",
          "800",
          "400",
          "250",
          "300",
          "400",
          "500",
          "600",
          "400",
          "500",
          "300",
          "150",
        ],
        backgroundColor: "rgba(33, 205, 200, 10)",
        maxBarThickness: "10",
        borderRadius: "30",
        borderColor: "#21CDC0",
        tension: 0.4,
      },
    ],
  };

  const options2 = {
    scales: {
      yAxis: {
        ticks: {
          beginAtZero: true,
        },
        max: 1200,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false
      },
    },
  };

  const data3 = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Jumlah dalam jutaan rupiah",
        data: ["3", "6", "4", "8", "5", "3", "5"],
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
        max: 12
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

        {/* Chart aktivitas */}
        <HStack spacing="5" pl="48px" pt="16px">
          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Pesanan Baru
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Siap Dikirim
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Sedang Dikirim
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Selesai
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Dibatalkan
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
            </Text>
          </Stack>

          <Stack w="168px" h="93" bg="white" borderRadius="lg" boxShadow="md">
            <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
              Chat Baru
            </Text>
            <Text pl="16px" color="#213360" fontSize="28px" fontWeight="bold">
              7
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
                >
                  <option value="option2">Bulanan</option>
                  <option value="option3">Tahunan</option>
                  <option value="option1">Mingguan</option>
                </Select>
              </Box>
            </HStack>
            <HStack pl="8" pt="42px" boxSize="3xl">
              <Line data={data} width={600} height={200} options={options} />

              <Box pl="6">
                <Stack
                  w="253px"
                  h="93px"
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Text color="#737A8D" pt="16px" pl="16px" fontWeight="700">
                    Rata-Rata Penjualan Perbulan
                  </Text>
                  <Text
                    pl="16px"
                    color="#213360"
                    fontSize="28px"
                    fontWeight="bold"
                  >
                    589
                  </Text>
                </Stack>
              </Box>
            </HStack>
          </Stack>
        </Flex>

        {/* Chart tren */}
        <Flex>
      <Stack
        borderRadius="lg"
        bg="white"
        w="537px"
        h="360px"
        ml="48px"
        mt="38px"
        boxShadow="md"
      >
        <HStack justify="space-between">
              <Text fontWeight="700" fontSize="20px" pt="32px" pl="16px">
                Tren Pendapatan
              </Text>
              <Box pt="32px" pr="16px">
                <Select
                  fontSize="12px"
                  w="124px"
                  h="24px"
                  bg="white"
                  border="2px"
                >
                  <option value="option2">Bulanan</option>
                  <option value="option3">Tahunan</option>
                  <option value="option1">Mingguan</option>
                </Select>
              </Box>
            </HStack>
        <Box pt="8" pl="8" boxSize="lg">
          <Line data={data2} width={400} height={200} options={options2} />
        </Box>
      </Stack>

      <Stack
        borderRadius="lg"
        bg="white"
        w="537px"
        h="360px"
        ml="38px"
        mt="38px"
        boxShadow="md"
      >
        <HStack justify="space-between">
              <Text fontWeight="700" fontSize="20px" pt="32px" pl="16px">
                Tren Pembatalan
              </Text>
              <Box pt="32px" pr="16px">
                <Select
                  fontSize="12px"
                  w="124px"
                  h="24px"
                  bg="white"
                  border="2px"
                >
                  <option value="option2">Bulanan</option>
                  <option value="option3">Tahunan</option>
                  <option value="option1">Mingguan</option>
                </Select>
              </Box>
            </HStack>
        <Box pl="8" pt="8" boxSize="lg">
          <Bar data={data3} width={400} height={200} options={options3} />
        </Box>
      </Stack>
    </Flex>

      </Box>
    </>
  );
};

export default RingkasanStatistik;
