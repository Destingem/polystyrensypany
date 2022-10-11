import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import IndexLaptop from "../Components/Index/IndexLaptop";
import IndexMobile from "../Components/Index/IndexMobile";
import IndexTablet from "../Components/Index/IndexTablet";
import { Media } from "../Components/Media";
import NavBar from "../Components/UI/Navbar";
import styles from "../styles/Home.module.css";

export default function Home(props) {
 
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
  return (
    <div className={styles.container}>
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
      <Media between={["zero", "mobile"]}>
     <IndexMobile {...props}/>
      </Media>
      <Media between={["mobile", "tablet"]}>
       <IndexTablet {...props}/>
      </Media>
      <Media between={["tablet", "laptop"]}>
       <IndexLaptop {...props}/>
      </Media>
    </div>
  );
}
export async function getStaticProps() {
  try{
    let fetched = await fetch("http://159.89.20.207:1337/api/sortiment-karty?populate=*", {
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  })
  var data = await fetched.json()
  let fetchedVyuziti = await fetch("http://159.89.20.207:1337/api/hlavni-strana-vyuziti?populate=*",{
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  })
  var dataVyuziti = await fetchedVyuziti.json()

  let fetchedPodnadpis = await fetch("http://159.89.20.207:1337/api/hlavni-strana-podnadpis?populate=*",{
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  })
  var dataPodnadpis = await fetchedPodnadpis.json()
  var props = {
    sortiment: data.data ? data.data : [],
    vyuziti: dataVyuziti.data ? dataVyuziti.data : [],
    podnadpis: dataPodnadpis.data ? dataPodnadpis.data.attributes.Text : [],
  } 
  } catch(a){
    var props = {sortiment:[] , vyuziti:[] , podnadpis: []}
  }
    return {
      props,
      revalidate: 30,
    };
  }
