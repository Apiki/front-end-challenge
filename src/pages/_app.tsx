import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';

import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/theme';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
