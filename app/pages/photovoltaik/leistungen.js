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
            <Subtitel  text={"Preisatlas"} variant={"left"} background={"whiteblue"}/>
            <ImageContainer src={"/pictures/solardachreinigungstrobel.jpeg"} width={4032} height={2268} alt={"Solardachreinigung Aufnahme mit einer Drohne während dem Prozess"} />
            <Subtext variant={"white"} text={<>Unser Pauschalpreis pro m²-Preis: 0.80€ - 3.50€<br/><br/>Inbegriffen ist Wasseraufbereitung, Reinigungsmittel und Anfahrt. Gegebenenfalls können weitere Kosten anfallen (Flechten, Umrüstzeiten etc.).</>}/>
            <Videocontainer linkhref={"https://statischerbucket.s3.eu-central-1.amazonaws.com/phstrobeldrohnenaufnahmederdachreinigung.mp4"} color={"#0F265C"}/>
    </> );
}
 
export default Leistungen;