import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        
      </Head>
      <body style={{margin: "0px", padding: "0px"}}>
        <NextScript async src="https://www.googletagmanager.com/gtag/js?id=G-LQ8YNDGR9N" id="GoogleScript"/>
        <NextScript  id="CookieScript">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-LQ8YNDGR9N');
          `}
        </NextScript>
        <Main />    
      </body>
    </Html>
  )
}

