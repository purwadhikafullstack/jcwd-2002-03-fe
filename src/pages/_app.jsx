import { ChakraProvider } from "@chakra-ui/react"
import AboutCompany from "../component/AboutCompany"
import BottomNavBar from "../component/BottomNavBar"
import NavBar from "../component/NavBar"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <AboutCompany />
      <BottomNavBar />
    </ChakraProvider>
  )
}

export default MyApp