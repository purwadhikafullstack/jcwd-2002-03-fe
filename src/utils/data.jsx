import { FaShoppingCart } from "react-icons/fa"
import { HiDotsVertical } from "react-icons/hi"
import MobileNavbar from "../component/MobileNavbar"

const navLinks = [
    {
        name: "detail-Product",
        path: "/produk/detail",
        component: <MobileNavbar key="kategori" title="Kategori" icon1={FaShoppingCart} icon2={{ HiDotsVertical }} />
    },
    {
        name: "checkout",
        path: "/checkout",
        title: "Rincian",
        component: <MobileNavbar key="Rincian" title="Rincian" />
    },
    {
        name: "upload-resep",
        path: "/upload-resep",
        title: "Unggah File",
        component: <MobileNavbar key="Unggah File" title="Unggah File" />
    },
    {
        name: "cart",
        path: "/cart",
        title: "Keranjang Saya",
        component: <MobileNavbar key="keranjang Saya" title="keranjang Saya" />
    },
    {
        name: "address",
        path: "/address",
        title: "Alamat Pengiriman",
        component: <MobileNavbar key="alamat Pengiriman" title="Alamat Pengiriman" />
    },
]

export default navLinks