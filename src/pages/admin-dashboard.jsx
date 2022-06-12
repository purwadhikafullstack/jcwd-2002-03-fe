const { Stack } = require("@chakra-ui/react")
const { default: AdminSideBar } = require("component/AdminSideBar")
const { default: AdminNavbar } = require("component/AdminNavbar")

const AdminDashboard = () => {
    return (
        <Stack>
            <AdminSideBar />
        </Stack>
    )
}

export default AdminDashboard