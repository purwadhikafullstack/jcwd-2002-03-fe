import {
    // Center,
    Container,
    SimpleGrid
} from "@chakra-ui/react"
import LeftSectionAdminLogin from "../component/LeftSectionAdminLogin"
import RightSectionAdminLogin from "../component/RightSectionAdminLogin"

const AdminLogin = () => {
    return (
        <Container
            height="full"
            as={SimpleGrid}
            maxW="full"
            columns={{ base: 2, md: 2 }}
            spacing={{ base: 1, md: 2 }}>
            <LeftSectionAdminLogin />
            <RightSectionAdminLogin />
        </Container>
    )
}

export default AdminLogin