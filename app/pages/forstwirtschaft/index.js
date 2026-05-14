import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import ImageContainer from "../../comp/design/imagecontainer";
import Titel from "../../comp/design/title"
import Link from "next/link";
import Head from "next/head";

import imgHolzhaufen from "../../public/pictures/Holzhaufen.webp";


const Forstwirtschaft = () => {


    return ( <>
        <Head>
            <title key="title">Forstwirtschaft - Holzrückung seit 1950 | Strobel GbR</title>
            <meta name="description" content="Bodenschonende Holzrückung in Oberschwaben mit John Deere Forwarder. Energieholz, Kurzholz und Maschinenvermietung. Seit 1950." key="description" />
            <link rel="canonical" href="https://www.photovoltaikreinigung-oberschwaben.de/forstwirtschaft" />
            <meta property="og:title" content="Forstwirtschaft - Holzrückung seit 1950 | Strobel GbR" />
            <meta property="og:description" content="Bodenschonende Holzrückung in Oberschwaben mit John Deere Forwarder." />
            <meta property="og:url" content="https://www.photovoltaikreinigung-oberschwaben.de/forstwirtschaft" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="de_DE" />
            <meta name="twitter:title" content="Forstwirtschaft - Holzrückung seit 1950 | Strobel GbR" />
            <meta name="twitter:description" content="Bodenschonende Holzrückung in Oberschwaben mit John Deere Forwarder." />
        </Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Holzrückung",
                    "name": "Holzrückung & Forstwirtschaft Oberschwaben",
                    "description": "Bodenschonende Holzrückung mit John Deere 810E und 1110D Forwarder, Energieholz und Kurzholz. Familientradition seit 1950 in Oberschwaben.",
                    "provider": { "@id": "https://www.photovoltaikreinigung-oberschwaben.de/#org" },
                    "areaServed": [
                        { "@type": "AdministrativeArea", "name": "Oberschwaben" },
                        { "@type": "AdministrativeArea", "name": "Baden-Württemberg" }
                    ],
                    "url": "https://www.photovoltaikreinigung-oberschwaben.de/forstwirtschaft",
                    "category": "Forestry Service"
                })
            }}
        />
        <Titel variant={"bigcenter"} text={"Forstwirtschaft"}/>
        <ImageContainer src={imgHolzhaufen} alt={"Holzhaufen aus gerücktem Holz im Wald nach Forstarbeit"} priority={true} />
        <Subtitel text={"Wir pflegen Ihren Wald"} variant={"left"}/>
        <Subtext variant={"white"} text={<>Seit 1950 sind wir Ihr verlässlicher Partner im Bereich der Holzrückung. Dabei setzen wir besonders auf eine bodenschonende, nachhaltige und effiziente Holzernte. <br/><br/>Um Ihnen ein ganzheitliches Angebot zu präsentieren, kooperieren wir eng mit dem Forstunternehmen <Link href={"http://www.energieholz-strobel.de/"} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Simon Strobel</Link> zusammen, das weitere Dienstleistungen rund um den Wald bietet.<br/><br/>Kontaktieren Sie uns einfach über <Link href={"https://api.whatsapp.com/send?phone=491708083239&text=&source=&data="} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Whatsapp</Link> und profitieren Sie von unserer langjährigen Expertise.</>} />
       
       
        
    </> );
}
 
export default Forstwirtschaft;