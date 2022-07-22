import React from "react";
import { Divider } from "@chakra-ui/react";
import BottomBanner from "../component/banner/BotomBanner"
import PromotionCard from "../component/banner/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"
import DiscountCarousel from "../component/banner/DiscountCarousel";
import PopularPromotion from "../component/banner/PopularPromotion";

const Index = () => {
  return (
    <>
      <SlideShow />
      <Divider />
      <ResepBanner />
      <Divider />
      <DiscountCarousel />
      <Divider />
      <PromotionCard />
      <Divider />
      <PopularPromotion />
      <Divider />
      <BottomBanner />
    </>
  );
};

export default Index;
