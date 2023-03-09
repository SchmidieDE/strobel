import Header from "../comp/header/index"
import Cookie from "./cookie"
import Whatsapp from "../comp/whatsapp"
import Footer from "../comp/footer"

const Layout = ({children}) => {



    return (
        <>
            <Header/>
            <Cookie/>
            <Whatsapp/>
            
            <main style={{marginTop: `calc(3rem + 20px)`}}>
                {children}
            </main>
            <Footer/>
        </>
    )

}

export default Layout