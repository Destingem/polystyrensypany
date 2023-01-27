import '../styles/globals.css'
import {MantineProvider} from "@mantine/core"
import { MediaContextProvider } from "../Components/Media"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { GoogleAnalytics } from "nextjs-google-analytics";
function MyApp({ Component, pageProps }) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
  const [showChild, setShowChild] = useState(false);
  
  useEffect(() => {
    setShowChild(true);
  }, []);
  

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else{
  return (
    <MediaContextProvider>
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: "light",
    }}
  >
    <Head>
        <title>Polystyren sypaný | Ta Pravá Izolace</title>
        <meta
          name="google-site-verification"
          content="9K0ynxdvhSHvYMmvn3-3L3_VxCv9eFsGau7yWg_jYRI"
        />
        <meta name="generator" content="Bluefish 2.2.3" />
        <meta name="author" content="Humes" />
        <meta
          name="keywords"
          content="Polystyren, polystyren sypaný, polystyreny, polystyrenové kuličky, izolace, zateplení domu, foukaná izolace"
        />
        <meta
          name="description"
          content="Polystyren sypaný pro zateplení domu je ta pravá izolace. Doporučíme jak izolaci polystyren sypaný použít k zateplení domu se značnou úsporou nákladů."
        />
        <meta name="robots" content="index, follow" />
        <meta name="Copyright" content="Copyright© 2022 Polystyren sypaný" />
        <meta  content="text/html; charset=UTF-8" />
        <meta
          
          content="application/xhtml+xml; charset=UTF-8"
        />
        <meta  content="text/css" />
        <meta  content="0" />

        <link rel="icon" href="/images/finalLogo.png" />
      </Head>
      <script
        type="text/javascript"
        async=""
        defer=""
        src="//ifirmy.cz/pxstats/piwik.js"
      ></script>
      <script async="" src="//www.google-analytics.com/analytics.js"></script>
      <script
        type="text/javascript"
        async=""
        src="https://ssl.google-analytics.com/ga.js"
      ></script>
  <GoogleAnalytics trackPageViews gaMeasurementId="UA-27461326-2"/>
  <Component {...pageProps} />
  </MantineProvider>
  </MediaContextProvider>
  )
}
}
export function reportWebVitals(metric) {
  console.log(metric);
}
export default MyApp
