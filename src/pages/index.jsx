import React from "react";
import { Center, Spinner, Divider } from "@chakra-ui/react";
import BottomBanner from "../component/BotomBanner"
import PromotionCard from "../component/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"

const Index = () => {
  return (
    <>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      </Center>
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
