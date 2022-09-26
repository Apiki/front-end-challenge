import React from 'react';
import { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyle, theme } from '../styles/GlobalStyle'
import Main from '../components/Main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <Main>
              <Component {...pageProps} />
            </Main>
          </ChakraProvider>
        </ThemeProvider>
    </>
  )
}

export default MyApp
