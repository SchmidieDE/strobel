import Subtitel from "../../comp/design/subtitle";
import Subtext from "../../comp/design/subtext";
import ImageContainer from "../../comp/design/imagecontainer";
import Titel from "../../comp/design/title"
import Link from "next/link";


const Forstwirtschaft = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Forstwirtschaft"}/>
        <ImageContainer src={"/pictures/Holzhaufen.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />
        <Subtitel text={"Wir pflegen Ihren Wald"} variant={"left"}/>
        <Subtext variant={"white"} text={<>Seit 1950 sind wir Ihr verlässlicher Partner im Bereich der Holzrückung. Dabei setzen wir besonders auf eine bodenschonende, nachhaltige und effiziente Holzernte. <br/><br/>Um Ihnen ein ganzheitliches Angebot zu präsentieren, kooperieren wir eng mit dem Forstunternehmen <Link href={"http://www.energieholz-strobel.de/"} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Simon Strobel</Link> zusammen, das weitere Dienstleistungen rund um den Wald bietet.<br/><br/>Kontaktieren Sie uns einfach über <Link href={"https://api.whatsapp.com/send?phone=491708083239&text=&source=&data="} style={{ color: "black", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Whatsapp</Link> und profitieren Sie von unserer langjährigen Expertise.</>} />
       
       
        
    </> );
}
 
export default Forstwirtschaft;