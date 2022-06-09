const { Stack } = require("@chakra-ui/react")
const { default: AdminSideBar } = require("component/AdminSideBar")

const AdminDashboard = () => {
    return (
        <Stack>
            <AdminSideBar />
        </Stack>
    )
}

export default AdminDashboard