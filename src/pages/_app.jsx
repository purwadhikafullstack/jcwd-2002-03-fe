import { ChakraProvider } from "@chakra-ui/react"
import theme from "../styles/extendTheme/theme"
import AboutCompany from "../component/AboutCompany"
import NavBar from "../component/navbar/NavBar"
import BottomNavBar from "../component/bottomNavBar/BottomNavbar"

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