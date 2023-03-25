import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import ImageContainer from "../../comp/design/imagecontainer";
import Titel from "../../comp/design/title"


const Forstwirtschaft = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Forstwirtschaft"}/>
        <ImageContainer src={"/pictures/Holzhaufen.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />
        
        
    </> );
}
 
export default Forstwirtschaft;