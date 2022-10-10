import { useEffect, useState } from "react";
import { Media } from "../Media";
import FooterLaptop from "./Footers/FooterLaptop";
import FooterMobile from "./Footers/FooterMobile";
import FooterTablet from "./Footers/FooterTablet";
export default function Footer (){
    const [data, setData] = useState(null);
    useEffect(()=> {
        let fechFunction = async ()=>{
           try {
             let data = await fetch("http://159.89.20.207/api/getKontakty")
           } catch (error) {
            console.log(error);
           }
            if(!data || !data.ok){
                return null
            }
            data = await data.json();
            if (data.kontaktniUdaje){
                return data.kontaktniUdaje
            } else {
                return null
            }
        }
        fechFunction().then(data => setData(data))
    }, [])
    return(
      <>
         <Media between={["zero", "mobile"]}>
              <FooterMobile info={data}/>
         </Media>
            <Media between={["mobile", "tablet"]}>
                <FooterTablet info={data}/>
            </Media>
            <Media between={["tablet", "laptop"]}>

                <FooterLaptop info={data}/>
            </Media>
      </>
    )
}