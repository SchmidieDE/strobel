import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";




const NavItemDesktopSub = ({href, name, icon, linkgroup}) => {

    const router = useRouter()

    const [location, setLocation] = useState()

    const [active, setActive] = useState("/")
    
    let backgroundColor = linkgroup ? "#C1DBB6" : "#4E9940" 
    let textColor = linkgroup ? "black" :"white"

    const styleObj = {
    link: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: (location === href.split("#")[0]) ? "black" : textColor,
        backgroundColor: (location === href.split("#")[0]) ? "white" : backgroundColor  ,
    },
    menuItem: {
        display: "flex",
        color: (location === href.split("#")[0]) ? "black" : textColor,
        paddingTop: "0.75rem", 
        paddingBottom: "0.75rem", 
        fontSize: "1.23rem",
        float: "left",
        fontWeight: "700",
        "&:hover": {
          color: "#78ba00"
        },
        textDecoration: "none"
    }
    }
    

    useEffect(() => {

        setLocation(router.pathname)
    }, [router.pathname])
    

    return (
        
        <Link href={href} style={styleObj.link}>
            <div style={styleObj.menuItem}>{icon}  {name}</div>
        </Link>
        
        
    )
}

export default NavItemDesktopSub
