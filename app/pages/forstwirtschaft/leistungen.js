import Background from "@/comp/design/background";
import ImageContainer from "@/comp/design/imagecontainer";
import Subtext from "@/comp/design/subtext";
import Subtitel from "@/comp/design/subtitle";
import Titel from "@/comp/design/title";
import Videocontainer from "@/comp/design/videocontainer";
import Stichpunkte from "@/comp/design/stichpunkte";
import Link from "next/link";

const Leistungen = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Leistungen"}/>
        <Subtitel variant={"left"} text="Das bieten wir an:"/>
        <ImageContainer src={"/pictures/rueckewagenzange.jpg"}  alt={"Rückewagen im Wald. Zu sehen ist die Zange des John Deere 1110 der Baumstämme hochhebt"} />
        <Subtext variant={"white"} text={<>Wir haben uns insbesondere auf die Holzrückung spezialisiert. Wir rücken für Sie: </>} />
        <Stichpunkte arr={["Energieholz", "Langholz", "Kurzholz"]} variant={"white"}/>
        <Subtext variant={"white"} text={<>Dank unseres <Link href={"/forstwirtschaft/fuhrpark"} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Maschinenparks</Link> und unserer Ausrüstung können wir das Rückeverfahren optimal an die Wetterbedingungen und der Bodenbeschaffenheit anpassen. Je nach Bedarf setzen wir Moorbänder oder Gleitschutzketten ein, um besonders bodenschonend und effizient zu arbeiten, selbst in steilen Hanglagen.</>} />
        <Videocontainer linkhref={"https://statischerbucket.s3.eu-central-1.amazonaws.com/VideovomHolzruecken.mp4"} color={"#4E9940"} variant="Hochkant"/>
        <Background variant={"green"}>
            <Subtitel variant={"right"} text="Weitere Dienstleistungen:"  background={"green"}/>
            <Subtext variant={"green"} text={<>Zusätzlich zum Holzrücken bieten wir in Kooperation mit <Link href={"http://www.energieholz-strobel.de/"} style={{ color: "white", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Simon Strobel</Link> weitere forstbezogene Dienstleistungen an. Dazu zählen unter anderem:</>}/>
            <Stichpunkte arr={["Vollmechanisierte Jungbestandspflege", "Lichtraumprofilschnitt (bis 10 Meter Höhe)", "Obstplantagenrodung (mit Wurzelstockentsorgung)", "Ankauf und Vermarktung von Energieholz", "Durchforstungmaßnahmen mit Kleinharvester", "Auf Wunsch Holzvermarktung durch regionale Abnehmer"]} variant={"green"}/>
            <Subtext variant={"green"} text={<>Weitere Informationen darüber finden Sie unter <Link href={"http://www.energieholz-strobel.de/"} style={{ color: "white", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Energieholz-strobel.de</Link> .</>}/>
        </Background>
    </> );
}
 
export default Leistungen;