import { FaUserCircle } from "react-icons/fa";
import { IoIosList, IoIosHeart } from "react-icons/io";
import { MdPayments, MdMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Avatar, Box, Divider, Icon, Stack, Text } from "@chakra-ui/react";

const LeftProfileDafPem = () => {
  return (
    <Box
      display={["none", "none", "none", "grid"]}
      w="280px"
      h="484px"
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
    >
      <Stack pl="40px" pt="28px" direction="row" spacing="28px">
        <Avatar
          w="24px"
          h="24px"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Text variant="mini-title">Jane Doe</Text>
      </Stack>
      <Divider mt="28px" mb="34px" />
      <Stack
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
      >
        <Icon as={FaUserCircle} w="20px" h="20px" />
        <Text variant="caption">Profil</Text>
      </Stack>
      <Stack
        mt="42px"
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
      >
        <Icon _ as={IoIosList} w="20px" h="20px" />
        <Text variant="caption">Proses Pemesanan</Text>
      </Stack>
      <Stack
        mt="43px"
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
      >
        <Icon as={MdPayments} w="20px" h="20px" />
        <Text variant="caption">Metode Pembayaran</Text>
      </Stack>
      <Stack
        mt="44px"
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
      >
        <Icon as={GrMapLocation} w="20px" h="20px" />
        <Text variant="caption">Alamat Pengiriman</Text>
      </Stack>
      <Stack
        mt="44px"
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
      >
        <Icon as={IoIosHeart} w="20px" h="20px" />
        <Text variant="caption">Wishlist</Text>
      </Stack>
      <Stack
        mt="44px"
        _hover={{ cursor: "pointer" }}
        pl="40px"
        direction="row"
        spacing="50px"
        mb="40px"
      >
        <Icon as={MdMail} w="20px" h="20px" />
        <Text variant="caption">Pesan Bantuan</Text>
      </Stack>
    </Box>
  );
};

export default LeftProfileDafPem;
