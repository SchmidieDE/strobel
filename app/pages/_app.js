import '@/styles/globals.css'
import Layout from "../comp/layout"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
  <> 
    <Head>
      <title>{"Hannes und Peter Strobel Gbr."}</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </> 
  )
}
