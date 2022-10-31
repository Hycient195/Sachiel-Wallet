import "../styles/styles.css";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Footer.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/assets/home/logo.png" />
        <title>Sachiel Wallet</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
