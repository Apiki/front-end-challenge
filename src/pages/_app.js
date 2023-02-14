import Head from "next/head";
import { Poppins } from "@next/font/google";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { Header } from "@/components/Header";

const poppinsFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <GlobalStyles />
      <main className={poppinsFont.className}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
