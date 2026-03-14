import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>
      <body style={{margin: "0px", padding: "0px"}}>
        <NextScript/>
        <Main />
      </body>
    </Html>
  )
}

