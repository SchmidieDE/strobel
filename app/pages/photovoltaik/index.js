
import Titel from "../../comp/design/title"
import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import Background from "../../comp/design/background";

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
        </>
     );
}
 
export default Photovoltaik;