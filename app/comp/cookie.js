import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import Titel from "../comp/design/title"

const Cookie = () => {

    let crccs = {
        wrapper: {
            position: "fixed",
            width: "100%",
            background: "#fff",
            //padding: "25px 25px 30px 25px",
            bordeRradius: "3vmin",
            textAlign: "center",
            height: "300px",
            zIndex: 10000,
            bottom: 0,
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            
        }
    }


    const [cookie, setCookie] = useState(true)

    const config = {mass: 5, tension: 2000, friction: 200}

    const spring = useSpring(
        {
        position: "fixed",
        width: "100%",
        background: "#fff",
        //padding: "25px 25px 30px 25px",
        bordeRradius: "3vmin",
        textAlign: "center",
        height: "350px",
        zIndex: 10000,
        bottom: 0,
        border: "none",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        config,
        display:  "block",
        opacity: cookie ? 1 : 0,
        transform: "translateY(0px)",
        from: {
            opacity: 0,
            transform: "translateY(+100%)"
        }
        }
    )


    
    const handleCookie = () => {
        setCookie(!cookie)
        console.log(cookie)
    }


    return (
        <>
            {
            cookie && <animated.div style={spring}>
                <div style={{display: "block"}}>
                    <Titel text={"Diese Seite verwendet Cookies"} variant={"bigbold"}/>
                    <div style={{display: "block", alignItems: "center", height: "90px"}}>
                        <div style={{display: "block"}}>
                            <Image src={"/Cookiebanner.svg"} alt={"Vollernter Cookiebanner"} width={1000} height={1000} responsive="true" style={{objectFit: "contain", height: "100px", width: "auto"}} />
                        </div>
                    </div>
                    <div style={{display: "flex", padding: "0rem 1rem 0rem 1rem", alignItems: "center" }}>
                        <div>
                            <p style={{margin: "0px"}}>
                                Wir verwenden Cookies. Bei Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Diese werden zur Nutzung und Verbesserung der Nutzeroberfläche verwendet.
                            </p>
                        </div>
                    </div>
                    <div style={{width: "80%", margin: "auto"}}>
                        <Button onClick={() => handleCookie()}variant="contained" style={{color: "white", fontWeight:"600", fontSize: "1.0rem", width: "100%", backgroundColor: "#4E9940", margin: "0.9rem 0rem 1rem 0rem"}}>Zustimmen und weiter</Button>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Link href={"https://google.de"} style={{textDecoration: "none", color: "black"}}>Ablehnen</Link>
                            <Link href={"/impressum"} style={{textDecoration: "none", color: "black"}}>Impressum</Link>
                            <Link href={"/datenschutz"} style={{textDecoration: "none", color: "black"}}>Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </animated.div> 
            }
        </>
    )
}

export default Cookie