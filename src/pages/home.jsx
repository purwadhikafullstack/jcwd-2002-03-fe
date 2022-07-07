import React from "react";
import { Button, Divider, HStack, Text } from "@chakra-ui/react";
import jsCookie from "js-cookie"
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../redux/reducer/authSlice"
import BottomBanner from "../component/BotomBanner";
import PromotionCard from "../component/PromotionCard";
import ResepBanner from "../component/ResepBanner";
import SlideShow from "../component/SlideShow";

const Home = () => {
  const authSelector = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch()

  const logoutBtnHandler = () => {
    dispatch(logout);

    jsCookie.remove("user_token");
    router.push("/auth/login");
  };

  return (
    <>
      <SlideShow />
      <HStack>
        <Text>Hi {authSelector.name}</Text>
        <Button onClick={logoutBtnHandler}>Log Out</Button>
      </HStack>
      <Divider />
      <ResepBanner />
      <Divider />
      <PromotionCard />
      <Divider />
      <BottomBanner />
    </>
  );
};

export default Home;
