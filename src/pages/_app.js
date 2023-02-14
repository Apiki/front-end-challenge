import Head from "next/head";
import { Montserrat } from "@next/font/google";
import { GlobalStyles } from "@/styles/GlobalStyles";

const montserratFont = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <GlobalStyles />
      <main className={montserratFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
