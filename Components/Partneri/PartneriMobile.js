import MainScreen from "../UI/MainScreen";
import {Text, Card, Space, Divider} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Footer from "../UI/Footer";
import DefaultScreen from "../UI/DefaultScreen";
export default function PartneriMobile(props){
    let {device, data} = props;
    console.log(data);
    return(
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <DefaultScreen label="Partneři" image="/images/polystyren_jemny_detail2.png" device={props.device}/>
            <div style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
        }}>
        <Text size="xl" weight={400} sx={{ color: "#545454", fontSize: "1rem", marginBottom: "2vh" }}>Zde Vám budeme postupně představovat partnery, kteří používají naší izolaci pro realizaci svých zakázek.</Text>
       <Space h={30} />
        <div style={device !== "laptop" ? device !== "tablet" ? {display: "flex", flexDirection: "column", gap: "2vh"} : {display: "flex", flexDirection: "row", gap: "2vh"} : {display: "flex", alignItems: "center", justifyContent: "center"}}>
            
        
               {data && data.data && data.data.map((item, index) => {
                let partner = item.attributes;
                return(
                    <div style={{margin: "0 5vw", gap: "2vh", display: "flex", flexDirection: "column"}}>
               {partner.logo && partner.logo.data && partner.logo.data.attributes && <Image src={"http://134.122.88.214:1337" + partner.logo.data.attributes.url}  width={partner.logo.data.attributes.width} height={partner.logo.data.attributes.height} layout="responsive" />}
               <Text size="xl" weight={600} sx={{ color: "#545454", fontSize: "1.5rem" }}>{partner.nazev}</Text>
               <Text size="xl" weight={400} sx={{ color: "#545454", fontSize: "1rem" }}>{partner.popis}</Text>
               {partner.link && <Link href={partner.link} >{partner.link}</Link>}
               {device !== "laptop" ? <Divider /> : null}
               </div>
               
               
                )
            }
               )
               }
        </div>
        <Space h={30} />
        </div>
        <Footer />
        </div>
    )
}