import { Box, Stack, Text } from "@chakra-ui/react";
import Timer from "../timer";

const MenungguPembayaranComWT = () => {
  return (
    <>
      <Text variant="title">Menunggu Pembayaran</Text>
      <Box
        mt="40px"
        boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
        w={["400px", "700px", "826px"]}
        borderRadius="16px"
        h="105px"
        py="32px"
        pl="40px"
        pr="40px"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text variant="caption">Batas Akhir Pembayaran</Text>
            <Text
              variant="caption"
              fontWeight={700}
              fontSize={{
                base: "16px",
                md: "18px",
                lg: "18px",
              }}
            >
              Kamis, 21 Maret 2022, 20:45 PM
            </Text>
          </Box>
          <Timer />
        </Stack>
      </Box>
    </>
  );
};

export default MenungguPembayaranComWT;
