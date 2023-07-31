import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import ImageContainer from "../../comp/design/imagecontainer";
import Titel from "../../comp/design/title"


const Forstwirtschaft = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Forstwirtschaft"}/>
        <ImageContainer src={"/pictures/Holzhaufen.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />
        <Subtitel text={"Wir pflegen Ihren Wald"} variant={"left"}/>
        <Subtext variant={"white"} text={"Seit 1993 sind wir Ihr verlässlicher Partner im Bereich Holzrückung.  Holzrückung und setzen dabei konsequent auf bodenschonende und effiziente Verfahren. Um Ihnen ein ganzheitliches Angebot zu präsentieren, kooperieren wir eng mit dem Forstunternehmen Simon Strobel, das weitere Services rund um den Wald bietet. Gemeinsam mit Ihnen planen und realisieren wir nachhaltige Lösungen, die nicht nur Ihrem wirtschaftlichen Erfolg, sondern auch dem Schutz der Natur dienen. Kontaktieren Sie uns und profitieren Sie von unserer jahrelangen Expertise und dem Respekt für Mutter Natur."} />
       
       
        
    </> );
}
 
export default Forstwirtschaft;