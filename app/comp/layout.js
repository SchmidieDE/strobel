import Header from "../comp/header/index"
import Cookie from "./cookie"
import Whatsapp from "../comp/whatsapp"
import Footer from "../comp/footer"
import { useMediaQuery } from "@mui/material"
import { useRouter } from "next/router"


const Layout = ({children}) => {

    const matches = useMediaQuery('(min-width:600px)');
    const matchesBig = useMediaQuery('(min-width:1050px)');
    const router = useRouter()

    return (
        <>
            <Header/>
            <Cookie/>
            <Whatsapp/>

            {
                matchesBig ?
                <main key={router.pathname} className="fade-in-up" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "6rem",
                    width: "900px",
                    maxWidth: "90%",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "2rem 0",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                    marginBottom: "2rem",
                }}>
                {children}
                </main>
                :
                <main key={router.pathname} className="fade-in-up" style={{
                    marginLeft: (matches) && "auto",
                    marginRight: (matches) && "auto",
                    marginTop: (!matches) ? `calc(3rem + 20px)`: "6rem",
                    width: (matches) && "600px",
                    paddingBottom: "1rem",
                }}>
                {children}
                </main>
            }

            <Footer/>
        </>
    )

}

export default Layout
