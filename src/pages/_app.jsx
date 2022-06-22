import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux";
import theme from "../styles/extendTheme/theme"
import NavBar from "../component/navbar/NavBar"
import BottomNavBar from "../component/bottomNavBar/BottomNavbar"
import { store } from "../redux/store"
import { Provider } from "react-redux"
import CompanyBanner from "../component/aboutCompany/CompanyBanner";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <AboutCompany />
      <BottomNavBar />
    </ChakraProvider>
    </Provider>
  )
}

export default MyApp