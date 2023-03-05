import Link from 'next/link';
import { useState } from "react";



const NavItem = ({href, name, icon}) => {

    const [active, setActive] = useState("/")
    

    const styleObj = {
    link: {
        display: "block",
        cursor: "pointer",
        paddingBottom: "1.5rem",
        textDecoration: "none"
    },
    menuItem: {
        display: "flex",
        color: "black",
        paddingBottom: "1.5rem",
        textAlign: "center",
        fontSize: "1.23rem",
        "&:hover": {
          color: "#78ba00"
        },
        textDecoration: "none"
    }
    }
    




    return (
        <Link href={href} style={styleObj.link} ><a style={styleObj.menuItem}>{name}  {icon}</a></Link>
    )
}

export default NavItem
