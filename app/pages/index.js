import Subtext from '../comp/design/subtext'
import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
import Background from '../comp/design/background' 
import ImageContainer from '../comp/design/imagecontainer'
import Titel from "../comp/design/title"


export default function Home() {
  return (
    <>
      <Titel variant={"bigcenter"} text={"Wilkommen!"}/>
      <Subtext variant={"white"} text={"Mit uns haben Sie einen erfahrenen und kompetenten Partner in der Photovoltaikreinigung und der Forstwirtschaft. Ihre Hannes und Peter Strobel Gbr.!"}/>
      <Subtitel text={"Wer wir sind"} variant={"left"}/>
      <Subtext variant={"white"} text={"Wir sind ein kleines traditionsreiches Familienunternehmen, welches von Hannes und Peter Strobel geführt wird und in den Bereichen Photovoltaikreinigung und der Forstwirtschaft tätig ist. "}/>
      {
      //<ImageContainer src={"./pictures/Holzhaufen.jpg"} alt={"Holzhaufen Kreis Ravensburg"} width={1000} height={1000}/>
      }

      {
      //<ImageContainer src={"/pictures/rueckewagenseitlich.jpg"} alt={"John Deere Rückewagen von der Seite"}/>
      }
      {
      //ImageContainer src={"/pictures/rueckewagenzange.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz"}/>
      }{
      //ImageContainer src={"/pictures/rueckewagenzangenah.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz in der Nahaufnahme"}/>
      }

      {
      //ImageContainer src={"/pictures/rueckewagenzangenah.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz in der Nahaufnahme"}/>
      }
      <Background variant={"green"}>
        <Subtitel background={"green"} text={"Forstwirtschaft"} variant={"right"}/>
        <Subtext variant={"green"} text={<>asa<br/><br/>asas</>}/>
        <Subtitel background={"green"} text={"Photovoltaikreinigung"} variant={"left"}/>
        <Subtext variant={"green"} text={<>asa<br/><br/>asas</>}/>
        </Background>
      <Subtitel  text={"Historie"} variant={"right"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      {
       //<ImageContainer src={"/pictures/rueckewagenzange.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz"}/>
      }

    </>
  )
}
