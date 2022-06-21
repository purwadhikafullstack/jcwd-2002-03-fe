import {
  GridItem,
  Grid,
  Box,
  Text,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Icon,
  Select,
} from "@chakra-ui/react";
import { BiSort } from "react-icons/bi";
import DaftarPemesananCardMp from "./DaftarPemesananCardMP";
import DaftarPemesananCardMk from "./DaftarPemesananMK";
import LeftProfileDafPem from "./LeftProfileDafPem";
import UrutanProList from "./UrutanProList";

const DaftarPemesanan = () => {
  // countdown pake moment
  return (
    <Grid
      mt={[0, 0, 40]}
      mb={[0, 0, 114]}
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={[0, 0, 12]}
      w={["0", "0", "90%"]}
      mx={["0", "0", "auto"]}
    >
      <GridItem colSpan={1}>
        <LeftProfileDafPem />
      </GridItem>
      <GridItem colSpan={4}>
        <Box
          w={[745, 200, 800]}
          h="846px"
          boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
          display={["none", "grid", "grid"]}
        >
          <Text pl="40px" pt="28px" variant="subtitle">
            Daftar Pemesanan
          </Text>
          <Tabs colorScheme="#000000" px="40px">
            <TabList>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Semua
              </Tab>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Menunggu
              </Tab>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Diproses
              </Tab>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Dikirim
              </Tab>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Selesai
              </Tab>
              <Tab mr="33.5px" _focus={{ outline: 0 }}>
                Dibatalkan
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="0">
                <Box pl="1px" mb="40px" pr="35px">
                  <Stack direction="row" justifyContent="space-between">
                    <Stack pt={10} direction="row" alignItems="center">
                      <Text
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={10}
                      direction="row"
                      alignItems="center"
                    >
                      <Text variant="caption">Urutkan:</Text>
                      <Select _focus={{ outline: 0 }} placeholder="Terbaru">
                        <option>Terbaru</option>
                        <option>Terlama</option>
                      </Select>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMk />
                </Box>
              </TabPanel>
              <TabPanel p="0">
                <Box pl="1px" mb="40px">
                  <Stack direction="row">
                    <Stack pt={10} direction="row">
                      <Text
                        mt="5px"
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={7}
                      direction="row"
                      w="31.9%"
                    >
                      <Text mt="17px" variant="caption">
                        Urutkan:
                      </Text>
                      <Box>
                        <UrutanProList />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMk />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                </Box>
              </TabPanel>
              <TabPanel p="0">
                <Box pl="1px" mb="40px">
                  <Stack direction="row">
                    <Stack pt={10} direction="row">
                      <Text
                        mt="5px"
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={7}
                      direction="row"
                      w="31.9%"
                    >
                      <Text mt="17px" variant="caption">
                        Urutkan:
                      </Text>
                      <Box>
                        <UrutanProList />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMk />
                </Box>
              </TabPanel>
              <TabPanel p="0">
                <Box pl="1px" mb="40px">
                  <Stack direction="row">
                    <Stack pt={10} direction="row">
                      <Text
                        mt="5px"
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={7}
                      direction="row"
                      w="31.9%"
                    >
                      <Text mt="17px" variant="caption">
                        Urutkan:
                      </Text>
                      <Box>
                        <UrutanProList />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMk />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                </Box>
              </TabPanel>
              <TabPanel p="0">
                <Box pl="1px" mb="40px">
                  <Stack direction="row">
                    <Stack pt={10} direction="row">
                      <Text
                        mt="5px"
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={7}
                      direction="row"
                      w="31.9%"
                    >
                      <Text mt="17px" variant="caption">
                        Urutkan:
                      </Text>
                      <Box>
                        <UrutanProList />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMk />
                </Box>
              </TabPanel>
              <TabPanel p="0">
                <Box pl="1px" mb="40px">
                  <Stack direction="row">
                    <Stack pt={10} direction="row">
                      <Text
                        mt="5px"
                        variant="mini-title"
                        display={["none", "none", "none", "grid"]}
                      >
                        Jenis Obat
                      </Text>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Semua Obat
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Resep
                      </Button>
                      <Button
                        borderRadius="130px"
                        w="105px"
                        h="33px"
                        variant="main-outline"
                      >
                        Obat Bebas
                      </Button>
                    </Stack>
                    <Stack
                      display={["none", "none", "none", "flex"]}
                      pl="46px"
                      pt={7}
                      direction="row"
                      w="31.9%"
                    >
                      <Text mt="17px" variant="caption">
                        Urutkan:
                      </Text>
                      <Box>
                        <UrutanProList />
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
                <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                  <DaftarPemesananCardMk />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                  <DaftarPemesananCardMp />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </GridItem>
      <Box display={["-ms-grid", "-ms-grid", "none"]} w="357px" h="137px">
        <Text
          variant="caption-bold"
          fontWeight="700"
          fontSize="16px"
          pl="25px"
          pt="51px"
          mb="10px"
        >
          Daftar Pemesanan
        </Text>
        <Tabs overflowX="scroll" colorScheme="#000000">
          <TabList>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Semua
            </Tab>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Menunggu
            </Tab>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Diproses
            </Tab>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Dikirim
            </Tab>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Selesai
            </Tab>
            <Tab mr="33.5px" _focus={{ outline: 0 }}>
              Dibatalkan
            </Tab>
          </TabList>

          <TabPanels position="fixed">
            <TabPanel>
              <Box pl="10px" mb="40px">
                <Stack direction="row">
                  <Stack pt={5} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                    <Box p="0" pl="40px">
                      <Icon as={BiSort} />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMk />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pl="10px" mb="40px">
                <Stack direction="row">
                  <Stack pt={5} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                    <Box p="0" pl="40px">
                      <Icon as={BiSort} />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMk />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pl="15px" mb="40px">
                <Stack direction="row">
                  <Stack pt={10} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMk />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pl="15px" mb="40px">
                <Stack direction="row">
                  <Stack pt={10} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMk />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pl="15px" mb="40px">
                <Stack direction="row">
                  <Stack pt={10} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMk />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box pl="15px" mb="40px">
                <Stack direction="row">
                  <Stack pt={10} direction="row">
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Semua Obat
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Resep
                    </Button>
                    <Button
                      borderRadius="130px"
                      w="81px"
                      h="25px"
                      fontSize="12px"
                      fontWeight="400"
                      variant="main-outline"
                    >
                      Obat Bebas
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box w="720px" h="600px" overflowY="scroll" mb="10px">
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMp />
                <DaftarPemesananCardMk />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Grid>
  );
};
export default DaftarPemesanan;
