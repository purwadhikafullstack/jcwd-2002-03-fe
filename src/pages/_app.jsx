import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import theme from "../styles/extendTheme/theme"
import NavBar from "../component/navbar/NavBar"
import BottomNavBar from "../component/bottomNavBar/BottomNavbar"
import CompanyBanner from "../component/aboutCompany/CompanyBanner"
import store from "../redux/store"
import AuthProvider from "../component/AuthProvider"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <NavBar />
          <Component {...pageProps} />
          <CompanyBanner />
          <BottomNavBar />
        </AuthProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp