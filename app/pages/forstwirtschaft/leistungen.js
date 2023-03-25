import ImageContainer from "@/comp/design/imagecontainer";
import Titel from "@/comp/design/title";



const Leistungen = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Leistungen"}/>
        <ImageContainer src={"/pictures/rueckewagenzange.jpg"}  alt={"Rückewagen im Wald. Zu sehen ist die Zange des John Deere 1110 der Baumstämme hochhebt"} />
        
    </> );
}
 
export default Leistungen;