import Subtext from '../comp/design/subtext'
import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Dropdown from "../comp/design/dropdown"
import Subtitel from "../comp/design/subtitle"
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Subtitel text={"Albanien ist schön"} variant={"left"}/>
      <Subtext text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel text={"Albanien ist schön, fast so schön wie die Türkei"} variant={"right"}/>
      <Subtext text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      <Subtitel text={"Albanien ist schön"} variant={"right"}/>
      <Subtext text={"Das ist ein langer Beispieltext. Ich schriebe sehr sehr langeu nd schön und schnell nun Siehst du diesen Text. Ich liebe Albanien, bestes Land"}/>
      {
      //<Dropdown text="as" title="asas"/>
      }
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p>Das ist ganz viel Text hambdullah</p>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </>
  )
}
