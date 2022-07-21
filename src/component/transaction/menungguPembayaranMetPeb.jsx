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
import { RiFileCopyFill } from "react-icons/ri";
import api from "../../lib/api";
import PaymentReceipt from "./PaymentReceipt";

const MenungguPembayaranComMetPeb = ({ transaction }) => {
  // const uploadBuktiPembayaran = () => {
  //   try {
  //     await api.post("")
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  return (
    <Box
      mt="20px"
      mb="40px"
      w={["400px", "700px", "826px"]}
      borderRadius="16px"
      h={[240, 250, 345]}
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      px={["20px", "30px", "40px"]}
    >
      <Stack
        pt={7}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="subtitle">BCA VIRTUAL ACCOUNT</Text>
        <Image src="/bca.png" w="60px" h="50px" objectFit="contain" />
      </Stack>
      <Divider mt="12px" mb="12px" />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Text variant="caption">Nomor Virtual Account</Text>
          <Text variant="title">80777082261130123</Text>
        </Stack>
        <Stack
          _hover={{ cursor: "pointer", color: "#586193" }}
          direction="row"
          alignItems="center"
        >
          <Text
            variant="caption"
            fontSize={{
              base: "16px",
              md: "18px",
              lg: "18px",
            }}
          >
            Salin
          </Text>
          <Icon as={RiFileCopyFill} color="#213360" />
        </Stack>
      </Stack>
      <Stack mt={5} mb={5}>
        <Text variant="caption">Total Pembayaran</Text>
        <Text variant="title">Rp.22.000</Text>
      </Stack>
      <PaymentReceipt TransactionId={transaction.id} />
    </Box>
  );
};

export default MenungguPembayaranComMetPeb;
