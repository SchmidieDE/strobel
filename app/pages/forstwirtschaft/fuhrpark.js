import Titel from "/comp/design/title";
import Subtext from "./../../comp/design/subtext";
import Subtitel from "./../../comp/design/subtitle";
import Background from "@/comp/design/background";
import Stichpunkte from "@/comp/design/stichpunkte";
import ImageContainer from "@/comp/design/imagecontainer";


import Head from 'next/head'

const Fuhrpark = () => {


    return (
        <>
        <Head>
            <title key="title">Fuhrpark - John Deere Forwarder & Bagger | Strobel GbR</title>
            <meta name="description" content="John Deere 810E & 1110D Forwarder, Hitachi ZX-55U Kompaktbagger zur Vermietung, Scania R410 Transporter. Unser Maschinenpark im Detail." key="description" />
            <link rel="canonical" href="https://www.photovoltaikreinigung-oberschwaben.de/forstwirtschaft/fuhrpark" />
            <meta property="og:title" content="Fuhrpark - John Deere Forwarder & Bagger | Strobel GbR" />
            <meta property="og:description" content="John Deere 810E & 1110D Forwarder, Hitachi ZX-55U Kompaktbagger zur Vermietung." />
            <meta property="og:url" content="https://www.photovoltaikreinigung-oberschwaben.de/forstwirtschaft/fuhrpark" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="de_DE" />
        </Head>
        <Titel variant={"bigcenter"} text={"Fuhrpark"}/>
        <Subtitel text={"John Deere 810E Forwarder"} variant={"left"}/>
        <ImageContainer src={"/pictures/rueckewagenseitlich.jpg"} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} priority={true} />
        <Subtext variant={"white"} text={"Der John Deere 810E Forwarder ist ein leichter Rückezug, der speziell für den Einsatz im Wald entwickelt wurde. Der 4-Zylinder-Motor mit 136 PS und 4,5 Liter Hubraum bietet ausreichend Leistung, auch bei schwierigem Gelände. Dank der Moorbänder kann die Holzernte auch auf schlammigen, nassen Böden durchgeführt werden."} />
        <Stichpunkte arr={["Leistung: 136 PS)", "Gewicht: 14.000 kg", "Ladekapazität: 11 Fm","Bereifung: 710/40-22.5", "Kran mit Ausleger von 10 Meter"]} variant={"white"}/>
        <Background variant={"green"}>
            <Subtitel text={"John Deere 1110D Forwarder"} variant={"right"} background={"green"}/>
            <ImageContainer src={"/pictures/JohnDeere1110D Forwarder.jpeg"} width={4032} height={2268} alt={"John Deere 1110D Rückewagen im Wald im Einsatz"} />    
            <Subtext variant={"green"} text={"Der John Deere 1110D Forwarder ist ein leistungsstarker Rückezug mit einem 6-Zylinder-Motor und einer Ladekapazität von bis zu 15 Fm. Im Gegensatz zum John Deere 810E Forwarder wird der 1110D Forwarder im stärkeren Holz eingesetzt, da diese Maschine über leistungsstärkere Komponenten verfügt, um das Holz aus dem Wald zu transportieren."}/>
            <Stichpunkte arr={["Leistung: 180 PS", "Gewicht: 16.000 kg", "Ladekapazität: 15 Fm", "Bereifung: 710/45-26.5", "Kran mit Ausleger von 8.5 Meter"]} variant={"green"}/>
        </Background>
        <Subtitel text={"Hitachi Zaxis 55 U Kompaktbagger"} variant={"right"}/>
        <ImageContainer src={"/pictures/Kompaktbagger-hitachi-ZX-55U.jpeg"} width={1000} height={450} alt={"Hitachi ZX-55U Kompaktbagger"} />
        <Subtext variant={"white"} text={<><strong>Dieser Kompaktbagger kann gemietet werden!</strong><br/><br/>Der Hitachi Zaxis 55U  ist ein vielseitiger Kompaktbagger, der sich für verschiedene Einsatzbereiche eignet. Mit einem Betriebsgewicht von 5,6 Tonnen und einer Motorleistung von 29,1 kW bietet er genügend Leistung für kleinere Baustellen.</>} />
        <Stichpunkte arr={["Leistung: 29,1kW (39 PS)", "Gewicht: 5,6 Tonnen", "Grabtiefe: 3.6m", "Breite/Höhe: 1.98 x 2.5 Meter"]} variant={"white"}/>
        <Subtext variant={"white"} text={<>Dank seines Kurzhecks ist der Hitachi Zaxis 55 U besonders für Tiefbauarbeiten wie den Aushub von Gräben, das Verlegen von Kabeln und Rohren, sowie für den Bau von Fundamenten oder Terrassen geeignet.</>} />
        <Subtitel text={"Scania R410 Forstmaschinentransporter"} variant={"left"}/>
        <ImageContainer src={"/pictures/ScaniaForstmaschinentransporter.jpeg"} width={1599} height={899} alt={"Scania R410 Forstmaschinentransporter"} />
        <Subtext variant={"white"} text={"Für den flexiblen Transport unserer Forstmaschinen zum Einsatzort, nutzen wir den Scania R410 Transporter."} />
        <Stichpunkte arr={["Leistung: 410 PS"]} variant={"white"}/>
    </> );
}
 
export default Fuhrpark;