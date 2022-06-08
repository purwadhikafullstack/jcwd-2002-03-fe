import React from "react"
import { Divider } from "@chakra-ui/react"
import BottomBanner from "../component/BotomBanner"
import PromotionCard from "../component/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"

const Home = () => {
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
    )
}

export default Home