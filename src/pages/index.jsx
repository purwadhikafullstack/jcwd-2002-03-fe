import React from "react";
import { Divider } from "@chakra-ui/react";
import BottomBanner from "../component/banner/BotomBanner"
import PromotionCard from "../component/banner/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"

const Index = () => {
  return (
    <>
      <SlideShow />
      <Divider />
      <ResepBanner />
      <Divider />
      <PromotionCard />
      <Divider />
      <BottomBanner />
    </>
  );
};

export default Index;
