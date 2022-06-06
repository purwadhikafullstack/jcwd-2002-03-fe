import React from "react"
import BottomBanner from "./component/BotomBanner"
import PromotionCard from "./component/PromotionCard"
import ResepBanner from "./component/ResepBanner"
import SlideShow from "./component/SlideShow"

const Home = () => {
    return (
        <>
            <SlideShow />
            <ResepBanner />
            <PromotionCard />
            <BottomBanner />

        </>
    )
}

export default Home