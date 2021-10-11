/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import NProgress from 'nprogress'

import { ThemeProvider } from 'styled-components'
import Header from '../components/header'

import { GlobalStyle, theme } from '../components/styles/global'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  return {
    props: {},
  }
}

export default MyApp
