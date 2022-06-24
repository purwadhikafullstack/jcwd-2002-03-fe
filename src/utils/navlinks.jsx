import { FaShoppingCart } from "react-icons/fa"
import { HiDotsVertical } from "react-icons/hi"
import CartBotomNavbar from "../component/bottomNavBar/CartBotomNavbar"
import HomeBottomNavBar from "../component/bottomNavBar/HomeBottomNavBar"
import ProductDetailBottomNavbar from "../component/bottomNavBar/ProductDetailBottomNavbar"
import AboutCompany from "../component/aboutCompany/AboutCompany"
import DesktopNavBar from "../component/navbar/DesktopNavBar"
import Checkout from "../component/bottomNavBar/Checkout"
import MobileNavbar from "../component/navbar/MobileNavbar"

const navLinks = [
    {
        name: "detail-Product",
        path: "/product/detail",
        base: <MobileNavbar key="kategori" title="Kategori" icon1={FaShoppingCart} icon2={HiDotsVertical} />,
        md: <DesktopNavBar />,
        bottomNav: <ProductDetailBottomNavbar />,
        displayAboutCompany: <AboutCompany />
    },
    {
        name: "checkout",
        path: "/checkout",
        title: "Rincian",
        base: <MobileNavbar key="Rincian" title="Rincian" />,
        md: <DesktopNavBar />,
        bottomNav: <Checkout />,
        displayAboutCompany: <AboutCompany />

    },
    {
        name: "upload-resep",
        path: "/upload-resep",
        title: "Unggah File",
        base: <MobileNavbar key="Unggah File" title="Unggah File" />,
        md: <DesktopNavBar />,
        bottomNav: undefined,
        displayAboutCompany: <AboutCompany />

    },
    {
        name: "cart",
        path: "/cart",
        title: "Keranjang Saya",
        base: <MobileNavbar key="keranjang Saya" title="keranjang Saya" />,
        md: <DesktopNavBar />,
        bottomNav: <CartBotomNavbar />,
        displayAboutCompany: <AboutCompany />

    },
    {
        name: "address",
        path: "/address",
        title: "Alamat Pengiriman",
        base: <MobileNavbar key="alamat Pengiriman" title="Alamat Pengiriman" />,
        md: <DesktopNavBar />,
        bottomNav: <ProductDetailBottomNavbar />,
        displayAboutCompany: <AboutCompany />
    },
    {
        name: "admin-dashboard",
        path: "/admin/admin-dashboard",
        title: undefined,
        base: undefined,
        md: undefined,
        protected: true
    },
    {
        name: "admin-login",
        path: "/admin/login",
        title: undefined,
        base: undefined,
        md: undefined,
        protected: true
    },
    {
        name: "admin-daftar-produk",
        path: "/admin/admin-daftar-produk",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined,
        protected: true
    },
    {
        name: "home",
        path: "/",
        title: "home",
        base: <DesktopNavBar />,
        md: <DesktopNavBar />,
        bottomNav: <HomeBottomNavBar />,
        displayAboutCompany: <AboutCompany />

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
        name: "product-list",
        path: "/product-list",
        title: "product-list",
        base: <DesktopNavBar />,
        md: <DesktopNavBar />,
        bottomNav: undefined,
        displayAboutCompany: <AboutCompany />

    },
    {
        name: "register",
        path: "/auth/register",
        title: undefined,
        base: <MobileNavbar />,
        md: undefined,
        bottomNav: undefined,

    },
    {
        name: "verification",
        path: "/verification",
        title: undefined,
        base: <DesktopNavBar />,
        md: <DesktopNavBar />,
        bottomNav: undefined,
    },
]


export default navLinks 