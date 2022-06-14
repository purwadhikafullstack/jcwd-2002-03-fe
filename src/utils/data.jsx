import { FaShoppingCart } from "react-icons/fa"
import { HiDotsVertical } from "react-icons/hi"
import CartBotomNavbar from "../component/bottomNavBar/CartBotomNavbar"
import HomeBottomNavBar from "../component/bottomNavBar/HomeBottomNavBar"
import ProductDetailBottomNavbar from "../component/bottomNavBar/ProductDetailBottomNavbar"
import DesktopNavBar from "../component/navbar/DesktopNavBar"
import Checkout from "../component/bottomNavBar/Checkout"
import MobileNavbar from "../component/navbar/MobileNavbar"

const navLinks = [
    {
        name: "detail-Product",
        path: "/product/detail",
        base: <MobileNavbar key="kategori" title="Kategori" icon1={FaShoppingCart} icon2={HiDotsVertical} />,
        md: <DesktopNavBar />,
        bottomNav: <ProductDetailBottomNavbar />
    },
    {
        name: "checkout",
        path: "/checkout",
        title: "Rincian",
        base: <MobileNavbar key="Rincian" title="Rincian" />,
        md: <DesktopNavBar />,
        bottomNav: <Checkout />

    },
    {
        name: "upload-resep",
        path: "/upload-resep",
        title: "Unggah File",
        base: <MobileNavbar key="Unggah File" title="Unggah File" />,
        md: <DesktopNavBar />,
        bottomNav: undefined

    },
    {
        name: "cart",
        path: "/cart",
        title: "Keranjang Saya",
        base: <MobileNavbar key="keranjang Saya" title="keranjang Saya" />,
        md: <DesktopNavBar />,
        bottomNav: <CartBotomNavbar />

    },
    {
        name: "address",
        path: "/address",
        title: "Alamat Pengiriman",
        base: <MobileNavbar key="alamat Pengiriman" title="Alamat Pengiriman" />,
        md: <DesktopNavBar />,
        bottomNav: <ProductDetailBottomNavbar />

    },
    {
        name: "admin-dashboard",
        path: "/admin-dashboard",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined
    },
    {
        name: "home",
        path: "/",
        title: "home",
        base: <DesktopNavBar />,
        md: <DesktopNavBar />,
        bottomNav: <HomeBottomNavBar />

    },
    {
        name: "admin-login",
        path: "/admin-login",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined,
        bottomNav: undefined

    },
    {
        name: "admin-login",
        path: "/admin-login",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined,
        bottomNav: undefined

    },

]


export default navLinks 