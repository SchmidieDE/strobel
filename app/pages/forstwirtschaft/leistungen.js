import ImageContainer from "@/comp/design/imagecontainer";
import Titel from "@/comp/design/title";
import Videocontainer from "@/comp/design/videocontainer";



const Leistungen = () => {
    
    
    return ( <>
        <Titel variant={"bigcenter"} text={"Leistungen"}/>
        <ImageContainer src={"/pictures/rueckewagenzange.jpg"}  alt={"Rückewagen im Wald. Zu sehen ist die Zange des John Deere 1110 der Baumstämme hochhebt"} />
        
        <Videocontainer linkhref={"https://statischerbucket.s3.eu-central-1.amazonaws.com/VideovomHolzruecken.mp4"} color={"#0F265C"}/>
    </> );
}
 
export default Leistungen;