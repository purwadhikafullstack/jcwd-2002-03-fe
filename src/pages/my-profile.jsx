import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducer/authSlice";
import MyProfileCom from "../component/MyProfile";

const MyProfile = () => {
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

  useEffect(() => {
    if (!authSelector.id || authSelector.role !== "user") {
      router.push("/auth/login")
    }
  }, [])
  return <MyProfileCom />;
};
export default MyProfile;
