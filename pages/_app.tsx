import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/globals'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
