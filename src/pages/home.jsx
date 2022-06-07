import React from "react"
import { Divider } from "@chakra-ui/react"
import BottomBanner from "../component/BotomBanner"
import PromotionCard from "../component/PromotionCard"
import ResepBanner from "../component/ResepBanner"
import SlideShow from "../component/SlideShow"
import ProdukDetail from "../component/ProdukDetail"

const Home = () => {
    return (
        <>
            <SlideShow />
            <Divider textAlign="center" width="95%" p={4} />
            <ResepBanner />
            <Divider />
            <PromotionCard />
            <Divider />
            <BottomBanner />
            <ProdukDetail />
        </>
    )
}

export default Home