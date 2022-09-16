import type { AppProps } from "next/app";
import Head from "next/head";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Sniglet', cursive",
    body: "'Quicksand', sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "400",
      },
    },
    Badge: {
      baseStyle: {
        fontFamily: "'Quicksand', sans-serif",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&family=Sniglet:wght@400;800&family=Spectral:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
