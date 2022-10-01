import { Button, Text } from "@mantine/core";
import Link from "next/link";
import { Media } from "../Components/Media";
import MainScreen from "../Components/UI/DefaultScreen";
import NavBar from "../Components/UI/Navbar";

export default function NotWorking(){

    return(
        <>
      <Media between={["zero", "mobile"]}>
      <MainScreen label="Stránka nebyla nalezena" image="/images/bily_c.png" device="mobile"/>
      </Media>
      <Media between={["mobile", "tablet"]}>
      <MainScreen label="Stránka nebyla nalezena" image="/images/bily_c.png" device="tablet"/>
      </Media>
      <Media between={["tablet", "laptop"]}>
      <MainScreen label="Stránka nebyla nalezena" image="/images/bily_c.png" device="laptop"/>
      </Media>
       <div style={{display: "flex", width: "100%", height: "100%", marginTop: "5vh"}}>   <div style={{margin: "auto"}}> <Link href="/"><Button color="teal">Zpět na hlavní stranu</Button></Link></div></div>
        
        </>

    )
}