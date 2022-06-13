import { Stack, Box, Text, Flex, HStack, Container } from "@chakra-ui/react";
const { default: AdminSideBar } = require("component/AdminSideBar");
const { default: AdminNavbar } = require("component/AdminNavbar");
import ProfitHariIni from "component/ProfitHariIni";
import TotalPemesanan from "component/TotalPemesanan";
import SisaStok from "component/SisaStok";
import CartPentingHariIni from "component/CartPentingHariIni";
import CartKadaluwarsaObat from "component/CartKadaluwarsaObat";

const AdminDashboard = () => {
  return (
    <Stack>
      <AdminSideBar />
      <Flex direction="column" pos="absolute">
        <Text fontWeight="700" fontSize="20px" mt="28" ml="80">
          Analisis Produk & Toko
        </Text>
        <HStack>
          <Text color="#737A8D" ml="80">
            Update terakhir:
          </Text>
          <Text color="#737A8D" fontWeight="bold">
            13 Juni 2022, 15.00 WIB
          </Text>
        </HStack>
      </Flex>
      <ProfitHariIni />
      <TotalPemesanan />
      <SisaStok />
      
      <Flex direction="column" pos="absolute">
        <Text fontWeight="700" fontSize="20px" mt="375px" ml="80">
          Penting Hari Ini
        </Text>
        <HStack>
          <Text color="#737A8D" ml="80">
            Aktivitas yang perlu kamu ketahui untuk menjaga kepuasan pelanggan
          </Text>
        </HStack>
      </Flex>
      <CartPentingHariIni />

      <Flex direction="column" pos="absolute">
        <Text fontWeight="700" fontSize="20px" mt="375px" ml="900px">
          Kadaluwarsa Obat
        </Text>
        <HStack>
          <Text color="#737A8D" ml="900px">
          Cek tanggal kedaluwarsa untuk mengorganisir stok obat 
          </Text>
        </HStack>
      </Flex>
      <CartKadaluwarsaObat />
    </Stack>
  );
};

export default AdminDashboard;
