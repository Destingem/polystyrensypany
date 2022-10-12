import '../styles/globals.css'
import {MantineProvider} from "@mantine/core"
import { MediaContextProvider } from "../Components/Media"
import { useEffect, useState } from 'react';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
  const [showChild, setShowChild] = useState(false);
  
  useEffect(() => {
    setShowChild(true);
  }, []);
  useEffect(() => {
    var _gaq = _gaq || [];

    _gaq.push(["_setAccount", "UA-27461326-2"]);

    _gaq.push(["_trackPageview"]);

    (function () {
      var ga = document.createElement("script");
      ga.type = "text/javascript";
      ga.async = true;

      ga.src =
        ("https:" == document.location.protocol
          ? "https://ssl"
          : "http://www") + ".google-analytics.com/ga.js";

      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ga, s);
    })();

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

  <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-27461326-2', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

  </Head>
  <Component {...pageProps} />
  </MantineProvider>
  </MediaContextProvider>
  )
}
}

export default MyApp
