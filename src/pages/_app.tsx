import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import GlobalStyle from '~/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
