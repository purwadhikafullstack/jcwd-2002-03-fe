import { Flex, Stack, Text, HStack, Box, Select } from "@chakra-ui/react";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CartPenjualanObat = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Obat Bebas",
        data: ["900", "800", "400", "250", "300", "400", "500", "600", "400", "500", "300", "150"],
        backgroundColor: "rgba(33, 205, 200, 10)",
        maxBarThickness: "10",
        borderRadius: "30",
        borderColor: "#21CDC0",
        tension: 0.4
      },
      {
        label: "Obat Racikan",
        data: ["750", "800", "350", "250", "500", "400", "350", "300", "250", "330", "200", "150"],
        backgroundColor: "#3353CC",
        maxBarThickness: "10",
        borderRadius: "30",
        borderColor: "#3353CC",
        tension: 0.4
      },
    ],
  };

  const options = {
    scales: {
      yAxis: {
        ticks: {
          beginAtZero: true,
        },
        max: 1250
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
            pointStyle: "circle"
        }
      },
    },
  };

  return (
    <Flex pos="absolute">
      <Stack
        borderRadius="lg"
        ml="900px"
        mt="705px"
        bg="gray.100"
        w="537px"
        h="380px"
      >
        <Flex direction="row" pos="absolute">
          <Flex direction="column">
            <Text fontWeight="700" fontSize="20px" pt="32px" pl="16px">
              Penjualan Obat
            </Text>
          </Flex>
          <Box pt="32px" pl="240px">
            <Select fontSize="12px" w="124px" h="24px" bg="white" border="2px">
              <option value="option2">Bulanan</option>
              <option value="option3">Tahunan</option>
              <option value="option1">Mingguan</option>
            </Select>
          </Box>
        </Flex>
        <Box pl="8" pt="24" boxSize="lg">
          <Line data={data} width={400} height={200} options={options} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default CartPenjualanObat;
