import '@/styles/globals.css'
import Layout from "../comp/layout"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title key="title">Strobel GbR - Photovoltaikreinigung & Forstwirtschaft</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Peter und Hannes Strobel GbR",
          "description": "Photovoltaikreinigung und Forstwirtschaft in Oberschwaben",
          "url": "https://www.photovoltaikreinigung-oberschwaben.de",
          "telephone": "+491708083239",
          "email": "hannes-strobel@gmx.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Im Wiesengrund 3",
            "addressLocality": "Eichstegen",
            "postalCode": "88361",
            "addressCountry": "DE"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "08:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "15:00"
            }
          ],
          "areaServed": "Oberschwaben",
          "knowsAbout": ["Photovoltaikreinigung", "Forstwirtschaft", "Holzrückung"]
        })
      }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
