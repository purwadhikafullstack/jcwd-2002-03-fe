import {
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducer/authSlice";
import api from "../lib/api";

const ProductCard = ({
  medName,
  discount,
  sellingPrice,
  productImage,
  id,
  kemasan,
  discountPrice,
}) => {
  const authSelector = useSelector(selectAuth);
  const router = useRouter();
  const [love, setLove] = useState(false);
  const toast = useToast({});

  const addToCartBtnHandler = async () => {
    try {
      const res = await api.post("/cart", {
        ProductId: id,
        price: discountPrice,
        quantity: 1,
      });
      toast({
        title: "Item added to cart",
        duration: 2000,
        status: "success",
        description: res.data.message,
      });
    } catch (err) {
      toast({
        title: "error",
        duration: 2000,
        status: "error",
        description: "error network",
      });
    }
  };

  return (
    <Box
      w={["150px", "230px", "230px"]}
      // w="213px"
      h={["290px", "360px", "360px"]}
      background="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="-1px -1px 5px 4px rgba(0, 12, 54, 0.03), 2px 2px 2px rgba(33, 51, 96, 0.04), 4px 4px 4px 6px rgba(0, 155, 144, 0.04)"
      _hover={{
        transform: "translate(0px, -8px)",
        transitionDuration: "0.5s",
      }}
    >
      <Stack px="10px" py={3} alignItems="center" spacing="10px">
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
          <Box
            mt={1}
            mx={1}
            onClick={() => setLove(!love)}
            backgroundColor="gray.200"
            opacity={0.6}
            display="flex"
            borderRadius="50%"
            w="40px"
            h="40px"
            justifyContent="center"
          >
            <Icon
              as={BsSuitHeartFill}
              color={!love ? "gray.400" : "red.600"}
              boxSize="30px"
              mx="auto"
              my="auto"
            />
          </Box>
        </Box>

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
            / {kemasan}
          </Text>
        </HStack>

        <Button
          variant="main-outline"
          w="92%"
          bottom={1}
          position="sticky"
          onClick={() =>
            authSelector.role === "user"
              ? addToCartBtnHandler()
              : router.push("/auth/login")
          }
        >
          Keranjang
        </Button>
      </Stack>
    </Box>
  );
};
export default ProductCard;
