import { extendTheme } from "@chakra-ui/react"
import Text from "./text"
import Button from "./button"

const theme = extendTheme({
        components: {
                Text,
                Button,
        }
})

export default theme