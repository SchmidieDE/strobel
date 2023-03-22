
import Titel from "../../comp/design/title"
import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import Background from "../../comp/design/background";
import Dropdown from "../../comp/design/dropdown";
import Stichpunkte from "../../comp/design/stichpunkte";

const Photovoltaik = () => {
    
    // Saubere PV-Anlagen, hohe Renditen – wir wissen, wie man beides erreicht!
    // Wir sind Ihre Lösung für eine saubere und rentable PV-Anlage!
    // Saubere PV-Anlagen, hohe Renditen – lassen Sie uns Ihnen helfen, beides zu erreichen!

    return ( 
        <>
            <Titel variant={"bigcenter"} text={"Wir bringen Ihre PV-Anlage auf Höchstleistung!"}/>
            <Subtitel  text={"Warum reinigen?"} variant={"left"} background={"whiteblue"}/>
            <Subtext variant={"white"} text={"Durch die Reinigung Ihrer Photovoltaikanlage können Sie nicht nur die Leistung um 30% erhöhen, sondern auch die Lebensdauer der Module verlängern."}/>
            <Subtext variant={"white"} text={`Dadurch das die Anlage seit der Installation von Natur- und Umwelteinflüssen ausgesetzt war - das oftmals über Jahrzehnte, hat sich deren Leistung deutlich reduziert. Grund dafür ist:`}/>
            <Stichpunkte arr={["Vogelkot","Pollen und Blüten", "Laub und Baumnadeln", "Staub und Rückstände durch Viehaltung oder Verkehr", "Rückstände von Regen und Schnee"]}  variant={"white"}/>
            <Subtext variant={"white"} text={`Bei einem optimalen Neigungswinkel von 30 bis 35 Grad bleibt in der Regel weder Laub noch Schnee auf der PV-Anlage liegen. Allerdings können Umweltverschmutzung und Vogelkot dazu führen, dass die Anlage gereinigt werden muss. Insbesondere der Bereich zwischen Glas und Rahmen ist anfällig für Schmutzansammlungen und das Wachstum von Moos. Vernachlässigt man die regelmäßige Reinigung der Solaranlage, führt dies zu einer Verringerung des Wirkungsgrades, da weniger Sonnenlicht durch die Schmutzschicht gelangen kann. Zusätzlich beugt die Reiningung der Anlage Störungen der Anlage vor (Kurzschluss etc.)`}/>
            <Background variant={"blue"}>
                <Subtitel background={"blue"} text={"Ihre Vorteile"} variant={"left"}/>
                <Stichpunkte variant={"blue"} arr={["Steigerung Ihrer Erträge bis zu 30%", "Reinigungskosten sind auch für Privathaushalte von der Steuer absetzbar", "Hochwertige und sichere maschinelle Reinigung", "Kein Betreten der Modulflächen", "Spezialisiertes Reinigungsmittel für Module", "Erhöht die Nutzungsdauer der Anlage"]}/>
                <Subtitel background={"blue"} text={"Was macht uns aus?"} variant={"right"}/>
                <Subtext variant={"blue"} text={"Wir reinigen bereits seit 2012 professionell Photovoltaik- und Solaranlagen. Nach mehr als einem Jahrzehnt, haben wir nicht nur eine hohe Expertise rund um die Reinigung angehäuft, sondern auch es geschafft durch neuste Technik von spezialisierten Herstellern uns als Branchenvorreiter in der Region Oberschwaben herauszukristallisieren."}/>      
            </Background>
        </>
     );
}
 
export default Photovoltaik;