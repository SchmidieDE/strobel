import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";




const NavItem = ({href, name, icon, handleMenu}) => {

    const router = useRouter()

    const [location, setLocation] = useState()

    const [active, setActive] = useState("/")

    let subcategory = false
    if (href.split("/").length >= 3) {
        subcategory = true
    } 

    
    let backgroundColor = "#4E9940"
    let textColor = "white"

    

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
        
        
        subcategory ?
        <Link href={href} style={styleObj.link} onClick={() => handleMenu()}>
            <div style={{width: "100%"}}>
                <div style={{width: "60%", float: "right"}}>
                    <span style={styleObj.menuItem}><div style={{display: "inline-block"}}>{icon}</div>  {name}</span>
                </div>
            </div>
        </Link>
        :
        <Link href={href} style={styleObj.link} onClick={() => handleMenu()}>
            <div style={styleObj.menuItem}>{name}  {icon}</div>
        </Link>
        
        
    )
}

export default NavItem
