import Subtext from '../comp/design/subtext'
import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
import Background from '../comp/design/background' 
import ImageContainer from '../comp/design/imagecontainer'
import Titel from "../comp/design/title"
import Stichpunkte from '@/comp/design/stichpunkte'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Titel variant={"bigcenter"} text={"Willkommen!"}/>
      <Subtext variant={"white"} text={"Mit uns haben Sie einen erfahrenen und kompetenten Partner in der Photovoltaikreinigung und der Forstwirtschaft."}/>
      <Subtitel text={"Wer wir sind"} variant={"left"}/>
      <Subtext variant={"white"} text={"Wir sind ein kleines traditionsreiches Familienunternehmen, welches von Peter und Hannes Strobel geführt wird und in den Bereichen Photovoltaikreinigung und der Forstwirtschaft tätig ist. "}/>
      <Background variant={"green"}>
        <Subtitel background={"green"} text={"Forstwirtschaft"} variant={"right"}/>
        <Subtext variant={"green"} text={"Wir bieten in der Forstwirtschaft folgende Dienstleistungen an:"}/>
        <Stichpunkte  arr={["Holzernte", "Holzrückung"]} variant={"green"}  />
        <Subtext variant={"green"} text={<>Weitere Informationen darüber finden Sie auf der Unterseite <Link href={"forstwirtschaft/leistungen"} style={{ color: "white", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Leistungen</Link>.</>}/>
        <Subtitel background={"green"} text={"Photovoltaikreinigung"} variant={"left"}/>
        <Subtext variant={"green"} text={"...und das machen wir alles rund um Photovoltaikanlagen:"}/>
        <Stichpunkte  arr={["Modulreinigung mit MKG Langarmkran 401 und SunBrush Bürste"]}  variant={"green"}/>
        <Subtext variant={"green"} text={<>Weitere Informationen darüber finden Sie auch hier auf der entsprechenden Unterseite <Link href={"photovoltaik/leistungen"} style={{ color: "white", fontWeight: "bold",  textUnderlineOffset: "5px"}}>Leistungen</Link>.</>}/>
      </Background>
    </>
  )
}
