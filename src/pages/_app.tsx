import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { Header } from '../components/Header'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
