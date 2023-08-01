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
import Script from 'next/script'
import { useMediaQuery } from "@mui/material"
import NavItemDesktop from "./navItemDesktop";
import NavItemDesktopSub from "./navItemDesktopsub";
import { useRouter } from "next/router";





const stylecss = {
    menuitems: {
        zIndex: "1000",
        marginTop: "-5px",
        boxShadow: "rgba(0, 0, 0, 0.16) -5px 3px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    },
    icons: {
        marginLeft: "0.4rem"
    },
    subicons: {
        marginRight: "0.4rem"
    }
}





const Header = () => {

    const matches = useMediaQuery('(min-width:1050px)');
    const matchesBig = useMediaQuery('(min-width:1030px)');

    const [menuActive, setMenuActive] = useState(false)

    const NavLinks = [{href: "/", name: "Home", icon: <HomeIcon style={stylecss.icons}/>},{href: "/photovoltaik", name: "Photovoltaik", icon: <WindowIcon style={stylecss.icons}/>},{href:"/photovoltaik/technik", name:"Technik", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15 }}/>}, {href:"/photovoltaik/leistungen", name:"Leistungen", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15 }}/>}, {href:"/photovoltaik/rechner", name:"Rechner", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15 }}/>} ,{href: "/forstwirtschaft", name: "Forstwirtschaft", icon: <ForestIcon style={stylecss.icons}/>},{href:"/forstwirtschaft/fuhrpark", name:"Fuhrpark", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15 }}/>},{href:"/forstwirtschaft/leistungen", name:"Leistungen", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15 }}/>}, {href: "/kontakt", name: "Kontakt", icon: <CallIcon style={stylecss.icons}/>}, {href: "/ueberuns", name: "Über uns", icon: <GroupIcon style={stylecss.icons}/>} ]

    

    let NavLinksDesktopObjekt = {};

    NavLinks.map((e, index) => {
        const {href} = e;
        console.log(NavLinksDesktopObjekt, "OBJECT UND HREF")

        if (href.includes("/") && href.indexOf("/") === href.lastIndexOf("/")) {
            NavLinksDesktopObjekt[href] = {};
            NavLinksDesktopObjekt[href]["main"] = e;
            NavLinksDesktopObjekt[href]["sublinks"] = [];
        } else {
            const getKey = "/" + href.split("/")[1]

            console.log(getKey, "GRT KEY")
            
            console.log(getKey, "KEY")
            NavLinksDesktopObjekt[getKey]["sublinks"].push(e);
        }
        
    })
    console.log(NavLinksDesktopObjekt, "OBJECT")
    
    const DesktopNavItem = ({main, sublinks}) => {

        const router = useRouter()

        const hrefmain = main.href 
        const iconmain = main.icon
        const namemain = main.name

        const [hover, setHover] = useState(false)
        const [linkgroup, setLinkgroup] = useState(false)
 
        const handleHoverItem = () => {
            setHover(!hover)
        }

        useEffect(() => {

            if ((router.pathname.split("/")[1]).includes(hrefmain.split("/")[1]) && hrefmain !== "/" ) {
                setLinkgroup(true)
            } else setLinkgroup(false)
            
        }, [router.pathname])

        return <>
            <NavItemDesktop  href={hrefmain} name={namemain} icon={iconmain} handleHoverItem={handleHoverItem} linkgroup={linkgroup}/>
            {
                sublinks.map((e, index) => {
                    

                    const {href, icon, name} = e;

                    return hover? <NavItemDesktopSub href={href} name={name} icon={icon} hover={hover} linkgroup={linkgroup}/> : <></>
                })
            }  
        </>


    }



    const getDesktopNav = Objekt => {

        let content = []

       
        for (const item in Objekt) {
            const {main, sublinks} = Objekt[item]
            //console.log(item, "Item", main, "Main",sublinks, "sublinks", Objekt, "Objekt")
            
 

            content.push(<div>
                 <DesktopNavItem main={main} sublinks={sublinks}/>
            </div>)
        }
        return content
    };




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
        //console.log(menuActive, "MENU")
    }, [menuActive])



    return (
        <>
        
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LQ8YNDGR9N"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LQ8YNDGR9N');
            `}
        </Script>
        
        

            <div style={{backgroundColor: "white", display: "block", position: "fixed", top: "0px", width: "100%", marginBottom: "30px", height: "4rem", zIndex: "100"}}>
            <div style={{display: "flex"}}> 
                {

                (!matches) &&
                <IconButton size="large" onClick={() => handleMenu()} style={{padding: "0.8rem"}}>
                    <MenuIcon fontSize="inherit" sx={{color: "black"}}/>
                </IconButton>
                }
                <Link href={"/"} style={{display: "block", margin: "auto", verticalAlign: "center", paddingRight: (!matches) ? "3rem" : "0rem"}}>
                    <Image style={{display: "block", marginTop: "auto", marginBottom: "auto"}} src={"/StrobelLogoEditiertGreenBlue.svg"} alt={"Strobel Logo"} width={175.57} height={55.16} />
                </Link>
            </div>
            {
                
                 
                (!matches) &&
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
            
            {
            (matches && !matchesBig) &&
            <div style={{width: "100%", marginBottom: "3rem"}}>
                <div>
                <div style={{width: "600px", margin: "auto", display: "flex", justifyContent: "center"}}>
                    {
                        getDesktopNav(NavLinksDesktopObjekt)
                    }
                </div>
                </div>
            </div>
            }
            {
            (matches && matchesBig) &&
            <div style={{width: "100%", marginBottom: "3rem"}}>
                <div>
                <div style={{width: "1100px", margin: "auto", display: "flex", justifyContent: "center"}}>
                    {
                        getDesktopNav(NavLinksDesktopObjekt)
                    }
                </div>
                </div>
            </div>
            }

            </div> 
            
        </>
    )
}

export default Header