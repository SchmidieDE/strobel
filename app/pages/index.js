import Subtext from '../comp/design/subtext'
import Head from 'next/head'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
import Background from '../comp/design/background'
import ImageContainer from '../comp/design/imagecontainer'
import Titel from "../comp/design/title"
import Stichpunkte from '@/comp/design/stichpunkte'
import Link from 'next/link'

import imgHero from "../public/pictures/solardachreinigungstrobel.webp"


export default function Home() {
  return (
    <>
      <Head>
        <title key="title">Photovoltaikreinigung & Forstwirtschaft Oberschwaben | Strobel GbR</title>
        <meta name="description" content="Strobel GbR aus Eichstegen: Professionelle Photovoltaikreinigung mit MKG Langarmkran und bodenschonende Holzrückung in Oberschwaben. Familienbetrieb seit 1950." key="description" />
        <link rel="canonical" href="https://www.photovoltaikreinigung-oberschwaben.de/" />
        <meta property="og:title" content="Photovoltaikreinigung & Forstwirtschaft Oberschwaben | Strobel GbR" />
        <meta property="og:description" content="Photovoltaikreinigung mit MKG Langarmkran und bodenschonende Holzrückung in Oberschwaben. Familienbetrieb seit 1950." />
        <meta property="og:url" content="https://www.photovoltaikreinigung-oberschwaben.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:title" content="Photovoltaikreinigung & Forstwirtschaft Oberschwaben | Strobel GbR" />
        <meta name="twitter:description" content="Photovoltaikreinigung mit MKG Langarmkran und bodenschonende Holzrückung in Oberschwaben — Familienbetrieb seit 1950." />
      </Head>
      <Titel variant={"bigcenter"} text={"Photovoltaikreinigung & Forstwirtschaft in Oberschwaben"}/>
      <ImageContainer src={imgHero} alt="Solardachreinigung in Oberschwaben mit MKG Langarmkran und SunBrush" priority={true}/>
      <Subtext variant={"white"} text={"Willkommen bei Strobel GbR — Ihrem erfahrenen und kompetenten Partner für professionelle Photovoltaikreinigung und bodenschonende Forstwirtschaft. Familienbetrieb seit 1950 aus Eichstegen."}/>
      <Subtitel text={"Wer wir sind"} variant={"left"}/>
      <Subtext variant={"white"} text={"Wir sind ein kleines traditionsreiches Familienunternehmen, welches von Peter und Hannes Strobel geführt wird und in den Bereichen Photovoltaikreinigung und der Forstwirtschaft tätig ist."}/>
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
