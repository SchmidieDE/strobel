import '@/styles/globals.css'
import Layout from "../comp/layout"
import Head from 'next/head'


const SITE_URL = "https://www.photovoltaikreinigung-oberschwaben.de"
const ORG_ID = `${SITE_URL}/#org`
const OG_IMAGE = `${SITE_URL}/pictures/solardachreinigungstrobel.webp`

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  "name": "Peter und Hannes Strobel GbR",
  "alternateName": "Strobel GbR",
  "description": "Photovoltaikreinigung und Forstwirtschaft in Oberschwaben — Familienbetrieb seit 1950.",
  "url": SITE_URL,
  "image": OG_IMAGE,
  "logo": `${SITE_URL}/StrobelLogoEditiertGreenBlue.svg`,
  "telephone": "+491708083239",
  "email": "hannes-strobel@gmx.de",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Im Wiesengrund 3",
    "addressLocality": "Eichstegen",
    "postalCode": "88361",
    "addressRegion": "Baden-Württemberg",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.9542,
    "longitude": 9.4736
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Oberschwaben" },
    { "@type": "AdministrativeArea", "name": "Baden-Württemberg" }
  ],
  "knowsAbout": ["Photovoltaikreinigung", "Solarreinigung", "Forstwirtschaft", "Holzrückung", "Modulreinigung"],
  "foundingDate": "1950",
  "sameAs": []
}


export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title key="title">Strobel GbR - Photovoltaikreinigung & Forstwirtschaft</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#4E9940" />
      <link rel="icon" href="/favicon.ico" />

      {/* Global Open Graph fallbacks (per-page tags override) */}
      <meta property="og:site_name" content="Strobel GbR" key="og:site_name" />
      <meta property="og:image" content={OG_IMAGE} key="og:image" />
      <meta property="og:image:width" content="1200" key="og:image:width" />
      <meta property="og:image:height" content="630" key="og:image:height" />
      <meta property="og:image:alt" content="Solardachreinigung Strobel GbR – Photovoltaikreinigung Oberschwaben" key="og:image:alt" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content="Strobel GbR – Photovoltaikreinigung & Forstwirtschaft Oberschwaben" key="twitter:title" />
      <meta name="twitter:description" content="Ihr Partner für professionelle Photovoltaikreinigung und bodenschonende Holzrückung in Oberschwaben. Familienunternehmen seit 1950." key="twitter:description" />
      <meta name="twitter:image" content={OG_IMAGE} key="twitter:image" />
      <meta name="twitter:image:alt" content="Solardachreinigung Strobel GbR" key="twitter:image:alt" />
    </Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
