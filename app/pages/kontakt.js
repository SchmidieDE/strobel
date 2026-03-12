import { Button } from "@mui/material";
import Image from "next/image";
import Subtitel from "../comp/design/subtitle";
import Subtext from "../comp/design/subtext";
import Titel from "../comp/design/title";
import Link from "next/link";
import Head from "next/head";

const Kontakt = () => {
    return ( <>
            <Head>
                <title key="title">Kontakt - Strobel GbR Eichstegen</title>
                <meta name="description" content="Kontaktieren Sie uns per Telefon, WhatsApp oder E-Mail. Mo-Fr 8-19 Uhr, Sa 8-15 Uhr. Im Wiesengrund 3, 88361 Eichstegen." key="description" />
                <link rel="canonical" href="https://www.photovoltaikreinigung-oberschwaben.de/kontakt" />
                <meta property="og:title" content="Kontakt - Strobel GbR Eichstegen" />
                <meta property="og:description" content="Kontaktieren Sie uns per Telefon, WhatsApp oder E-Mail. Mo-Fr 8-19 Uhr, Sa 8-15 Uhr." />
                <meta property="og:url" content="https://www.photovoltaikreinigung-oberschwaben.de/kontakt" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="de_DE" />
            </Head>
            <Titel variant={"bigcenter"} text={"Kontakt"}/>
            <Subtext variant={"white"} text={"Wir freuen uns über Ihr Intersse an unseren Leistungen in den Bereichen Forstwirtschaft und Solarreinigung. Unser Team steht gerne für Fragen, Anregungen oder individuelle Angebote zur Verfügung. Wir sind stets bemüht Ihre Anfragen schnell und kompetent zu beantworten, um Ihnen bestmögliche Unterstützung zu bieten."}/>
            <Subtitel text={"In Kontakt treten"} variant={"left"}/>
            <Subtext variant={"white"} text={<>Wenn Sie uns kontaktieren möchten, können Sie dies entweder per <Link href={"tel:491708083239"} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Telefon</Link>, <Link href={"mailto:hannes-strobel@gmx.de"} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Email</Link> oder <Link href={"https://api.whatsapp.com/send?phone=491708083239&text=&source=&data="} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Whatsapp</Link> tun. Wir bemühen uns Ihre Anfrage schnellstmöglich zu beantworten.</>}/>
            <Subtitel text={"Öffnungszeiten"} variant={"right"}/>
            <Subtext variant={"white"} text={"Wir sind von Montag bis Freitag von 8-19 Uhr, und Samstags von 8-15 Uhr erreichbar."}/>
            <Subtitel text={"Anfahrt"} variant={"left"}/>
            <Subtext variant={"white"} text={"Unser Unternehmen ist im schönen Eichstegen, ansässig, nicht weit weg von Altshausen."}/>
            <Subtext variant={"white"} text={"Wir freuen uns auf Ihre Anfrage und werden uns umgehend mit Ihnen in Verbindung setzen."}/>
            
    </> );
}
 
export default Kontakt;