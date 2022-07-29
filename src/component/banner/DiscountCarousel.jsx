import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Box, HStack, Text, useToast } from "@chakra-ui/react"
import ProductCard from "../ProductCard"
import api from "../../lib/api"

const DiscountCarousel = () => {
  const [dataProduct, setDataProduct] = useState([])
  const toast = useToast()
  const router = useRouter()


  const fetchProduct = async (
    queryParams = {
      params: {
        _sortBy: "discount",
        _sortDir: "DESC",
        _limit: 10,
        _page: 1,
      },
    }
  ) => {
    try {
      const res = await api.get("/product", queryParams)
      const data = res?.data?.result.result.rows
      setDataProduct(data)
    } catch (err) {
      toast({
        title: "error",
        status: "error",
        description: err?.response?.data?.message || err?.message,
        duration: 5000,
        isClosable: true
      })
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <>
      <Box width="95%" display="flex" alignItems="center" justifyContent="space-between">
        <Text paddingX="20px" variant="title">Kejar Diskon Hari ini</Text>
        <Text variant="subtitle" color="teal" cursor="pointer" fontWeight={600} onClick={() => router.push("/product-list")} _focus={{ outline: 0 }} justifyContent="center">lihat semua</Text>
      </Box>
      <Box
        display={["flex", "flex"]}
        paddingX="30px"
        py="10px"
        overflowX="scroll"
        background="linear-gradient(150.85deg, #B0E7E8 -3.37%, #7FB4C4 103.24%)"
        mb={["10px", "20px"]}
        scrollBehavior="smooth"
        css={{
          "&::-webkit-scrollbar": {
            display: "none"
          },
        }}
      >
        <HStack spacing={["20px", "30px"]}>
          {dataProduct && dataProduct.map((val) => {
            return (
              <ProductCard
                key={val.id}
                medName={val.med_name}
                kemasan={val.kemasan}
                discount={val.discount * 100}
                discountPrice={val.selling_price - (val.discount * val.selling_price)}
                sellingPrice={val.selling_price}
                id={val.id}
                productImage={val?.Product_images[0]?.image_url}
              />

            )
          })
          }
        </HStack>
      </Box >
    </>
  )
}

export default DiscountCarousel