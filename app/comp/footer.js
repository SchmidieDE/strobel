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
            title: "Über uns",
            sublinks: [{href: "/", name:"Über uns"}]
        },
        {
            title: "Forstwirtschaft",
            sublinks: [
                {href: "/forstwirtschaft/fuhrpark", name:"Fuhrpark"},
                {href: "/forstwirtschaft/fuhrpark#JohnDeere", name:"John Deere"},
            ]
        },
        {
            title: "Photovoltaik",
            sublinks: [
                {href: "/photovoltaik/index", name:"Photovoltaik"},
                {href: "/photovoltaik/technik", name:"Reinigungstechnik"},
                {href: "/photovoltaik/leistungen#JohnDeere", name:"Leistungen"},
            ]
        }
    ]


    //#A9D19A
    //#74A24C
    //#04245C
    //#4E9940
    return (
        <>
        <footer>
            {
            (router.pathname.includes("forstwirtschaft")) ?
            <div>
                <Subtitel text={"Häufig gefragt"} variant={"left"}  />
                <Dropdown variant={"green"} title="as" text="as"></Dropdown>
            </div>
            :
            <div>
                <Subtitel text={"Häufig gefragt"} variant={"left"} background={"whiteblue"} />
                <Dropdown variant={"blue"} title="Wie teuer ist die Reinigung?" text="as"></Dropdown>
                <Dropdown variant={"blue"} title="Werden Reinigungsmittel eingesetzt?" text="as"></Dropdown>
                <Dropdown variant={"blue"} title="Kann ich das nicht selber machen?" text="Herkömmliche Haushaltsmittel und falsche Reiniger können die Oberfläche Ihrer Anlage beschädigen und den Garantieanspruch erlöschen lassen. Spezielle Reinigungsgeräte für den Privatgebrauch sind zudem meist nicht rentabel. Eine schonende Reinigung, um Kratzer und Beschädigungen zu vermeiden, erfordert spezialisierte Technik, passende Reinigungsmittel und Erfahrung."></Dropdown>
                <Dropdown variant={"blue"} title="Wie oft muss eine PV-Anlage gereinigt werden?" text="as"></Dropdown>
            </div>
            }
            <div style={{backgroundColor: "#C1DBB6", paddingTop: "1rem", paddingBottom: "1rem", width: "100%", marginTop: "6rem"}}>
                <div style={{width: "90%", margin: "auto"}}>
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
                            <Link href={"mailto:hannes-strobel@gmx.com"} style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <AlternateEmailIcon sx={{color: "white", marginRight: "0.3rem"}}/>hannes-strobel@gmx.com
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://goo.gl/maps/YdvZUUDbqwaGnCZ88"} style={{textDecorationThickness: "1px",textUnderlineOffset: "5px", color: "white", display: "flex", alignItems: "center", marginBottom: "1rem", fontSize: "1.2rem"}}>
                                <LocationOnIcon sx={{color: "white", marginRight: "0.3rem"}}/>Peter & Hannes Strobel GBR<br/>Im Wiesengrund 3<br/>88361 Eichstegen<br/>
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
            <div style={{backgroundColor: "#4E9940", display: "flex", justifyContent: "space-between", width: "100%", padding: "1rem", paddingTop: "1.2rem", paddingBottom: "1.2rem"}}>
                <Link style={{textDecoration: "none", color: "white", fontWeight: "800", fontSize: "0.9em"}} href={"/"}>© {new Date().getFullYear()} PHStrobel.de</Link>
                <Link style={{textDecoration: "none", color: "white", fontWeight: "500", fontSize: "0.9em"}} href={"/impressum"}>Impressum</Link>
                <Link style={{textDecoration: "none", color: "white", fontWeight: "500", fontSize: "0.9em"}} href={"/datenschutz"}>Datenschutz</Link>
            </div>
        </footer>
        </>
    )
}

export default Footer