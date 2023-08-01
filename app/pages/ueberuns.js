import Titel from "@/comp/design/title"
import Subtext from "@/comp/design/subtext"
import Subtitel from "@/comp/design/subtitle"
import Link from "next/link";
import ImageContainer from "@/comp/design/imagecontainer";
import Background from "@/comp/design/background";



const Ueberuns = () => {



    return (
        <>
            <Titel variant={"bigcenter"} text={"Über uns"}/>
            <Subtitel text={"Historie:"} variant={"left"}/>
            <Subtext variant={"white"} text={<>Anton Strobel hat 1950 begonnen mit Pferden das Holz aus dem Wald zu rücken. Dieses Familienunternehmen wurde später von seinem Sohn übernommen, welches heute von Simon Strobel geleitet wird.<br/><br/> 1988 entschied sich Peter Strobel, einen eigenständigen Weg im Bereich der Holzrückung einzuschlagen. Er revolutionierte den Betrieb, indem er den ersten in Serie produzierten Rückezug, den Mini Bruunett 678F, einsetzte.</>}/>
            <ImageContainer alt="Bild aus Prospekt von Bruunett 678F" src={"/pictures/Bruunett678.jpg"}/>
            <Subtext variant={"white"} text={<>Seither hat der Betrieb stetig in leistungsstärkere Rückezüge investiert und sich technologisch weiterentwickelt.</>}/>
            <Subtitel text={"Transformation des Betriebs:"} variant={"right"}/>
            <Subtext variant={"white"} text={<>2011 folgte Hannes Strobel der Familientradition und stieg in den Betrieb mit ein, was zur Gründung der GbR führte. <br/><br/>Ein Jahr später diversifizierte das Unternehmen seine Dienstleistungen mit dem Beginn der Reinigung von Photovoltaikanlagen.</>}/>
            <Subtitel text={"Modernste Technik:"} variant={"left"}/>
            <ImageContainer src={"/pictures/rueckewagenfront.jpg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />    
            <Subtext variant={"white"} text={<>Aktuell setzen wir den John Deere 810E und 1110D Forwarder bei der Holzrückung ein. Als Forstmaschinentransporter nutzen wir den Scania R410 LKW.</>}/>
            <Subtitel text={"Meilenstein"} variant={"right"}/>
            <ImageContainer src={"/pictures/WhatsApp Image 2023-04-04 at 21.43.27.jpeg"} width={4032} height={2268} alt={""} />    
            <Subtext variant={"white"} text={<>Das Jahr 2023 markiert einen weiteren Meilenstein mit der Anschaffung des MAN MKG 401 Langarmkrans.</>}/>
            <Background variant="green">
                <Subtitel text={"Team:"} variant={"left"} background={"green"}/>
                <ImageContainer src={"/pictures/Team.jpeg"} width={4032} height={2268} alt={"John Deere 810E Rückewagen im Wald im Einsatz"} />    
                <Subtext variant={"green"} text={<>Das Strobel-Team, bestehend aus Hannes & Simon, deren Väter und weiteren engagierten Mitarbeitern, steht heute stolz hinter der langen und erfolgreichen Geschichte des Unternehmens.</>}/>
            </Background>
        </>
    )
}

export default Ueberuns