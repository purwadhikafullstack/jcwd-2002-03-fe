import {
  // IconButton,
  // Avatar,
  Box,
  CloseButton,
  // useDisclosure,
  Flex,
  Text,
  // Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import { FiHome, FiChevronDown, FiTrendingUp } from "react-icons/fi";
import { FaPills } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { Icon } from "@chakra-ui/icons";

const AdminSideBar = () => {
  return (
    <Box minH="100vh">
      <Box
        bgColor="gray.100"
        transition="3s ease"
        borderRight="1px"
        w={{ base: "full", md: "64" }}
        pos="fixed"
        h="full"
      >
        <Flex h="20" align="center" mx="8" justifyContent="space-between">
          <Img src="Logo.svg" />
          <CloseButton display={{ base: "flex", md: "none" }} />
        </Flex>
        <Box mt="8" ml="5">
          <Box>
            <Menu>
              <MenuButton>
                <Flex>
                  <Icon boxSize="6" as={FiHome} />
                  <Text ml="4">Transaksi</Text>
                </Flex>
              </MenuButton>
            </Menu>
          </Box>
          <Box mt="8">
            <Menu>
              <MenuButton>
                <Flex>
                  <Icon boxSize="6" as={FaPills} />
                  <Text ml="4">Produk</Text>
                  <Icon ml="123px" mt="1" as={FiChevronDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Daftar Produk</MenuItem>
                <MenuItem>Tambah Produk</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box mt="8">
            <Menu>
              <MenuButton>
                <Flex>
                  <Icon boxSize="6" as={MdReceipt} />
                  <Text ml="4">Transaksi</Text>
                  <Icon ml="109px" mt="1" as={FiChevronDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Semua Pesanan</MenuItem>
                <MenuItem>Pesanan Baru</MenuItem>
                <MenuItem>Siap Kirim</MenuItem>
                <MenuItem>Dalam Pengiriman</MenuItem>
                <MenuItem>Selesai</MenuItem>
                <MenuItem>Dibatalkan</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box mt="8">
            <Menu>
              <MenuButton>
                <Flex>
                  <Icon boxSize="6" as={FiTrendingUp} />
                  <Text ml="4">Sales &amp; Revenue</Text>
                  <Icon ml="55px" mt="1" as={FiChevronDown} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Ringkasan Statistik</MenuItem>
                <MenuItem>Buku Kas</MenuItem>
                <MenuItem>Laba Rugi</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSideBar;
