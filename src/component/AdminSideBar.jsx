import {
  Box,
  CloseButton,
  Flex,
  Img,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { FaPills } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const { default: AdminNavbar } = require("./AdminNavbar");

const AdminSideBar = ({ setTitlePage }) => {
  const router = useRouter()
  return (
    <SimpleGrid overflow="auto" zIndex="overlay">
      <Box w="full">
        <AdminNavbar />
      </Box>
      <Box
        bgColor="gray.100"
        transition="3s ease"
        borderBottom="1px"
        w={{ base: "full", md: "64" }}
        pos="absolute"
        h="full"
        boxShadow="md"
      >
        <Flex h="20" align="center" mx="8" justifyContent="space-between">
          <Img src="/logo.svg" />
          <CloseButton display={{ base: "flex", md: "none" }} />
        </Flex>
        <Box mt="8">
          <Accordion border="transparent" allowMultiple lineHeight="10">
            <AccordionItem>
              <Box>
                <AccordionButton>
                  <Icon as={FiHome} boxSize="6" />
                  <Link href="/admin/admin-dashboard">
                    <Box ml="4">Dashboard</Box>
                  </Link>
                </AccordionButton>
              </Box>
            </AccordionItem>
          </Accordion>

          <Accordion border="transparent" allowMultiple lineHeight="10">
            <AccordionItem>
              <Box>
                <AccordionButton>
                  <Icon as={FaPills} boxSize="6" />
                  <Box ml="4">Produk</Box>
                  <AccordionIcon ml="113px" />
                </AccordionButton>
              </Box>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                <Link href="/admin/daftar-produk">
                  Daftar Produk
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion border="transparent" allowMultiple lineHeight="10">
            <AccordionItem>
              <Box>
                <AccordionButton>
                  <Icon as={MdReceipt} boxSize="6" />
                  <Box ml="4">Transaksi</Box>
                  <AccordionIcon ml="100px" />
                </AccordionButton>
              </Box>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                <Text onClick={() => router.push("/admin/transaction") && setTitlePage("Semua Pesanan")}>
                  Semua Pesanan
                </Text>
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
                onClick={() => router.push({ pathname: "/admin/transaction", query: { isPaid: false, isValid: true } }) && setTitlePage("Pesanan Baru")}
              >
                Pesanan Baru
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
                onClick={() => router.push({ pathname: "/admin/transaction", query: { isPacking: true, isSend: false, isValid: true } }) && setTitlePage("Pesanan Siap Dikirim")}
              >
                Siap Kirim
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
                onClick={() => router.push({ pathname: "/admin/transaction", query: { isSend: true, isValid: true } }) && setTitlePage("Pesanan Dalam Pengiriman")}
              >
                Dalam Pengiriman
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
                onClick={() => router.push({ pathname: "/admin/transaction", query: { isDone: true, isValid: true } }) && setTitlePage("Pesanan Selesai")}
              >
                Selesai
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
                onClick={() => router.push({ pathname: "/admin/transaction", query: { isValid: false } }) && setTitlePage("Pesanan Dibatalkan")}
              >
                Dibatalkan
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion border="transparent" allowMultiple lineHeight="10">
            <AccordionItem>
              <Box>
                <AccordionButton>
                  <Icon as={FiTrendingUp} boxSize="6" />
                  <Box ml="4">Sales & Revenue</Box>
                  <AccordionIcon ml="45px" />
                </AccordionButton>
              </Box>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                <Link href="/admin/ringkasan-statistik">
                  Ringkasan Statistik
                </Link>
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                <Link href="/admin/buku-kas">
                  Buku Kas
                </Link>
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                <Link href="/admin/laba-&-rugi">
                  Laba & Rugi
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </SimpleGrid >

  );
};

export default AdminSideBar;
