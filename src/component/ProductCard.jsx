import {
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducer/authSlice";

const ProductCard = ({ medName, discount, sellingPrice, productImage, id, kemasan }) => {
  const authSelector = useSelector(selectAuth)
  const router = useRouter()
  const [love, setLove] = useState(false)

  return (
    <Box
      w={["140px", "213px", "213px"]}
      h={["290px", "360px", "360px"]}


      borderRadius="xl"
      overflow="hidden"
      boxShadow=" 1px 2px 3px 4px rgba(245,251,251)"
      mb={5}
      _hover={{
        boxShadow: " 1px 2px 3px 4px rgba(237,248,248)",
        transform: "translate(0px, -8px)",
        transitionDuration: "0.5s",
      }}
    >
      <Stack direction="row" justifyContent="center">
        <Stack px="40px" pt="20px">
          <Box
            w="180px"
            h="180px"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundImage={productImage}
            display="flex"
            justifyContent="end"
          >
            <Box onClick={() => setLove(!love)} position="absolute" backgroundColor="gray.200" opacity={0.6} display="flex" borderRadius="50%" w="40px" h="40px" justifyContent="center">
              <Icon as={BsSuitHeartFill} color={!love ? "gray.400" : "red.600"} boxSize="30px" mX="auto" my="auto" />
            </Box>
          </Box>

        </Stack>

      </Stack>
      <Stack pl="24px" pr="10px" pt="3">
        <Text
          fontSize={{
            base: "12px",
            md: "14px",
            lg: "14px",
          }}
          fontWeight="700"
          fontFamily="sans-serif"
          variant="mini-title"
          onClick={() => router.push(`/product/detail/${id}`)}
          cursor="pointer"
        >
          {medName}
        </Text>
        <Stack direction="row">
          <Box
            border="1px"
            borderColor="#FF6B6B"
            maxW="36px"
            maxH="24px"
            borderRadius="4px"
          >
            <Text
              py="1px"
              px="1px"
              textAlign="center"
              fontSize={{
                base: "10px",
                md: "12px",
                lg: "12px",
              }}
              color="#FF6B6B"
              fontWeight="700"
            >
              {discount}%
            </Text>
          </Box>
          <Text
            textDecorationLine="line-through"
            textDecorationColor="#737A8D"
            pl="12px"
            variant="caption"
            fontSize={{
              base: "10px",
              md: "14px",
              lg: "14px",
            }}
          >
            Rp. 17.000
          </Text>
        </Stack>
        <HStack paddingBottom="10px">
          <Text
            mr="10"
            variant="caption"
            fontSize={{
              base: "10px",
              md: "14px",
              lg: "14px",
            }}
          >
            Rp. {sellingPrice}
          </Text>
          <Text
            variant="caption"
            fontSize={{
              base: "10px",
              md: "14px",
              lg: "14px",
            }}
          >
            /{kemasan}
          </Text>
        </HStack>

        <Button variant="main-outline" w="92%" onClick={() => authSelector.role === "user" ? router.push("/cart") : router.push("/auth/login")}>
          Keranjang
        </Button>
      </Stack>
    </Box >
  );
};
export default ProductCard;
