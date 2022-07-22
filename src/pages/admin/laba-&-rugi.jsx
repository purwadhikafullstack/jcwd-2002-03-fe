import {
  Grid,
  Box,
  Text,
  HStack,
  VStack,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import moment from "moment";
import api from "../../lib/api";
import AdminSideBar from "component/AdminSideBar";
import LabaRugi from "component/admin/LabaRugi";

const LabaRugiPage = () => {
  const [periode, setPeriode] = useState("Bulanan");
  const [bulan, setBulan] = useState();
  const [tahun, setTahun] = useState();
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();

  const periodeHandle = (event) => {
    setPeriode(event.target.value);
  };
  const bulanHandle = (event) => {
    setBulan(event.target.value);
  };
  const tahunHandle = (event) => {
    setTahun(moment(event).format("YYYY"));
  };

  const fetchRevenue = async () => {
    try {
      const res = await api.get("/inventory/revenue", {
        params: {
          filterByMonth: bulan || undefined,
          filterByYear: tahun || undefined,
        },
      });

      setIncome(res.data.result.inCome);
      setOutcome(res.data.result.outCome);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (income || !income || outcome || !outcome) {
      fetchRevenue();
    }
  }, [bulan, tahun, income, outcome]);

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
            Laporan Laba & Rugi
          </Text>
          <HStack color="gray" pl="48px">
            <Text fontSize="14px">Update terakhir: </Text>
            <Text fontWeight="bold" fontSize="14px">
              {moment().format("DD MMMM YYYY, h:mm A")}
            </Text>
          </HStack>

          <Box ml="48.5px">
            <HStack spacing="6" mt="79px">
              <VStack>
                <Text fontSize="12px" color="gray">
                  Periode
                </Text>
                <Select
                  fontSize="12px"
                  width="187.5px"
                  h="32px"
                  bgColor="white"
                  onChange={periodeHandle}
                  value={periode}
                >
                  <option
                    value="Bulanan"
                    onClick={() => {
                      setTahun();
                    }}
                  >
                    Bulanan
                  </option>
                  <option
                    value="Tahunan"
                    onClick={() => {
                      setBulan();
                      setTahun("2022");
                    }}
                  >
                    Tahunan
                  </option>
                </Select>
              </VStack>

              <VStack>
                <Text fontSize="12px" color="gray">
                  Bulan
                </Text>
                <Select
                  fontSize="12px"
                  width="187.5px"
                  h="32px"
                  bgColor="white"
                  onChange={bulanHandle}
                  value={bulan}
                >
                  <option value={1}>Januari</option>
                  <option value={2}>Februari</option>
                  <option value={3}>Maret</option>
                  <option value={4}>April</option>
                  <option value={5}>Mei</option>
                  <option value={6}>Juni</option>
                  <option value={7}>Juli</option>
                  <option value={8}>Agustus</option>
                  <option value={9}>September</option>
                  <option value={10}>Oktober</option>
                  <option value={11}>November</option>
                  <option value={12}>Desember</option>
                </Select>
              </VStack>

              <VStack>
                <Text fontSize="12px" color="gray">
                  Tahun
                </Text>
                <Select
                  fontSize="12px"
                  width="187.5px"
                  h="32px"
                  bgColor="white"
                  value={tahun || null}
                  onChange={tahunHandle}
                >
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                  <option value={2029}>2029</option>
                  <option value={2030}>2030</option>
                </Select>
              </VStack>
            </HStack>
          </Box>

          <Box mx="48px" mt="40px" bgColor="white">
            <Box pt="64px">
              <Text fontWeight="bold" fontSize="32px" textAlign="center">
                Laporan Laba & Rugi
              </Text>
              <Box mt="16px">
                <Text fontWeight="medium" fontSize="14px" textAlign="center">
                  Periode Bulan {moment().format("MMMM")} Tahun{" "}
                  {moment().format("YYYY")}
                </Text>
                <Text fontWeight="medium" fontSize="14px" textAlign="center">
                  Terbit: Minggu 13 Februari, 2022 pukul 18.14 (GMT +07.00)
                </Text>
              </Box>
            </Box>

            <Box pb="27px" mt="20px">
              <LabaRugi
                title1="Penjualan"
                title2="dalam rupiah"
                kategori={[
                  {
                    kategoriName: "Penjualan Barang",
                    value: income?.toLocaleString(),
                  },
                  { kategoriName: "Total Service", value: 0 },
                  { kategoriName: "Total Embalance", value: 0 },
                  { kategoriName: "Ongkos Kirim", value: 0 },
                  { kategoriName: "Diskon Penjualan", value: 0 },
                  { kategoriName: "Retur Penjualan", value: 0 },
                ]}
                footer="Penjualan Bersih"
                footerValue={income?.toLocaleString()}
              />

              <LabaRugi
                title1="Pengeluaran Operasional"
                kategori={[
                  { kategoriName: "Gaji Karyawan", value: 0 },
                  { kategoriName: "Listrik", value: 0 },
                  { kategoriName: "Air", value: 0 },
                  { kategoriName: "Telepon", value: 0 },
                  { kategoriName: "Internet", value: 0 },
                  { kategoriName: "Sewa Tempat", value: 0 },
                  { kategoriName: "Peralatan Kantor", value: 0 },
                  { kategoriName: "Biaya Pengadaan", value: 0 },
                  { kategoriName: "Biaya Operasional Lainnya", value: 0 },
                ]}
                footer="Pengeluaran Operasional"
                footerValue={0}
              />

              <LabaRugi
                title1="Pendapatan Lainnya"
                kategori={[
                  { kategoriName: "Cashback Pembelian", value: 0 },
                  { kategoriName: "Keuntungan Konsiyasi", value: 0 },
                ]}
                footer="Pendapatan Lainnya"
                footerValue={0}
              />

              <LabaRugi
                title1="Laba Bersih"
                kategori={[
                  { kategoriName: "Laba Kotor", value: 0 },
                  { kategoriName: "Pengeluaran Operasional", value: 0 },
                  { kategoriName: "Pendapatan Lainnya", value: 0 },
                ]}
                footer="Laba Bersih"
                footerValue={(income - outcome).toLocaleString()}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LabaRugiPage;
