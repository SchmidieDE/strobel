import Titel from "/comp/design/title";
import Subtext from "./../../comp/design/subtext";
import Subtitel from "./../../comp/design/subtitle";
import Background from "@/comp/design/background";
import Stichpunkte from "@/comp/design/stichpunkte";
import ImageContainer from "@/comp/design/imagecontainer";


const Fuhrpark = () => {
    
    
    return ( 
        <>
        <Titel variant={"bigcenter"} text={"Fuhrpark"}/>
        <Subtitel text={"John Deere 810E"} variant={"left"}/>
        <ImageContainer src={"/pictures/rueckewagenseitlich.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />
        <Subtext variant={"white"} text={"Der John Deere 810 E Forstschlepper ist ein leistungsstarker Rückewagen, der speziell für den professionellen Einsatz im Wald entwickelt wurde. Der 6-Zylinder-Motor mit 290PS sorgt für ausreichend Leistung auch bei schwierigem Gelände mit schwerer Ladung. Dank seiner robusten Waldketten und großen Bodenfreiheit bietet der Schlepper eine hervorragende Traktion und Stabilität auf unebenem Gelände."} />
        <Stichpunkte arr={["212kW (290 PS)", "Gewicht: 22.000 kg", "Nutzlast: 12.000 kg", "Ladekapazität: 14.5 m³"]} variant={"white"}/>
        <Background variant={"green"}>
            <Subtitel text={"John Deere 1110D"} variant={"right"} background={"green"}/>
            <ImageContainer src={"/pictures/rueckewagenseitlich.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />    
            <Subtext variant={"green"} text={"Der John Deere 1110D ist ein leistungsstarker Forstschlepper mit einem 6-Zylinder-Motor und einer Ladekapazität von 12.2 m³. Im Gegensatz zum John Deere 810 E verfügt der 1110D über eine Bereifung anstelle von Ketten, was eine höhere Geschwindigkeit auf befestigten Straßen ermöglicht. Mit einem hydraulisch betriebenen Kran und Greifer kann der Schlepper leicht Holz aus dem Wald transportieren."}/>
            <Stichpunkte arr={["200kW (268 PS)", "Gewicht: 18.000 kg", "Ladekapazität: 12,2 m³", "Fünffachausleger-Kran mit 10 Meter Reichweite", "Bereifung: 710/45-26,5"]} variant={"green"}/>
        </Background>
        <Subtitel text={"Scania Forstmaschinen"} variant={"left"}/>
        <ImageContainer src={"/pictures/rueckewagenzangenah.jpg"} width={1600} height={1205} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />
        <Subtext text={"asa"} />
        <Stichpunkte arr={["Punkt1", "300PS", "Ketten"]} variant={"white"}/>
        <Subtitel text={"Hitachi 55 U Kompaktbagger"} variant={"right"}/>
        <Subtext variant={"white"} text={"Der Hitachi 55 U Kompaktbagger ist ein vielseitiger Bagger, der sich für verschiedene Einsatzbereiche eignet. Mit einem Betriebsgewicht von 5,6 Tonnen und einer Motorleistung von 29,1 kW bietet er eine starke Leistung und Effizienz in kleineren Baustellen oder engen Räumen."} />
        <Stichpunkte arr={["29,1kW (39 PS)", "5,6 Tonnen", "Grabtiefe: 3.6m", "Reichweite: 6m", "Breite/Höhe: 1.98 und 2.5 Meter"]} variant={"white"}/>
        <Subtext variant={"white"} text={"Dank seiner kompakten Größe und seiner hohen Manövrierfähigkeit ist der Hitachi 55 U besonders für Tiefbauarbeiten wie den Aushub von Gräben, das Verlegen von Kabeln und Rohren, sowie für den Bau von Fundamenten oder Terrassen geeignet. Er kann auch für Abbrucharbeiten und kleinere Abrissarbeiten eingesetzt werden."} />
        
    </> );
}
 
export default Fuhrpark;