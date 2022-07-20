import React from "react"
import { Grid, GridItem, HStack, Icon, Text } from "@chakra-ui/react"
import { FaLessThan } from "react-icons/fa"
import { useRouter } from "next/router"

const MobileNavbar = ({ title, icon1, icon2, link }) => {
    const router = useRouter()
    return (
        <Grid
            key={title}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2,1fr)"
            // display="flex"
            alignContent="center"
            alignItems="center"
            boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
            padding={3}
        ><GridItem rowSpan={1} colSpan={5} />
            <GridItem colSpan={4} display="flex" alignItems="center">
                <Icon as={FaLessThan} onClick={() => window.history.back()} />
                <Text ml={3} textAlign="left" variant="title">{title}</Text>
            </GridItem>
            <GridItem colSpan={1} justifyContent="center" alignItems="center" display="flex" >
                <HStack spacing={7}>
                    {icon1 ? <Icon as={icon1} boxSize={5} onClick={() => router.push(link)} cursor="pointer" /> : undefined}
                    {icon2 ? <Icon as={icon2} boxSize={5} cursor="pointer" /> : undefined}
                </HStack>
            </GridItem>
        </Grid>
    )
}

export default MobileNavbar