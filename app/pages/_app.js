import '@/styles/globals.css'
import Layout from "../comp/layout"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
  <> 
    <Head>
      <title>{"Hannes und Peter Strobel Gbr."}</title>
      <link rel="canonical" href="http://photovoltaikreinigung-oberschwaben.de" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </> 
  )
}
