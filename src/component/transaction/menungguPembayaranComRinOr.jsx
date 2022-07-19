import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Timer from "../timer";

const MenungguPembayaranComRinOr = () => {
  return (
    <Box
      mt="20px"
      mb="40px"
      w={["400px", "700px", "826px"]}
      borderRadius="16px"
      h={[240, 250, 250]}
      boxShadow=" 1px 2px 3px 4px rgba(237,248,248)"
      px={["20px", "30px", "40px"]}
    >
      <Text pt={7} variant="subtitle">
        Ringkasan Order
      </Text>
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
          <Box w={["61px", "70px", "100px"]} h={["53px", "75px", "95px"]}>
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
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
                variant="caption-ligth"
                fontSize={{
                  base: "12px",
                  md: "16px",
                  lg: "16px",
                }}
                fontWeight="500"
              >
                productName
              </Text>
              <Text
                mb="22px"
                variant="caption"
                fontSize={{
                  base: "10px",
                  md: "14px",
                  lg: "14px",
                }}
              >
                1 Strip
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
            <Text variant="caption-ligth" fontWeight="700" fontSize="14px">
              price
            </Text>
          </Stack>
          <Divider display={["none", "none", "flex"]} mt="10px" mb="12px" />
          <Stack
            display={["none", "none", "flex"]}
            direction="row"
            justifyContent="space-between"
          >
            <Text variant="caption-ligth" fontSize="16px" fontWeight="400">
              Sub Total
            </Text>
            <Text variant="caption-ligth" fontSize="14px" fontWeight="700">
              Rp22.000
            </Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MenungguPembayaranComRinOr;
