import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { TbMessageCircle } from "react-icons/tb";
import Timer from "./timer";

const MenungguKonfirmasiCom = () => {
  return (
    <Box
      display={["block", "block", "block"]}
      ml={[10, 50, 240]}
      w={["90%", "60%", "40%"]}
      mb={["100px", "200px", "359px"]}
      justifyContent="center"
      mt="66px"
    >
      <Text variant="title">Menunggu Konfirmasi</Text>
      <Box
        mt="40px"
        boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
        w={["785px", "700px", "826px"]}
        h="342px"
        pl="40px"
        pr="40px"
      >
        <Text pt="28px" variant="subtitle">
          Detail Resep
        </Text>
        <Divider mt="12px" mb="34px" />
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(5, 1fr)",
          ]}
        >
          <GridItem colSpan={1}>
            <Box w="130px" h="135px" borderRadius="16px">
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="4px"
                src="https://i2.wp.com/farmasetika.com/wp-content/uploads/2018/03/20180316_1726481052941494.jpg?fit=780%2C1040&ssl=1"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Text mb="3px" variant="caption" fontSize="12px">
                  Nomor Resep
                </Text>
                <Text fontSize="12px" fontWeight="500" mb="22px">
                  #123abc456def
                </Text>
                <Text fontSize="12px" fontWeight="400" variant="caption">
                  Tanggal Pengajuan
                </Text>
                <Text
                  variant="caption"
                  fontSize="12px"
                  fontWeight="500"
                  mb="20px"
                >
                  Jumat, 5 April 2022, 15:45
                </Text>
                <Text
                  variant="caption"
                  fontSize="12px"
                  _hover={{ cursor: "pointer", color: "#586193" }}
                >
                  Tampilkan Detail
                </Text>
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={1}>
            <Text textAlign="end" variant="caption" fontSize="11px">
              Mohon menunggu balasan dari apoteker selama 5 menit
            </Text>
            <Timer />
          </GridItem>
        </Grid>
        <Divider mt="22px" />
        <Stack
          mt="27px"
          direction="row"
          justifyContent="end"
          divider={<StackDivider />}
        >
          <Text fontSize="12px" fontWeight="700" variant="caption">
            Batalkan Pengajuan
          </Text>
          {/* <Divider orientation="vertical" /> */}
          <Stack direction="row" spacing="14px">
            <Icon as={TbMessageCircle} w="20px" h="18.66px" fill="#586193" />
            <Text fontSize="12px" fontWeight="700" variant="caption">
              Chat Customer Service
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Stack mt="56px" w="826px" direction="row" spacing="16px">
        <Button w="405px" variant="main-outline">
          Kembali Ke Beranda
        </Button>
        <Button w="405px" variant="main">
          Check Status Pembayaran
        </Button>
      </Stack>
    </Box>
  );
};

export default MenungguKonfirmasiCom;
