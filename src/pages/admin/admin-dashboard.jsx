import { Stack, Text, Flex, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { selectAdminAuth } from "../../redux/reducer/authAdminSlice";
import ProfitHariIni from "../../component/ProfitHariIni"
import TotalPemesanan from "../../component/TotalPemesanan";
import SisaStok from "../../component/SisaStok";
import CartPentingHariIni from "../../component/CartPentingHariIni";
import CartKadaluwarsaObat from "../../component/CartKadaluwarsaObat";
import ProfitCart from "../../component/ProfitCart";
import CartPenjualanObat from "../../component/CartPenjualanObat";

const { default: AdminSideBar } = require("../../component/AdminSideBar");

const AdminDashboard = () => {
  const authAdminSelector = useSelector(selectAdminAuth)
  const router = useRouter()

  useEffect(() => {
    console.log(authAdminSelector)
    if (!authAdminSelector) {
      router.push("/admin/login")
    }
  }, [])
  return (
    <Stack mb="8" w="1519px" h="1140px" borderBottom="1px">
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

      <Flex direction="column" position="absolute">
        <Text fontWeight="700" fontSize="20px" mt="375px" ml="890px">
          Kadaluwarsa Obat
        </Text>
        <HStack>
          <Text width="630px" color="#737A8D" ml="890px">
            Cek tanggal kedaluwarsa untuk mengorganisir stok obat
          </Text>
        </HStack>
      </Flex>
      <CartKadaluwarsaObat />

      <ProfitCart />
      <CartPenjualanObat />
    </Stack>
  );
};

export default AdminDashboard;
