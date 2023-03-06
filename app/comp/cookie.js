import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const Cookie = () => {

    let crccs = {
        wrapper: {
            position: "fixed",
            width: "100%",
            background: "#fff",
            //padding: "25px 25px 30px 25px",
            bordeRradius: "3vmin",
            textAlign: "center",
            height: "250px",
            zIndex: 10000,
            bottom: 0,
            border: "none"
        }
    }
    


    return (
        <>
            <div style={crccs.wrapper}>
                <div style={{display: "block"}}>
                    <div style={{display: "flex", padding: "1rem 1rem 0 1rem" }}>
                        <div style={{display: "block", alignItems: "center", height: "100px"}}>
                            <div style={{display: "block"}}>
                                <Image src={"Cookiebanner.svg"} alt={"fehlerchen"} width={1000} height={1000} responsive style={{objectFit: "contain", height: "100px", width: "auto"}} />
                            </div>
                        </div>
                        <div>
                            <p>
                                Diese Seite verwendet Cookies Wir verwenden Cookies. Bei Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Diese werden zur Nutzung und Verbesserung der Nutzeroberflöche verwendet.
                            </p>
                        </div>
                    </div>
                    <div style={{width: "80%", margin: "auto"}}>
                        <Button variant="contained" style={{width: "100%", backgroundColor: "green", margin: "0.5rem 0rem 0.5rem 0rem"}}>Zustimmen und weiter</Button>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Link href={"/"} style={{textDecoration: "none"}}>Ablehnen</Link>
                            <Link href={"/"} style={{textDecoration: "none"}}>Impressum</Link>
                            <Link href={"/"} style={{textDecoration: "none"}}>Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cookie