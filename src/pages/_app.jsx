import { ChakraProvider } from "@chakra-ui/react"
import BottomNavBar from "./component/BottomNavBar"
import NavBar from "./component/NavBar"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
      <BottomNavBar />
    </ChakraProvider>
  )
}

export default MyApp