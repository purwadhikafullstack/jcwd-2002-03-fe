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

const ProductCard = ({ medName, discount, sellingPrice, productImage, id, kemasan, discountPrice }) => {
  const authSelector = useSelector(selectAuth)
  const router = useRouter()
  const [love, setLove] = useState(false)

  return (
    <Box
      w={["150px", "230px", "230px"]}
      h={["290px", "360px", "360px"]}


      borderRadius="xl"
      overflow="hidden"
      boxShadow="-1px -1px 5px 4px rgba(0, 12, 54, 0.03), 2px 2px 2px rgba(33, 51, 96, 0.04), 4px 4px 4px 6px rgba(0, 155, 144, 0.04)"
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
            w={["110px", "180px"]}
            h={["110px", "180px"]}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundImage={productImage}
            display="flex"
            justifyContent="end"
            boxShadow="1px 2px 3px 4px rgba(237,248,248)"
          >
            <Box mt={1} mx={1} onClick={() => setLove(!love)} position="absolute" backgroundColor="gray.200" opacity={0.6} display="flex" borderRadius="50%" w="40px" h="40px" justifyContent="center">
              <Icon as={BsSuitHeartFill} color={!love ? "gray.400" : "red.600"} boxSize="30px" mx="auto" my="auto" />
            </Box>
          </Box>

        </Stack>

      </Stack>
      <Stack px="20px" py={3} alignItems="center">
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
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
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
            Rp. {sellingPrice}
          </Text>
        </Box>
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
            Rp. {discountPrice}
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
