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
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp } from "react-icons/fi";
import { FaPills } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { Icon } from "@chakra-ui/icons";
const { default: AdminNavbar } = require("component/AdminNavbar");

const AdminSideBar = () => {
  return (
    <>
      <Box minH="100vh">
        <Box w="100%" pos="absolute">
          <AdminNavbar />
        </Box>
        <Box
          bgColor="gray.100"
          transition="3s ease"
          borderRight="1px"
          w={{ base: "full", md: "64" }}
          pos="absolute"
          h="full"
        >
          <Flex h="20" align="center" mx="8" justifyContent="space-between">
            <Img src="Logo.svg"></Img>
            <CloseButton display={{ base: "flex", md: "none" }} />
          </Flex>
          <Box mt="8">
            <Accordion border="transparent" allowMultiple lineHeight="10">
              <AccordionItem>
                <Box>
                  <AccordionButton>
                    <Icon as={FiHome} boxSize="6" />
                    <Box ml="4">Produk</Box>
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
                  Daftar Produk
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
      </Box>
    </>
  );
};

export default AdminSideBar;