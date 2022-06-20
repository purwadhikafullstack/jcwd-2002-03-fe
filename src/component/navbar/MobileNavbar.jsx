import React from "react"
import { Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { FaLessThan } from "react-icons/fa"

const MobileNavbar = ({ title, icon1, icon2 }) => {
    return (
        <Grid
            key={title}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2,1fr)"
            // display="flex"
            alignContent="center"
            alignItems="center"
            boxShadow="0px 2px 3px 2px rgba(33, 51, 96, 0.02), 0px 4px 12px 4px rgba(0, 155, 144, 0.08)"
            background="linear-gradient(to left, #fde600, #8bd64c, #00b87a, #00948e, #006d7f);"
            padding={3}
        ><GridItem rowSpan={1} colSpan={5} />
            <GridItem colSpan={3} display="flex" alignItems="center">
                <Icon as={FaLessThan} onClick={() => window.history.back()} />
                <Text ml={3} textAlign="left" variant="title">{title}</Text>
            </GridItem>
            <GridItem colSpan={1}>
                {icon1 ? <Icon as={icon1} /> : undefined}
            </GridItem>
            <GridItem colSpan={1}>
                {icon2 ? <Icon as={icon2} /> : undefined}
            </GridItem>
        </Grid>
    )
}

export default MobileNavbar