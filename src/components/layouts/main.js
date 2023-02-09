import { Box, Container } from "@mui/material";
import Head from "next/head";
import Navbar from '../navbar'

const Main = ({children,router})=>{
    return (
        <Box as="main" pb={8}>
            <Head> 
                <meta name="viewport" content= "width=device-width, initial-scale=1"></meta>
                <link rel="icon" type="image/png" href="/images/contents/coffee-dark.png" />

                <title>Doorvel Test</title>
            </Head>

            <Navbar path={router.asPath}>      
            </Navbar>
            <Container maxWidth="container.md" pt={20}>
                
                {children}
            </Container>
        </Box>
    )
}

export default Main