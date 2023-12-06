import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link
          href="/fonts/FirstAidKitF-Bold.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* <link
          href="/fonts/HelveticaNeue-Bold.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="/fonts/HelveticaNeue-Roman.woff2"
          as="font"
          rel="preload prefetch"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
