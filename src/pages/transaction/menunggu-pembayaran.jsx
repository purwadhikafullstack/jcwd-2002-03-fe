import { Box, Button, Stack } from "@chakra-ui/react";
import MenungguPembayaranComWT from "component/transaction/menungguKonfirmasiComWT";
import MenungguPembayaranComRinOr from "component/transaction/menungguPembayaranComRinOr";
import MenungguPembayaranComMetPeb from "component/transaction/menungguPembayaranMetPeb";

const MenungguPembayaran = () => {
  return (
    <Box
      display={["block", "block", "block"]}
      //   mx={[5, 0, 235]}
      w={["40%", "60%", "40%"]}
      mb={["100px", "200px", "359px"]}
      justifyContent="center"
      mt="66px"
    >
      <MenungguPembayaranComWT />
      <MenungguPembayaranComRinOr />
      <MenungguPembayaranComMetPeb />
      <Stack
        mt="56px"
        w="826px"
        direction={["column", "column", "row"]}
        spacing="16px"
      >
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

export default MenungguPembayaran;
