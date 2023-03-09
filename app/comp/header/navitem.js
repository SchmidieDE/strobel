import Link from 'next/link';
import { useState } from "react";



const NavItem = ({href, name, icon, handleMenu}) => {

    const [active, setActive] = useState("/")
    

    const styleObj = {
    link: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        backgroundColor: "green"
    },
    menuItem: {
        display: "block",
        color: "black",
        paddingTop: "0.75rem", 
        paddingBottom: "0.75rem", 
        textAlign: "center",
        fontSize: "1.23rem",
        "&:hover": {
          color: "#78ba00"
        },
        textDecoration: "none"
    }
    }
    


    

    return (
        
        <Link href={href} style={styleObj.link} onClick={() => handleMenu()}>
            <span style={styleObj.menuItem}>{name}  {icon}</span>
        </Link>
    
    )
}

export default NavItem
