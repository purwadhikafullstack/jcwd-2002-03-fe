import {
  Box,
  Stack,
  Text,
  Divider,
  Image,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { TbMessageCircle } from "react-icons/tb";
import Timer from "./timer";

const DaftarPemesananCardMk = () => {
  // render dua kali unutk dua card menungu konfirmasi upload resep
  // dan menunggu pembayaran
  return (
    <Box
      mt="20px"
      mb="40px"
      w={[345, 400, 695]}
      h={[240, 250, 249]}
      boxShadow=" 1px 2px 3px 4px rgba(245,251,251)"
      _hover={{
        boxShadow: " 1px 2px 3px 4px rgba(237,248,248)",
        transform: "translate(0px, -8px)",
        transitionDuration: "0.5s",
      }}
      px={["20px", "30px", "40px"]}
    >
      <Stack pt="29px" direction="row" justifyContent="space-between">
        <Text
          display={["none", "none", "flex"]}
          pt="5px"
          fontSize="12px"
          fontWeight="400"
        >
          Jumat, 5 April 2022, 15:45
        </Text>
        <Text
          display={["flex", "flex", "none"]}
          pt="5px"
          fontSize="10px"
          fontWeight="400"
        >
          5 April 2022
        </Text>
        <Box
          w={["130px", "140px", "156px"]}
          h={["17px", "20px", "26px"]}
          bgColor="#fff5d3"
          border="1px"
          borderRadius="2px"
          borderColor="#FFDE6B"
          pl={["12px", "12px", "14px"]}
          pt="2px"
        >
          <Text
            fontSize={{
              base: "10px",
              md: "12px",
              lg: "12px",
            }}
            fontWeight="400"
            color="#cbaf4e"
          >
            Menunggu Konfirmasi
          </Text>
        </Box>
      </Stack>
      <Divider mt="12px" mb="12px" />
      <Grid
        templateColumns={[
          "repeat(3, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(5, 1fr)",
        ]}
      >
        <GridItem colSpan={1}>
          <Box w={["61px", "70px", "75px"]} h={["53px", "75px", "80px"]}>
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="4px"
              src="https://i2.wp.com/farmasetika.com/wp-content/uploads/2018/03/20180316_1726481052941494.jpg?fit=780%2C1040&ssl=1"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={[2, 1, 4]}>
          <Stack
            ml={[-4, -2.5, 0]}
            direction="row"
            justifyContent="space-between"
          >
            <Box>
              <Text
                mb="3px"
                variant="caption"
                fontSize={{
                  base: "10px",
                  md: "14px",
                  lg: "14px",
                }}
              >
                Nomor Resep
              </Text>
              <Text
                fontSize={{
                  base: "14px",
                  md: "16px",
                  lg: "16px",
                }}
                fontWeight="500"
                mb="22px"
              >
                #123abc456def
              </Text>
              <Text
                variant="caption"
                fontSize={{
                  base: "10px",
                  md: "14px",
                  lg: "14px",
                }}
                _hover={{ cursor: "pointer", color: "#586193" }}
              >
                Tampilkan Detail
              </Text>
            </Box>
            <Timer />
          </Stack>
        </GridItem>
      </Grid>
      <Divider display={["none", "none", "flex"]} mt="14px" />
      <Stack
        display={["none", "none", "flex"]}
        direction="row"
        mt="23px"
        spacing="14px"
      >
        <Icon as={TbMessageCircle} w="20px" h="18.66px" fill="#586193" />
        <Text fontSize="12px" fontWeight="700" variant="caption">
          Chat Customer Service
        </Text>
      </Stack>
    </Box>
  );
};
export default DaftarPemesananCardMk;
