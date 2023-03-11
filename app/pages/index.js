import Subtext from '../comp/design/subtext'
import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
import Background from '../comp/design/background' 


export default function Home() {
  return (
    <>
      <Subtitel text={"Albanien ist schön"} variant={"left"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel  text={"Albanien ist schön, fast so schön wie die Türkei"} variant={"right"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel  text={"Albanien ist schön"} variant={"right"}/>
      <Subtext variant={"white"} text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
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
   
      
      <Dropdown title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      <Dropdown title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      <Dropdown title="S600 Maybach Brabus AMG 900PS" text="Albanien hat die schönsten Fraunen und die coolste Mafia der Welt. Die fahren alle dicke Brabus Maybach S600 Amg, ohne nur daran zu denken eine Abgasreinigunsreinrichtung einzubauen."/>
      
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </>
  )
}
