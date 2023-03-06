import Link from "next/link"
import NavItem from "./navitem"
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import GroupIcon from '@mui/icons-material/Group';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Button, IconButton } from "@mui/material";


const Header = () => {

    const [menuActive, setMenuActive] = useState(true)



    const NavLinks = [{href: "/", name: "Home", icon: <HomeIcon/>},{href: "/photovoltaik", name: "Photovoltaik", icon: <PrecisionManufacturingIcon/>},{href: "/forstwirtschaft", name: "Forstwirtschaft", icon: <ForestIcon/>}, {href: "/kontakt", name: "Kontakt", icon: <CallIcon/>}, {href: "/ueberuns", name: "Über uns", icon: <GroupIcon/>} ]

    return (
        <>
            <div style={{backgroundColor: "white", height: "3rem"}}>
            <IconButton size="large" onClick={() => setMenuActive(!menuActive)} >
                <MenuIcon fontSize="inherit" style={{}}/>
            </IconButton>
            </div> 
            {
            menuActive &&
            <div style={{backgroundColor: "green"}}>
            <nav style={{display: "block"}}>
            {
                NavLinks.map((e, index) => {
                    const {href, name, icon} = e
                    return (
                        <NavItem href={href} name={name} key={index} icon={icon}/>
                    )
                })
            }
            </nav>
            </div>
            }
        </>
    )
}

export default Header