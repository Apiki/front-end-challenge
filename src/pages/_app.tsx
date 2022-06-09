import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Blog | Apiki</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          href="/img/favicon/apple-icon-180x180.png"
          sizes="180x180"
        />

        <link
          href="/img/favicon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/img/favicon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta
          name="description"
          content="Aluguel, Compra e Venda é a nossa especialidade à mais de 60 anos. Encontre o seu Imóvel em Florianópolis - SC."
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
