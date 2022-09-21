// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
