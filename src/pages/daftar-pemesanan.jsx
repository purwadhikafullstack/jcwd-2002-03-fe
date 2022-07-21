
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { selectAuth } from "../redux/reducer/authSlice";
import DaftarPemesananCom from "../component/DafPemesanan/DaftarPemesananCom";

const DaftarPemesanan = () => {
  const router = useRouter()
  const authSelector = useSelector(selectAuth)

  if (!authSelector.id || authSelector.role !== "user") {
    router.push("/auth/login")

    return <Spinner thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      display="flex"
      mt="10px"
      mb="auto"
      ml="auto"
      mr="auto"
    />
  }
  return <DaftarPemesananCom />;
};

export default DaftarPemesanan;
