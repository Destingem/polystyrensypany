import styles from "../../../styles/Home.module.css";
import {Text, List, ListItem } from "@mantine/core";
import Image from "next/image";
import {IoConstruct} from "react-icons/io5";
import HeadingWithIcon from "./HeadingWithIcon";
import {TbBrandAirtable} from "react-icons/tb"
import {SiGumtree} from "react-icons/si"
import {BsSnow} from "react-icons/bs"
export default function Vyuziti(props){
    let {vyuziti} = props
    console.log(vyuziti.attributes);
    return(
        <div className={styles.fourth}>
        <div>
          <Text
            component="h2"
            size="xl"
            sx={{
              fontWeight: 600,
              color: "#216a55",
              fontSize: "3em",
              marginBottom: "5vh",
            }}
          >
            Využití
          </Text>
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
            
          </Text>

         <HeadingWithIcon icon={<IoConstruct style={{ color: "#fff", fontSize: "2em" }}/>}>Stavebnictví</HeadingWithIcon>
        
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
          {vyuziti?.attributes?.Stavebnictvi}
          </Text>
         
          <HeadingWithIcon icon={<TbBrandAirtable style={{ color: "#fff", fontSize: "2em" }}/>}>Nábytkářský průmysl</HeadingWithIcon>
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
          {vyuziti?.attributes?.Nabytkarsky_prumysl}
          </Text>
          <HeadingWithIcon icon={<SiGumtree style={{ color: "#fff", fontSize: "2em" }}/>}>Zahrádkářství</HeadingWithIcon>
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
          {vyuziti?.attributes?.Zahradkarstvi}
          </Text>
          <HeadingWithIcon icon={<BsSnow style={{ color: "#fff", fontSize: "2em" }}/>}>Zábavní průmysl</HeadingWithIcon>
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
          {vyuziti?.attributes?.Zabavni_prumysl}
          </Text>
          <Text
        component="h3"
        size="xl"
        sx={{
          fontWeight: 600,
          color: "#487b63",
          fontSize: "2em",
        }}
      >
        A další
      </Text>
          <Text size="xl" component="p" sx={{ fontWeight: 400, color: "" }}>
          {vyuziti.attributes?.Dalsi}

          </Text>
          
        </div>
        <div style={{ minWidth: "30%", marginTop: "auto", marginBottom: "5vh" }}>
          <Image
          alt="Zafoukávání podlahy polystyrenem"
            src="/images/podlaha.jpg"
            layout="responsive"
            width="100px"
            height="100px"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
    )
}