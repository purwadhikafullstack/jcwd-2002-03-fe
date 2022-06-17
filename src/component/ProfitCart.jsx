import { Flex, Stack, Text, HStack, Box, Select } from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProfitCart = () => {
  const data = {
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

  const options = {
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
    <Flex pos="absolute" zIndex="docked">
      <Stack
        borderRadius="lg"
        ml="80"
        mt="705px"
        bg="gray.100"
        w="537px"
        h="380px"
      >
        <Flex direction="row" pos="absolute">
          <Flex direction="column">
            <Text fontWeight="700" fontSize="20px" pt="32px" pl="16px">
              Profit
            </Text>
            <HStack>
              <Text color="#737A8D" pt="2px" pl="16px">
                Data dinyatakan dalam jutaan rupiah
              </Text>
            </HStack>
          </Flex>
          <Box pt="32px" pl="122px">
            <Select fontSize="12px" w="124px" h="24px" bg="white" border="2px">
              <option value="option1">Mingguan</option>
              <option value="option2">Bulanan</option>
              <option value="option3">Tahunan</option>
            </Select>
          </Box>
        </Flex>
        <Box pl="8" pt="28" boxSize="lg">
          <Bar data={data} width={400} height={200} options={options} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default ProfitCart;
