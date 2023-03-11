
import Titel from "../../comp/design/title"
import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import Background from "../../comp/design/background";
import Dropdown from "../../comp/design/dropdown";

const Photovoltaik = () => {
    
    
    
    return ( 
        <>
            <Titel variant={"bigcenter"} text={"Photovoltaik"}/>
            <Subtitel  text={"Aserbaidschan ist schön"} variant={"left"} background={"whiteblue"}/>
            <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
            <Background variant={"blue"}>
                <Subtitel background={"blue"} text={"Albanien ist schön"} variant={"right"}/>
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