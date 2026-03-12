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
                    marginTop: "5.5rem",
                    width: "900px",
                    maxWidth: "92%",
                    backgroundColor: "white",
                    borderRadius: "24px",
                    padding: "2.5rem 0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)",
                    marginBottom: "2.5rem",
                }}>
                {children}
                </main>
                :
                matches ?
                <main key={router.pathname} className="fade-in-up" style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "5.5rem",
                    width: "600px",
                    maxWidth: "95%",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 2px 12px rgba(0,0,0,0.04)",
                    paddingBottom: "1rem",
                    marginBottom: "2rem",
                }}>
                {children}
                </main>
                :
                <main key={router.pathname} className="fade-in-up" style={{
                    marginTop: "calc(3rem + 20px)",
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
