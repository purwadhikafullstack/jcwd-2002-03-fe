import ProductCard from "component/ProductCard"
import React from "react"
import BottomBanner from "../component/BotomBanner"
import PromotionCard from "../component/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"
import UpLeftCategory from "component/UpLeftCategory"

const Home = () => {
    return (
        <>
            <SlideShow />
            <ResepBanner />
            <PromotionCard />
            <BottomBanner />
            <ProductCard />
            <UpLeftCategory />
        </>
    )
}

export default Home