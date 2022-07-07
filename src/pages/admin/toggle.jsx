import { Box, Button, useDisclosure } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { useState } from "react"

const toggle = () => {

    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
    const [hidden, setHidden] = useState(!isOpen)

    return (
        <div>
            <Button {...getButtonProps()}>Toggle</Button>
            <Box height="100px">
                <motion.div
                    {...getDisclosureProps()}
                    hidden={hidden}
                    initial={false}
                    onAnimationStart={() => setHidden(false)}
                    onAnimationComplete={() => setHidden(!isOpen)}
                    animate={{ width: isOpen ? 500 : 0 }}
                    style={{
                        background: "red",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        position: "absolute",
                        right: "0",
                        height: "100%",
                        top: "0",
                    }}
                >
                    welcome home
                </motion.div>
            </Box>
        </div>
    )
}

export default toggle