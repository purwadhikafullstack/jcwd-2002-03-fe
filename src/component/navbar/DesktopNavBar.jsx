import React from "react"
import { useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import navLinks from "../utils/data"


const NavBar = () => {
    const router = useRouter()

    const result = useBreakpointValue({
        base: (
            navLinks.map((val) => {
                if (router.pathname === val.path) {
                    return <div key={val.name}>{val.base}</div>
                }
                return undefined
            }
            )
        ),
        md: (
            navLinks.map((val) => {
                if (router.pathname === val.path) {
                    return <div key={val.name}>{val.md}</div>
                }
                return undefined
            })
        )
    })

    return result
}

export default NavBar