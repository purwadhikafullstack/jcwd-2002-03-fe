import React from "react"
import { Box, Button, Grid, GridItem, Icon, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

const login = () => {
    return (
        <Grid templateColumns="repeat(2,1fr)">
            <GridItem colSpan={[0, 1, 1]} />
            <GridItem colSpan={[2, 1, 1]}>
                <Box width="90%">
                    <Box>
                        <Text variant="title">Mari Kita Mulai</Text>
                        <Text variant="caption">Sudah punya akun?<b>Masuk</b></Text>
                    </Box>
                </Box>
                <Grid alignItems="center" justifyContent="space-between">
                    <Button width="256px" height="48px">
                        <Icon as={FcGoogle} />
                        <Text>Daftar dengan Goggle</Text>
                    </Button>
                    <Button>
                        <Icon as={FaFacebookF} />
                        <Text>Daftar dengan Facebook</Text>
                    </Button>
                </Grid>

            </GridItem>
        </Grid >
    )
}

export default login