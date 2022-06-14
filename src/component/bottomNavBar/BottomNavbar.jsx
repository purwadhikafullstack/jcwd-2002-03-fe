import { useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import navLinks from "../../utils/data"

const BottomNavBar = () => {
    const router = useRouter()
    const result = useBreakpointValue({
        base: (

            navLinks.map((val) => {

                if (router.pathname === val.path) {

                    return <div key={val.name}> {val.bottomNav}</div>
                }
                return undefined
            })
        ),
        md: (undefined)
    })
    return result
}

export default BottomNavBar