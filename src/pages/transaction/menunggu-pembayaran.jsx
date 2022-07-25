import { Box, Button, Stack } from "@chakra-ui/react";
import MenungguPembayaranComWT from "component/transaction/menungguKonfirmasiComWT";
import MenungguPembayaranComRinOr from "component/transaction/menungguPembayaranComRinOr";
import MenungguPembayaranComMetPeb from "component/transaction/menungguPembayaranMetPeb";
import { useEffect, useState } from "react";
import api from "../../lib/api";

const MenungguPembayaran = () => {
  const [transaction, setTransaction] = useState([]);
  const fetchTransaction = async (
    queryParams = {
      params: { isPaid: 0 },
    }
  ) => {
    try {
      const res = await api.get("/transaction/user-transaction", queryParams);
      console.log(res.data.result.rows);
      setTransaction(res.data.result.rows);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransaction();
  }, []);
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
      <MenungguPembayaranComMetPeb transaction={transaction} />
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
