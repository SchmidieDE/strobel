import Header from "../comp/header/index"
import Cookie from "./cookie"
import Whatsapp from "../comp/whatsapp"
import Footer from "../comp/footer"
import { useMediaQuery } from "@mui/material"


const Layout = ({children}) => {

    const matches = useMediaQuery('(min-width:600px)');
    const matchesBig = useMediaQuery('(min-width:1100px)');
    

    return (
        <>
            <Header/>
            <Cookie/>
            <Whatsapp/>
            
            {
                matchesBig ? 
                <main  style={{marginLeft: (matches) && "auto", marginRight: (matches) && "auto", marginTop: (!matches) ? `calc(3rem + 20px)`: "8rem", width: (matches) && "600px"  }}>
                {children}
                </main>
                :
                <main  style={{marginLeft: (matches) && "auto", marginRight: (matches) && "auto", marginTop: (!matches) ? `calc(3rem + 20px)`: "6rem", width: (matches) && "600px"  }}>
                {children}
                </main>
            }
            
            <Footer/>
        </>
    )

}

export default Layout