import Link from "next/link"
import Dropdown from "./design/dropdown";

import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Subtitel from "./design/subtitle";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Footer = () => {

    const router = useRouter()

    const FooterLinks = [
        {
            title: "Forstwirtschaft",
            sublinks: [
                {href: "/forstwirtschaft", name:"Forstwirtschaft"},
                {href: "/forstwirtschaft/fuhrpark", name:"Fuhrpark"},
                {href: "/forstwirtschaft/leistungen", name:"Leistungen"},
            ]
        },
        {
            title: "Photovoltaik",
            sublinks: [
                {href: "/photovoltaik", name:"Photovoltaik"},
                {href: "/photovoltaik/technik", name:"Reinigungstechnik"},
                {href: "/photovoltaik/leistungen", name:"Leistungen"},
                {href: "/photovoltaik/rechner", name:"Rechner"},
            ]
        },
        {
            title: "Kontakt",
            sublinks: [{href: "/kontakt", name:"Kontakt"}]
        },
        {
            title: "Über uns",
            sublinks: [{href: "/", name:"Über uns"}]
        },
    ]


    //#A9D19A
    //#74A24C
    //#04245C
    //#4E9940
    return (
        <>
        <footer>
            <div style={{maxWidth:"600px", margin: "auto"}}>
            {
            (router.pathname.includes("forstwirtschaft")) ?
            <div>
                <Subtitel text={"Häufig gefragt"} variant={"left"}  />
                <Dropdown variant={"green"} title="Welche forstwirtschafliche Dienstleistungen bieten wir an?" text={<>Wir haben uns insbesonere auf die Holzrückung spezialisiert.<br></br><br></br>Wenn Sie darüber hinaus Intersse an der Holzernte, Holzvermarktung etc. haben,  bieten wir Ihnen in enger Zusammenarbeit mit <Link href={"http://www.energieholz-strobel.de/"} style={{ color: "rgb(78, 153, 64)", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Simon Strobel</Link> noch weitere Dienstleistungen in diesem Bereich an. Weitere Informationen finden Sie unter <Link href={"forstwirtschaft/leistungen"} style={{ color: "rgb(78, 153, 64)", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Leistungen</Link>.</>}></Dropdown>
                <Dropdown variant={"green"} title="Welche Maschinen stehen zur Vermietung?" text={<>Wir vermieten unseren Kompaktbagger Hitachi Zaxis 55 U. Dieser eignet sich besonders für Tiefbauarbeiten wie den Aushub von Gräben, das Verlegen von Kabeln und Rohren, sowie für den Bau von Fundamenten oder Terrassen.<br></br><br></br>Weitere Informationen zum Bagger selbst erhalten Sie unter <Link href={"/forstwirtschaft/fuhrpark"} style={{ color: "rgb(78, 153, 64)", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Fuhrpark</Link> .</>}></Dropdown>
               
            </div>
            :
            <div>
                <Subtitel text={"Häufig gefragt"} variant={"left"} background={"whiteblue"} />
                <Dropdown variant={"blue"} title="In welchen Regionen sind wir tätig?" text={<>Wir sind in ganz Oberschwaben, als auch der Bodenseeregion tätig.<br/><br/>Dazu gehört unter anderem Ulm, Biberach, Memmingen, Ravensburg, Sigmaringen, Laupheim, Kempten, Leutkirch, Wangen und kleineren Ortschaften dazwischen.</>}></Dropdown>
                <Dropdown variant={"blue"} title="Wie teuer ist die Reinigung?" text={<>Die Kosten der Reinigung Ihrer Anlage ist von verschiedenen Faktoren, wie Standort, Größe der Anlage oder Zugänglichkeit abhängig. Unter der Seite <Link href={"/photovoltaik/leistungen"} style={{color: "#0F265C", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Leistungen</Link> erhalten Sie eine Übersicht unserer Leistungstabelle.<br/><br/>Bitte beachten Sie, dass die darin enthaltenen Preise nicht bindend sind, sondern ledeglich als Orientierungspunkt dienen.<br/><br/>Für eine genauere Auskunft, kontaktieren Sie uns am besten per WhatsApp oder Email.</>}></Dropdown>
                <Dropdown variant={"blue"} title="Werden Reinigungsmittel eingesetzt?" text={<>Wir verwenden SunBrush® Blue als Reinigungsmittel für Photovoltaikanlagen, um sicherzustellen, dass Ihre Anlage besonders gründlich und schonend gereinigt wird.<br/><br/>Wir haben uns für SunBrush® Blue entschieden, weil es nicht nur effektiv bei der Entfernung von Schmutz und Verunreinigungen ist, sondern auch umweltfreundlich und wirtschaftlich.<br/><br/>Die Kalk-Stopp-Formel des Reinigers stellt sicher, dass die Anlagen rückstandslos und fleckenfrei gereinigt werden und das ohne teure Entmineralisierung.<br/><br/>Darüber hinaus ist SunBrush® Blue biologisch abbaubar und für den Einsatz im Lebensmittelbereich zertifiziert, was bedeutet, dass es sicher und schonend für die Umwelt und die Anlagen ist. SunBrush® Blue ist ein Reinigungsmittel, welches speziell für Solaranlagen entwickelt wurde.</>}></Dropdown>
                <Dropdown variant={"blue"} title="Kann ich das nicht selber machen?" text={<>Herkömmliche Haushaltsmittel und falsche Reiniger können die Oberfläche Ihrer Anlage beschädigen.<br/><br/>Spezielle Reinigungsgeräte für den Privatgebrauch sind zudem meist nicht rentabel.<br/><br/>Eine schonende Reinigung, um Kratzer und Beschädigungen zu vermeiden, erfordert spezialisierte Technik, passende Reinigungsmittel und Erfahrung.</>}></Dropdown>
                <Dropdown variant={"blue"} title="Wie oft muss eine PV-Anlage gereinigt werden?" text={<>Das unterscheidet sich konkret an den Umwelteinflüssen, welche Ihre Anlage ausgesetzt ist.<br/> <br/> Photovoltaikanlagen auf landwirtschaftlichen Gebäuden, insbesondere bei Tierstallungen, sind am stärksten betroffen und benötigen meist eine jährliche Reinigung.<br></br> <br></br>Es wird empfohlen Anlagen auf Gewerbehallen, welche durch Produktionsabgase, Maschinenstaub und umliegende Industrieaktivitäten verschmutzt werden, alle 3 Jahre zu reinigen. <br></br><br></br>Im Gegensatz dazu sind PV-Anlagen auf Wohnhäusern weniger anfällig und bedürfen nur alle 4-8 Jahre einer Reinigung.</>}></Dropdown>
                {
                //<Dropdown variant={"blue"} title="Wie oft muss eine PV-Anlage gereinigt werden?" text={<>Das unterscheidet sich konkret an der Umweltbelastung, welcher Ihrer Anlage ausgesetzt ist.<br/> <br/> Es wird empfohlen bei Gewerbehallen, welche beispielsweise von starker Verschmutzung betroffen sind zmb. durch Industrie-, Flug-, oder Straßenverkehr, die Anlage mindestenst alle zwei Jahre zu reinigen.<br/> <br/>Insbesondere bei Tierstallungen wird die Reinigung jährlich empfohlen, da diese Anlagen besonders stark von Staub, Taubenkot und Dreck betroffen sind.</>}></Dropdown>
                }
            </div>
            }
            </div>
            <div style={{backgroundColor: "#C1DBB6", paddingTop: "1rem", paddingBottom: "1rem", width: "100%", marginTop: "6rem"}}>
                <div style={{width: "90%", margin: "auto", maxWidth: "600px"}}>
                    <div style={{backgroundColor: "#4E9940", borderRadius: "3vmin", padding: "1rem"}}>
                        <h2 style={{padding: "0px", textAlign: "center", margin:"0px", fontWeight: "800", color: "white", marginBottom: "1rem"}}>
                            Kontakt
                        </h2>
                        <div>
                            <Link href={"tel:491708083239"}style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <PhoneIcon sx={{color: "white", marginRight: "0.3rem"}}/>+49 170 8083239
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://api.whatsapp.com/send?phone=491708083239&text=&source=&data="} style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <WhatsAppIcon sx={{color: "white", marginRight: "0.3rem"}}/>+49 170 8083239
                            </Link>
                        </div>
                        <div>
                            <Link href={"mailto:hannes-strobel@gmx.de"} style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <AlternateEmailIcon sx={{color: "white", marginRight: "0.3rem"}}/>hannes-strobel@gmx.de
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://goo.gl/maps/YdvZUUDbqwaGnCZ88"} style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <LocationOnIcon sx={{color: "white", marginRight: "0.3rem"}}/>Peter & Hannes Strobel GbR<br/>Im Wiesengrund 3<br/>88361 Eichstegen<br/>
                            </Link>
                        </div>
                    </div>

                    {
                        FooterLinks.map((e, index) => {
                            const {sublinks, title} = e
                            return (
                                <div key={index}>
                                <h3 style={{fontSize: "1.2rem",margin: "0px", fontWeight: "800", color: "black", marginTop: "1.5rem", paddingLeft: "0.5rem"}}>{title}</h3>
                                <hr style={{border:"none",  borderTop: "3px solid #4E9940", marginTop: "0.2rem", marginBottom: "0.5rem", width: "100%", margin: "auto"}}/>
                                <ul style={{margin: "0px"}}>
                                {   
                                    
                                    sublinks.map((e, index) => {
                                        const {href, name} = e
                                        return (
                                        <li key={index}>   
                                            <Link style={{display: "block", paddingLeft: "0", marginTop: "0.2rem", marginBottom: "0.2rem", textDecoration: "none", color: "#04245C", fontWeight: "800", fontSize: "1.1rem"}} href={href}>{name}</Link>
                                        </li>
                                        )
                                    })
                                }
                                </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div style={{backgroundColor: "#4E9940", padding: "1rem", paddingTop: "1.2rem", paddingBottom: "3rem", width: "100%"}}>
                <div style={{maxWidth: "600px", display: "flex", justifyContent: "space-between", margin: "auto"}}>
                    <Link style={{textDecoration: "none", color: "white", fontWeight: "800", fontSize: "0.9em"}} href={"/"}>© {new Date().getFullYear()} PHStrobel.de</Link>
                    <Link style={{textDecoration: "none", color: "white", fontWeight: "500", fontSize: "0.9em"}} href={"/impressum"}>Impressum</Link>
                    <Link style={{textDecoration: "none", color: "white", fontWeight: "500", fontSize: "0.9em"}} href={"/datenschutz"}>Datenschutz</Link>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer