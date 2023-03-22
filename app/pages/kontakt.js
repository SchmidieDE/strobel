import { Button } from "@mui/material";
import Image from "next/image";
import Subtitel from "../comp/design/subtitle";
import Subtext from "../comp/design/subtext";
import Titel from "../comp/design/title";

const Kontakt = () => {
    return ( <>
            <Titel variant={"bigcenter"} text={"Kontakt"}/>
            <Subtext variant={"white"} text={"Wir freuen uns über Ihr Intersse an unseren Leistungen in den Bereichen Forstwirtschaft und Solarreinigung. Unser Team steht gerne für Fragen, Anregungen oder individuelle Angebote zur Verfügung. Wir sind stets bemüht Ihre Anfragen schnell und kompetent zu beantworten, um Ihnen bestmögliche Unterstützung zu bieten."}/>
            <Subtitel text={"In Kontakt treten"} variant={"left"}/>
            <Subtext variant={"white"} text={"Wenn Sie uns kontaktieren möchten, können Sie die entweder per Telefon, Email oder Whatsapp tun. Wir bemühen uns Ihre Anfrage schnellstmöglich zu beantworten."}/>
            <Subtitel text={"Öffnugungszeiten"} variant={"right"}/>
            <Subtext variant={"white"} text={"Wir sind von Montag bis Freitag von 8-19 Uhr, und Samstags von 8-15 Uhr erreichbar"}/>
            <Subtitel text={"Anfahrt"} variant={"left"}/>
            <Subtext variant={"white"} text={"Unser Unternehmen ist im schönen Eichstegen, ansäßig, nicht weit weg von Altshausen."}/>
            <Subtext variant={"white"} text={"Wir freuen uns auf Ihre Anfragen und werden uns umgehend mit Ihnen in Verbindung setzen."}/>
            
    </> );
}
 
export default Kontakt;