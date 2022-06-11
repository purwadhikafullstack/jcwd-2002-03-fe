import { ChakraProvider } from "@chakra-ui/react"
import theme from "../styles/extendTheme/theme"
import AboutCompany from "../component/AboutCompany"
import BottomNavBar from "../component/BottomNavBar"
import NavBar from "../component/NavBar"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <AboutCompany />
      <BottomNavBar />
    </ChakraProvider>
  )
}

export default MyApp