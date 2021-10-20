import '~/styles/global';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
