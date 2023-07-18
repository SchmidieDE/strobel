
import Background from "@/comp/design/background";
import ImageContainer from "@/comp/design/imagecontainer";
import Stichpunkte from "@/comp/design/stichpunkte";
import Subtext from "@/comp/design/subtext";
import Subtitel from "@/comp/design/subtitle";
import Titel from "@/comp/design/title";

const Technik = () => {

    return ( <>
        <Titel variant={"bigcenter"} text={"Technik"}/>
        <Subtitel  text={"MKG Langarmkran 401"} variant={"left"} background={"whiteblue"}/>
        <ImageContainer src={"/pictures/solardachreinigungstrobel.jpeg"} width={4032} height={2268} alt={"Solardachreinigung Aufnahme mit einer Drohne während dem Prozess"} />
        <Subtext variant={"white"} text={"Seit 2023 setzen wir den MAN MKG 401 Langarmkram mit einer spezalisierten Solarwaschbürste bei unserer Reinigung ein. Dieser zeichnet sich durch eine hohe Arbeitsbreite der Bürste, große Reichweite und Wendigkeit des Krans, als auch der schnellen Einsatzbereitschaft aus."}/>
        <Stichpunkte variant={"white"} arr={["Kran ist 360° drehbar", "Kran hat eine Höhe von bis zu 20 Meter", "Arbeitsbreite der Bürste von 5 Meter", "Kein Betreten des Dachs oder Module", "Schnelle und sichere Reinigung (BG konform)"]}/>
        <Background variant={"blue"}>
            <Subtitel background={"blue"} text={"Sunbrush Mobil"} variant={"right"}/>
            <Subtext variant={"blue"} text={"Bei Anlagen, welche schwer zugänglich sind oder eine ungewöhnliche Anordnung haben, setzen wir eine kleine, aber besonders agile Sunbrush Mobil Solarwaschbürste ein. Dadurch können wir sicherstellen, dass selbst schwer erreichbare Bereiche der Anlagen gereinigt werden können und keine Verschmutzung zurückbleibt, welche die Leistung eines Solarstrings reduzieren könnte."}/>      
            <Stichpunkte variant={"blue"} arr={["Reinigung von schwer zugänglichen Stellen", "Agil und Flexibel für allerlei Anlagen", "Betreten des Dachs notwendig" ]}/>
        </Background>
    </> );
}
 
export default Technik