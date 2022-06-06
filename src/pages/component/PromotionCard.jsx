import React from "react"
import { Box, Img, SimpleGrid } from "@chakra-ui/react";

const PromotionCard = () => {
    return (
        <SimpleGrid columns={[1, 2]} spacing="5px" alignItems="center" justifyContent="center">
            <Box height={["124px", "212px", "212px"]} margin={0}>
                <Img width="100%" height={["124px", "212px", "212px"]} src="programHamil.svg" />
            </Box>
            <Box height={["124px", "212px", "212px"]} margin={0}>
                <Img width="100%" height={["124px", "212px", "212px"]} src="idulFitri.svg" />
            </Box>
        </SimpleGrid>
    )
}

export default PromotionCard