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
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { FaPills } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { Icon } from "@chakra-ui/icons";
import Link from "next/link";

const { default: AdminNavbar } = require("./AdminNavbar");

const AdminSideBar = () => {
  return (

    <SimpleGrid zIndex="overlay">
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
          <Img src="/Logo.svg" />
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
                <Link href="/admin/admin-daftar-produk">
                  Daftar Produk
                </Link>
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Tambah Produk
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
                Semua Pesanan
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Pesanan Baru
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Siap Kirim
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Dalam Pengiriman
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Selesai
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
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
                Ringkasan Statistik
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Buku Kas
              </AccordionPanel>
              <AccordionPanel
                _hover={{ cursor: "Pointer", bgColor: "gray.200" }}
                pl="14"
              >
                Laba Rugi
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </SimpleGrid>

  );
};

export default AdminSideBar;
