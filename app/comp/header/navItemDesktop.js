import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";




const NavItemDesktop = ({href, name, icon, linkgroup, handleHoverItem}) => {

    const router = useRouter()

    const [location, setLocation] = useState()

    const [active, setActive] = useState("/")
    
    let backgroundColor = linkgroup ? "#C1DBB6" : "#4E9940" 
    let textColor = linkgroup ? "black" :"white"

    const styleObj = {
    link: {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: (location === href) ? "black" : textColor,
        backgroundColor: (location === href) ? "#C1DBB6" : backgroundColor  ,
    },
    menuItem: {
        display: "flex",
        color: (location === href) ? "black" : textColor,
        paddingTop: "0.75rem", 
        paddingBottom: "0.75rem", 
        textAlign: "center",
        fontSize: "1.23rem",
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
        
        <Link href={href} style={styleObj.link}  onMouseEnter={() => handleHoverItem(true)}>
            <div style={styleObj.menuItem}>{name}  {icon}</div>
        </Link>
        
        
    )
}

export default NavItemDesktop
