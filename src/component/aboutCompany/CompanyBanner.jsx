import React from "react"
import { useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import navLinks from "../../utils/navlinks"

const CompanyBanner = () => {
    const router = useRouter()

    const result = useBreakpointValue({
        base: undefined,
        md: (
            navLinks.map((val) => {
                if (router.pathname === val.path) {
                    return <div key={val.name}>{val.displayAboutCompany}</div>
                }
                return undefined
            })
        )
    })

    return result
}


export default CompanyBanner