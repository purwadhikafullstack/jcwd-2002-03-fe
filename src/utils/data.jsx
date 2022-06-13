import { FaShoppingCart } from "react-icons/fa"
import { HiDotsVertical } from "react-icons/hi"
import DesktopNavBar from "../component/DesktopNavBar"
import MobileNavbar from "../component/MobileNavbar"

const navLinks = [
    {
        name: "detail-Product",
        path: "/produk/detail",
        base: <MobileNavbar key="kategori" title="Kategori" icon1={FaShoppingCart} icon2={{ HiDotsVertical }} />,
        md: <DesktopNavBar />
    },
    {
        name: "checkout",
        path: "/checkout",
        title: "Rincian",
        base: <MobileNavbar key="Rincian" title="Rincian" />,
        md: <DesktopNavBar />
    },
    {
        name: "upload-resep",
        path: "/upload-resep",
        title: "Unggah File",
        base: <MobileNavbar key="Unggah File" title="Unggah File" />,
        md: <DesktopNavBar />
    },
    {
        name: "cart",
        path: "/cart",
        title: "Keranjang Saya",
        base: <MobileNavbar key="keranjang Saya" title="keranjang Saya" />,
        md: <DesktopNavBar />
    },
    {
        name: "address",
        path: "/address",
        title: "Alamat Pengiriman",
        base: <MobileNavbar key="alamat Pengiriman" title="Alamat Pengiriman" />,
        md: <DesktopNavBar />
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
    },
    {
        name: "admin-login",
        path: "/admin-login",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined
    },
    {
        name: "admin-login",
        path: "/admin-login",
        title: "Alamat Pengiriman",
        base: undefined,
        md: undefined
    },

]


export default navLinks 