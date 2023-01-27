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
 
  
  return (
    <div className={styles.container}>
    
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
    let fetched = await fetch("http://134.122.88.214:1337/api/sortiment-karty?populate=*", {
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  })
  var data = await fetched.json()
  let fetchedVyuziti = await fetch("http://134.122.88.214:1337/api/hlavni-strana-vyuziti?populate=*",{
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  })
  var dataVyuziti = await fetchedVyuziti.json()

  let fetchedPodnadpis = await fetch("http://134.122.88.214:1337/api/hlavni-strana-podnadpis?populate=*",{
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
