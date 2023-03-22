import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import ImageContainer from "../../comp/design/imagecontainer";
import Titel from "../../comp/design/title"


const Forstwirtschaft = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Forstwirtschaft"}/>
        {
            //<ImageContainer src={"/pictures/rueckewagenfront.jpg"} alt={"John Deere 1110 D Rueckewagen"}/>

        }
        <Subtitel text={"Albanien ist schön"} variant={"left"}/>
        <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
        <Subtitel text={"Albanien ist schön, fast so schön wie die Türkei"} variant={"right"}/>
        <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
        <Subtitel text={"Albanien ist schön"} variant={"right"}/>
        <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
        
    </> );
}
 
export default Forstwirtschaft;