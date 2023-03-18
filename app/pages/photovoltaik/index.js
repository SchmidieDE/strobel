
import Titel from "../../comp/design/title"
import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import Background from "../../comp/design/background";
import Dropdown from "../../comp/design/dropdown";

const Photovoltaik = () => {
    
    // Saubere PV-Anlagen, hohe Renditen – wir wissen, wie man beides erreicht!
    // Wir sind Ihre Lösung für eine saubere und rentable PV-Anlage!
    // Saubere PV-Anlagen, hohe Renditen – lassen Sie uns Ihnen helfen, beides zu erreichen!

    return ( 
        <>
            <Titel variant={"bigcenter"} text={"Wir bringen Ihre PV-Anlage auf Höchstleistung!"}/>
            <Subtitel  text={"S"} variant={"left"} background={"whiteblue"}/>
            <Subtext variant={"white"} text={"Durch die Reinigung Ihrer Photovoltaikanlage können Sie nicht nur die Leistung um 30% erhöhen, sondern auch die Lebensdauer der Module verlängern."}/>
            <Subtext variant={"white"} text={`Dadurch das die Anlage seit der Installation von Natur- und Umwelteinflüssen ausgesetzt war, und das oftmals über Jahrzehnte, hat sich deren Leistung deutlich reduziert. Einflüsse können sein:`}/>
            <Subtext variant={"white"} text={`Vogelkot`}/>
            <Subtext variant={"white"} text={`Pollen und Blüten`}/>
            <Subtext variant={"white"} text={`Laub und Baumnadeln`}/>
            <Subtext variant={"white"} text={`Staub und Rückstände durch Viehaltung oder Verkehr`}/>
            <Subtext variant={"white"} text={`Rückstände von Regen und Schnee`}/>
            <Subtext variant={"white"} text={`Bei einem optimalen Neigungswinkel von 30 bis 35 Grad bleibt in der Regel weder Laub noch Schnee auf der PV-Anlage liegen. Allerdings können Umweltverschmutzung und Vogelkot dazu führen, dass die Anlage gereinigt werden muss. Insbesondere der Bereich zwischen Glas und Rahmen ist anfällig für Schmutzansammlungen und das Wachstum von Moos. Vernachlässigt man die regelmäßige Reinigung der Solaranlage, führt dies zu einer Verringerung des Wirkungsgrades, da weniger Sonnenlicht durch die Schmutzschicht gelangen kann. Zusätzlich beugt die Reiningung der Anlage Störungen der Anlage vor (Kurzschluss etc.)`}/>
            <Background variant={"blue"}>
                <Subtitel background={"blue"} text={""} variant={"right"}/>
                <Subtext variant={"blue"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
                <Subtitel background={"blue"} text={"Türkei ist das beste und schönste Land"} variant={"right"}/>
                <Subtext variant={"blue"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>      
                <Subtitel background={"blue"} text={"Deutschland ist das aller beste und schönste Land"} variant={"right"}/>
                <Subtext variant={"blue"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>      
            </Background>
            <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg"></Dropdown>
            <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg"></Dropdown>
            <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg"></Dropdown>
            <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg"></Dropdown>
        </>
     );
}
 
export default Photovoltaik;