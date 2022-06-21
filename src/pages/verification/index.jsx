import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const index = () => {

  const router = useRouter()
  const backHome = () => {
    return router.push("/")
  }
  return (
    <Box margin="auto" width="50%" alignItems="center" >
      <Text variant="title" textAlign="center">Congratulation, your email address has been verified</Text>
      <Text cursor="pointer" textAlign="center" variant="caption-bold" onClick={() => backHome()}>Back to home page
        <ArrowForwardIcon />
      </Text>
    </Box >
  )
}

export default index