import Link from "next/link"
import NavItem from "./navitem"
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import GroupIcon from '@mui/icons-material/Group';
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WindowIcon from '@mui/icons-material/Window';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useEffect, useMemo, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Script from 'next/script'
import { useMediaQuery } from "@mui/material"
import NavItemDesktop from "./navItemDesktop";
import NavItemDesktopSub from "./navItemDesktopsub";
import { useRouter } from "next/router";


const stylecss = {
    icons: {
        marginLeft: "0.4rem",
        fontSize: "1.1rem",
        cursor: "pointer",
    },
    subicons: {
        marginRight: "0.4rem",
        cursor: "pointer",
    }
}

const DesktopNavItem = ({main, sublinks}) => {
    const router = useRouter()
    const hrefmain = main.href
    const iconmain = main.icon
    const namemain = main.name

    const [hover, setHover] = useState(false)
    const [linkgroup, setLinkgroup] = useState(false)
    const closeTimer = useRef(null)

    useEffect(() => {
        if (hrefmain !== "/" && (router.pathname.split("/")[1]).includes(hrefmain.split("/")[1])) {
            setLinkgroup(true)
        } else setLinkgroup(false)
    }, [router.pathname, hrefmain])

    useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

    const handleEnter = () => {
        if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
        setHover(true)
    }
    const handleLeave = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        closeTimer.current = setTimeout(() => setHover(false), 140)
    }

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
                position: "relative",
                cursor: "pointer",
                paddingBottom: "10px",
                marginBottom: "-10px",
            }}
        >
            <NavItemDesktop href={hrefmain} name={namemain} icon={iconmain} linkgroup={linkgroup} hover={hover} hasSublinks={sublinks.length > 0}/>
            {sublinks.length > 0 && (
                <div style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: hover ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-4px)",
                    zIndex: 1001,
                    minWidth: "210px",
                    overflow: "hidden",
                    maxHeight: hover ? "320px" : "0px",
                    opacity: hover ? 1 : 0,
                    transition: "max-height 0.28s ease, opacity 0.18s ease, transform 0.22s ease",
                    pointerEvents: hover ? "auto" : "none",
                    borderRadius: "12px",
                    boxShadow: hover ? "0 10px 28px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)" : "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                }}>
                    {sublinks.map((e, index) => {
                        const {href, icon, name} = e;
                        return <NavItemDesktopSub key={index} href={href} name={name} icon={icon} linkgroup={linkgroup}/>
                    })}
                </div>
            )}
        </div>
    )
}


const Header = () => {

    const matches = useMediaQuery('(min-width:1050px)');
    const router = useRouter()

    const [menuActive, setMenuActive] = useState(false)

    const NavLinks = useMemo(() => [
        {href: "/", name: "Home", icon: <HomeIcon style={stylecss.icons} sx={{cursor: "pointer"}}/>},
        {href: "/photovoltaik", name: "Photovoltaik", icon: <WindowIcon style={stylecss.icons} sx={{cursor: "pointer"}}/>},
        {href:"/photovoltaik/technik", name:"Technik", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15, cursor: "pointer" }}/>},
        {href:"/photovoltaik/leistungen", name:"Leistungen", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15, cursor: "pointer" }}/>},
        {href:"/photovoltaik/rechner", name:"Rechner", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15, cursor: "pointer" }}/>},
        {href: "/forstwirtschaft", name: "Forstwirtschaft", icon: <ForestIcon style={stylecss.icons} sx={{cursor: "pointer"}}/>},
        {href:"/forstwirtschaft/fuhrpark", name:"Fuhrpark", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15, cursor: "pointer" }}/>},
        {href:"/forstwirtschaft/leistungen", name:"Leistungen", icon: <RadioButtonCheckedIcon style={stylecss.subicons} sx={{ fontSize: 15, cursor: "pointer" }}/>},
        {href: "/kontakt", name: "Kontakt", icon: <CallIcon style={stylecss.icons} sx={{cursor: "pointer"}}/>},
        {href: "/ueberuns", name: "Über uns", icon: <GroupIcon style={stylecss.icons} sx={{cursor: "pointer"}}/>}
    ], []);

    const NavLinksDesktopObjekt = useMemo(() => {
        const obj = {};
        NavLinks.forEach((e) => {
            const {href} = e;
            if (href.indexOf("/") === href.lastIndexOf("/")) {
                obj[href] = { main: e, sublinks: [] };
            } else {
                const key = "/" + href.split("/")[1];
                if (obj[key]) obj[key].sublinks.push(e);
            }
        });
        return obj;
    }, [NavLinks]);

    useEffect(() => {
        setMenuActive(false)
    }, [router.pathname])

    const handleMenu = () => {
        setMenuActive(!menuActive)
    }

    const getDesktopNav = (Objekt) => {
        let content = []
        for (const item in Objekt) {
            const {main, sublinks} = Objekt[item]
            content.push(
                <div key={item}>
                    <DesktopNavItem main={main} sublinks={sublinks}/>
                </div>
            )
        }
        return content
    };

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

            <div style={{
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                display: "block",
                position: "fixed",
                top: "0px",
                width: "100%",
                height: matches ? "auto" : "4rem",
                zIndex: "100",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "auto",
                    padding: matches ? "0.6rem 2rem" : "0",
                    justifyContent: matches ? "space-between" : "flex-start",
                }}>
                    {
                    (!matches) &&
                    <IconButton size="large" onClick={() => handleMenu()} aria-label={menuActive ? "Menü schließen" : "Menü öffnen"} style={{padding: "0.8rem"}}>
                        {menuActive ? <CloseIcon fontSize="inherit" sx={{color: "#333"}}/> : <MenuIcon fontSize="inherit" sx={{color: "#333"}}/>}
                    </IconButton>
                    }
                    <Link href={"/"} style={{display: "flex", alignItems: "center", paddingRight: (!matches) ? "3rem" : "0rem", margin: matches ? "0" : "auto"}}>
                        <Image style={{display: "block"}} src={"/StrobelLogoEditiertGreenBlue.svg"} alt={"Strobel Logo"} width={matches ? 160 : 155} height={matches ? 50 : 48} priority />
                    </Link>
                    {
                    matches &&
                    <nav style={{display: "flex", alignItems: "center", gap: "2px"}}>
                        {getDesktopNav(NavLinksDesktopObjekt)}
                    </nav>
                    }
                </div>

            {
                (!matches) && <>
                <div
                    onClick={() => setMenuActive(false)}
                    aria-hidden={!menuActive}
                    className="mobile-backdrop"
                    style={{
                        position: "fixed",
                        top: "4rem",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.35)",
                        zIndex: 999,
                        opacity: menuActive ? 1 : 0,
                        pointerEvents: menuActive ? "auto" : "none",
                    }}
                />
                <div
                    className={`mobile-menu ${menuActive ? "open" : ""}`}
                    style={{
                        zIndex: 1000,
                        position: "relative",
                        backgroundColor: "white",
                        borderBottom: menuActive ? "1px solid #e8e8e8" : "none",
                        boxShadow: menuActive ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                        maxHeight: menuActive ? "80vh" : "0px",
                        opacity: menuActive ? 1 : 0,
                    }}
                >
                    <nav style={{ display: "flex", width: "100%", alignItems: "center", flexDirection: "column"}}>
                    {
                        NavLinks.map((navLink, index) => {
                            const {href, name, icon} = navLink
                            return (
                                <NavItem key={index} index={index} href={href} name={name} icon={icon} handleMenu={handleMenu}/>
                            )
                        })
                    }
                    </nav>
                </div>
                </>
            }

            </div>

        </>
    )
}

export default Header
