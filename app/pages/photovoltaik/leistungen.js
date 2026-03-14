import Background from "@/comp/design/background";
import ImageContainer from "@/comp/design/imagecontainer";
import Stichpunkte from "@/comp/design/stichpunkte";
import Subtext from "@/comp/design/subtext";
import Subtitel from "@/comp/design/subtitle";
import Titel from "@/comp/design/title";
import Videocontainer from "@/comp/design/videocontainer";

import imgSolardach from "../../public/pictures/solardachreinigungstrobel.webp";

import Head from 'next/head'

const Leistungen = () => {


    return ( <>
            <Head>
                <title key="title">Leistungen & Preise Photovoltaikreinigung | Strobel GbR</title>
                <meta name="description" content="PV-Reinigung ab 0,80€/m². Inklusive Wasseraufbereitung, Reinigungsmittel und Anfahrt. Preisübersicht und Drohnenaufnahme unserer Arbeit." key="description" />
                <link rel="canonical" href="https://www.photovoltaikreinigung-oberschwaben.de/photovoltaik/leistungen" />
                <meta property="og:title" content="Leistungen & Preise Photovoltaikreinigung | Strobel GbR" />
                <meta property="og:description" content="PV-Reinigung ab 0,80€/m². Inklusive Wasseraufbereitung, Reinigungsmittel und Anfahrt." />
                <meta property="og:url" content="https://www.photovoltaikreinigung-oberschwaben.de/photovoltaik/leistungen" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="de_DE" />
            </Head>
            <Titel variant={"bigcenter"} text={"Leistungen"}/>
            <Subtitel  text={"Preisatlas"} variant={"left"} background={"whiteblue"}/>
            <ImageContainer src={imgSolardach} alt={"Solardachreinigung Aufnahme mit einer Drohne während dem Prozess"} priority={true} />
            <Subtext variant={"white"} text={<>Unser Pauschalpreis pro m²-Preis: 0.80€ - 3.50€<br/><br/>Inbegriffen ist Wasseraufbereitung, Reinigungsmittel und Anfahrt. Gegebenenfalls können weitere Kosten anfallen (Flechten, Umrüstzeiten etc.).</>}/>
            <Videocontainer linkhref={"https://statischerbucket.s3.eu-central-1.amazonaws.com/phstrobeldrohnenaufnahmederdachreinigung.mp4"} color={"#0F265C"}/>
    </> );
}
 
export default Leistungen;