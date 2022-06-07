import React from "react"
import { Box, Img, SimpleGrid } from "@chakra-ui/react";

const PromotionCard = () => {
    return (
        <SimpleGrid columns={[1, 2, 2]} spacing={5} alignItems="center" justifyContent="center">
            <Box height="auto" margin={0}>
                <Img width="100%" src="programHamil.svg" />
            </Box>
            <Box height="auto" margin={0}>
                <Img width="100%" src="idulFitri.svg" />
            </Box>
        </SimpleGrid>
    )
}

export default PromotionCard