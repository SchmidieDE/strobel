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
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )

}

export default Layout