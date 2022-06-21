import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";

const MyProfileCom = () => {
  return (
    <Box mt={[40, 40, 40]} mb={[0, 0, 114]} px={[10, 10, 10]}>
      <Stack direction="row" alignItems="center" mb="10px">
        <Icon as={FaRegUser} w="14px" h="20px" />
        <Text>User</Text>
      </Stack>
      <Box
        h="846px"
        boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
        borderRadius={10}
      >
        <Tabs colorScheme="#000000" isFitted>
          <TabList>
            <Tab _focus={{ outline: 0 }}>BioData Diri</Tab>
            <Tab _focus={{ outline: 0 }}>Daftar Alamat</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(5, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                gap={[20, 20, 20, 5]}
              >
                <GridItem colSpan={2}>
                  <Box
                    mx={10}
                    w={["50vw", "20vw", "30vw", "30vw", "30vw", "30vw"]}
                    mt={5}
                    pt={8}
                    px={[7, 10, 10]}
                    // pl={15}
                    h={[270, 270, 270, 370, 460]}
                    boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
                  >
                    <Image
                      w="100%"
                      src="https://images.tokopedia.net/img/cache/300/default_picture_user/default_toped-12.jpg"
                    />
                    <Button mt={5} w="100%" variant="main-outline">
                      Pilih Foto
                    </Button>
                  </Box>
                </GridItem>
                <GridItem colSpan={3}>
                  <Stack mt={10} spacing={10}>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Biodata Diri
                    </Text>
                    <Stack direction="row" spacing="66px">
                      <Text variant="caption">Nama Lengkap</Text>
                      <Stack direction="row" spacing={3}>
                        <Text variant="caption">User</Text>
                        <Text variant="caption" color="#586193">
                          Ubah
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={20}>
                      <Text variant="caption">Tanggal Lahir</Text>
                      {/* <Text variant="caption">7 April 1990</Text> */}
                      <Text variant="caption" color="#586193">
                        Tambah Tanggal Lahir
                      </Text>
                    </Stack>
                    <Stack direction="row" spacing={20}>
                      <Text variant="caption">Jenis Kelamin</Text>
                      {/* <Text variant="caption">Pria</Text> */}
                      <Text variant="caption" color="#586193">
                        Tambah Jenis Kelamin
                      </Text>
                    </Stack>
                    <Text variant="caption-bold" fontWeight={700}>
                      Ubah Email
                    </Text>
                    <Stack direction="row" spacing="134px">
                      <Text variant="caption">Email</Text>
                      <Stack direction="row" spacing={3}>
                        <Text variant="caption">apotik@mail.com</Text>
                        <Text variant="caption" color="#586193">
                          Ubah
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
export default MyProfileCom;
