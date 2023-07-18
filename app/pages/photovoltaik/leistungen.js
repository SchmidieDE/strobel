import Background from "@/comp/design/background";
import ImageContainer from "@/comp/design/imagecontainer";
import Stichpunkte from "@/comp/design/stichpunkte";
import Subtext from "@/comp/design/subtext";
import Subtitel from "@/comp/design/subtitle";
import Titel from "@/comp/design/title";
import Videocontainer from "@/comp/design/videocontainer";


const Leistungen = () => {
    
    
    return ( <>
         <Titel variant={"bigcenter"} text={"Leistungen"}/>
        <Subtitel  text={"Übersicht"} variant={"left"} background={"whiteblue"}/>
        <ImageContainer src={"/pictures/solardachreinigungstrobel.jpeg"} width={4032} height={2268} alt={"Solardachreinigung Aufnahme mit einer Drohne während dem Prozess"} />
        <Subtext variant={"white"} text={"Seit 2023 setzen wir den MAN MKG 401 Langarmkram mit einer spezalisierten Solarwaschbürste bei unserer Reinigung ein. Dieser zeichnet sich durch eine hohe Arbeitsbreite der Bürste, große Reichweite und Wendigkeit des Krans, als auch der schnellen Einsatzbereitschaft aus."}/>
        <Stichpunkte variant={"white"} arr={["Kran ist 360° drehbar", "Kran hat eine Höhe von bis zu 20 Meter", "Arbeitsbreite der Bürste von 5 Meter", "Kein Betreten des Dachs oder Module", "Schnelle und sichere Reinigung (BG konform)"]}/>
        <Subtitel  text={"Preisatlas"} variant={"left"} background={"whiteblue"}/>
        <Subtext variant={"white"} text={"Quadrameterpreis: "}/>
        <Videocontainer linkhref={"https://statischerbucket.s3.eu-central-1.amazonaws.com/phstrobeldrohnenaufnahmederdachreinigung.mp4"} color={"#0F265C"}/>
    </> );
}
 
export default Leistungen;