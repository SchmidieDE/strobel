import Link from "next/link"
import NavItem from "./navitem"
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { useTrail, animated } from "@react-spring/web";
import Image from "next/image";





const stylecss = {
    menuitems: {
        zIndex: "1000",
        marginTop: "-5px"
    }
}





const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    const NavLinks = [{href: "/", name: "Home", icon: <HomeIcon/>},{href: "/photovoltaik", name: "Photovoltaik", icon: <WindowIcon/>},{href:"/photovoltaik/technik", name:"Technik", icon: <RadioButtonCheckedIcon sx={{ fontSize: 15 }}/>}, {href:"/photovoltaik/leistungen", name:"Leistungen", icon: <RadioButtonCheckedIcon sx={{ fontSize: 15 }}/>} ,{href: "/forstwirtschaft", name: "Forstwirtschaft", icon: <ForestIcon/>},{href:"/forstwirtschaft/fuhrpark", name:"Fuhrpark", icon: <RadioButtonCheckedIcon sx={{ fontSize: 15 }}/>}, {href: "/kontakt", name: "Kontakt", icon: <CallIcon/>}, {href: "/ueberuns", name: "Über uns", icon: <GroupIcon/>} ]

    const config = {mass: 5, tension: 2000, friction: 200}

    const trails = useTrail(
        NavLinks.length,
        {
        config,
        display: "block",
        height: "100%",
        width: "100%",
        opacity: menuActive ? 1 : 0,
        transform: menuActive ? "translateX(0px)" : "translateX(-100%)",
        from: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        end: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        }
    )

    const handleMenu = () => {
        setMenuActive(!menuActive)
    }



    useEffect(() => {
        console.log(menuActive, "MENU")
    }, [menuActive])



    return (
        <>
            <div style={{backgroundColor: "white", display: "block", position: "fixed", top: "0px", width: "100%", marginBottom: "30px", height: "4rem"}}>
            <div style={{display: "flex"}}> 
                <IconButton size="large" onClick={() => handleMenu()} >
                    <MenuIcon fontSize="inherit" style={{}}/>
                </IconButton>
                <Link href={"/"} style={{display: "block", margin: "auto", verticalAlign: "center", marginTop: "0.5rem", paddingRight: "3rem"}}>
                    <div >
                        <Image src={"/StrobelLogoEditiertGreenBlue.svg"} width={175.57} height={55.16} />
                    </div>
                </Link>
            </div>
            { 
            <div  style={stylecss.menuitems}>
                <nav style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "column"}}>
                {
                    menuActive && trails.map((props, index) => {
                        
                        const {href, name, icon} = NavLinks[index]
                        return (
                            <animated.div style={{...props}}>
                                <NavItem href={href} name={name} key={index} icon={icon} handleMenu={handleMenu}/> 
                            </animated.div>
                        )
                    })

                    /*
                    NavLinks.map((e, index) => {

                        const {href, name, icon} = e
                        return (
                            <NavItem href={href} name={name} key={index} icon={icon}/> 
                        )
                    })
                    */
                }
                </nav>
            </div>
            
            
            }

            </div> 
            
        </>
    )
}

export default Header