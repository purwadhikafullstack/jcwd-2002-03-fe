import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { BsCheck2 } from "react-icons/bs";

const KotakAlamatProf = () => {
  return (
    <Box
      my={5}
      mr={2}
      boxShadow=" 1px 2px 3px 4px rgba(245,251,251)"
      _hover={{
        boxShadow: " 1px 2px 3px 4px rgba(237,248,248)",
        transform: "translate(0px, -8px)",
        transitionDuration: "0.5s",
      }}
      p={5}
      bgColor="#ebffef"
      border="1px"
      borderColor="#006D7F"
      borderRadius={8}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack pr={5} spacing={0.5}>
          <Stack direction="row" alignitems="center">
            <Text variant="mini-title">Rumah</Text>
            <Box pt={0.5} pl="10px" bgColor="#f3f4f5" w="48px" h="20px">
              <Text fontSize="10px" color="#213360" fontWeight={700}>
                Utama
              </Text>
            </Box>
          </Stack>
          <Text variant="subtitle-bold">Aldo</Text>
          <Text variant="caption">6289934432189</Text>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Text variant="caption">Alamat,</Text>
            <Text variant="caption">kecamatan,</Text>
            <Text variant="caption">Kota/Kabupaten,</Text>
            <Text variant="caption">provinsi</Text>
          </Stack>
          <Text variant="caption">Kode Pos</Text>
        </Stack>
        <Icon as={BsCheck2} color="#006D7F" />
      </Stack>
    </Box>
  );
};

export default KotakAlamatProf;
