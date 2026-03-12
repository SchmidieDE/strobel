import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useSpring, animated } from '@react-spring/web'
import Titel from "../comp/design/title"
import { useMediaQuery } from "@mui/material"


const Cookie = () => {

    const matchesBig = useMediaQuery('(min-width:600px)');

    const [cookie, setCookie] = useState(true)

    const config = {mass: 1, tension: 280, friction: 26}

    const spring = useSpring(
        matchesBig?
        {
            position: "fixed",
            width: "380px",
            background: "#fff",
            borderRadius: "20px",
            textAlign: "center",
            height: "340px",
            zIndex: 10000,
            bottom: 20,
            left: 20,
            border: "none",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)",
            config,
            display:  "block",
            opacity: cookie ? 1 : 0,
            transform: "translateY(0px)",
            from: {
                opacity: 0,
                transform: "translateY(+100%)"
            }
        }
        :
        {
        position: "fixed",
        width: "100%",
        background: "#fff",
        borderRadius: "20px 20px 0 0",
        textAlign: "center",
        height: "350px",
        zIndex: 10000,
        bottom: 0,
        border: "none",
        boxShadow: "0 -4px 32px rgba(0,0,0,0.1)",
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
    }

    return (
        <>
            {
            cookie && <animated.div style={spring}>
                <div style={{display: "block", padding: "0.5rem"}}>
                    <Titel text={"Diese Seite verwendet Cookies"} variant={"bigbold"}/>
                    <div style={{display: "block", alignItems: "center", height: "90px"}}>
                        <div style={{display: "block"}}>
                            <Image src={"/Cookiebanner.svg"} alt={"Cookiebanner"} width={1000} height={1000} style={{objectFit: "contain", height: "100px", width: "auto"}} />
                        </div>
                    </div>
                    <div style={{display: "flex", padding: "0rem 1.2rem", alignItems: "center" }}>
                        <p style={{margin: "0px", fontSize: "0.9rem", lineHeight: "1.4", color: "#555"}}>
                            Wir verwenden Cookies zur Nutzung und Verbesserung der Nutzeroberfläche.
                        </p>
                    </div>
                    <div style={{width: "80%", margin: "auto", marginTop: "0.8rem"}}>
                        <Button onClick={() => handleCookie()} variant="contained" style={{
                            color: "white",
                            fontWeight:"600",
                            fontSize: "0.95rem",
                            width: "100%",
                            background: "linear-gradient(135deg, #4E9940 0%, #3d7a32 100%)",
                            borderRadius: "10px",
                            textTransform: "none",
                            padding: "0.6rem",
                            boxShadow: "0 2px 8px rgba(78,153,64,0.3)",
                        }}>Zustimmen und weiter</Button>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.8rem"}}>
                            <button onClick={() => handleCookie()} style={{background: "none", border: "none", cursor: "pointer", textDecoration: "underline", color: "#888", fontSize: "0.85rem", fontFamily: "inherit", padding: 0}}>Ablehnen</button>
                            <Link href={"/impressum"} style={{textDecoration: "none", color: "#888", fontSize: "0.85rem"}}>Impressum</Link>
                            <Link href={"/datenschutz"} style={{textDecoration: "none", color: "#888", fontSize: "0.85rem"}}>Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </animated.div>
            }
        </>
    )
}

export default Cookie
