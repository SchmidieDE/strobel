import Subtext from '../comp/design/subtext'
import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
import Background from '../comp/design/background' 
import ImageContainer from '../comp/design/imagecontainer'


export default function Home() {
  return (
    <>
      <Subtitel text={"Albanien ist schön"} variant={"left"}/>
      <ImageContainer src={"/pictures/Holzhaufen.jpg"} alt={"Holzhaufen Kreis Ravensburg"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <ImageContainer src={"/pictures/rueckewagenseitlich.jpg"} alt={"John Deere Rückewagen von der Seite"}/>
      <Subtitel text={"Albanien ist schön"} variant={"left"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel  text={"Albanien ist schön, fast so schön wie die Türkei"} variant={"right"}/>
      <ImageContainer src={"/pictures/rueckewagenzange.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel  text={"Albanien ist schön"} variant={"right"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <ImageContainer src={"/pictures/rueckewagenzangenah.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz in der Nahaufnahme"}/>
      <Subtitel  text={"Albanien ist schön"} variant={"right"}/>
      <ImageContainer src={"/pictures/rueckewagenzangenah.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz in der Nahaufnahme"}/>
      <Background variant={"green"}>
        <Subtitel background={"green"} text={"Albanien ist schön"} variant={"right"}/>
        <Subtext variant={"green"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
        <Subtitel background={"green"} text={"Türkei ist das beste und schönste Land"} variant={"right"}/>
        <Subtext variant={"green"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>      
        <Subtitel background={"green"} text={"Deutschland ist das aller beste und schönste Land"} variant={"right"}/>
        <Subtext variant={"green"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>      
      </Background>
      <Subtitel  text={"Albanien ist schön"} variant={"right"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <ImageContainer src={"/pictures/rueckewagenzange.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz"}/>
     
      
      <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      <Dropdown variant={"green"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      <Dropdown variant={"blue"} title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      <ImageContainer src={"/pictures/rueckewagenzange.jpg"} alt={"John Deere Rückewagen Greifarm mit Holz"}/>
     

    </>
  )
}
