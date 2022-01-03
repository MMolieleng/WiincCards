import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";

import { ChakraProvider } from "@chakra-ui/react";
export const appName = "M-Card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>Welcome to WiincCard</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
