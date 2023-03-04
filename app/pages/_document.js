import { Html, Head, Main, NextScript } from 'next/document'
import Layout from "../comp/layout"

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <body style={{margin: "0px", padding: "0px"}}>
      <Layout>
        <Main />    
      </Layout>
      <NextScript />
      </body>
    </Html>
  )
}
