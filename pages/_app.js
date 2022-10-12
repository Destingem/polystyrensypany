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


  </Head>
  <GoogleAnalytics trackPageViews gaMeasurementId="UA-27461326-2"/>
  <Component {...pageProps} />
  </MantineProvider>
  </MediaContextProvider>
  )
}
}

export default MyApp
