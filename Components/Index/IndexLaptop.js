import { useEffect, useRef } from "react";
import NavBar from "../UI/Navbar";
import styles from "../../styles/Home.module.css";
import Footer from "../UI/Footer";
import Sortiment from "./Sortiment";
import { Button, Card, CardSection, Divider, Grid, List, ListItem, Text } from "@mantine/core";
import {
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
} from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import MainScreen from "./LaptopComponents/MainScreen";
import Subtext from "./LaptopComponents/Subtext";
import Duvody from "./LaptopComponents/Duvody";
import Vyuziti from "./LaptopComponents/Vyuziti";
export default function IndexLaptop(props) {
  

  return (
    <div style={{ maxWidth: "100%", overflow: "hidden"}}>
    
      
      <main className={styles.main}>
      <div style={{backgroundImage: "url('/images/bckball3.webp')", backgroundSize: "100% auto", backgroundPosition: "top", backgroundRepeat: "no-repeat" }}>
      <nav><NavBar /> </nav>
       <MainScreen />
       </div>
        <Subtext podnadpis={props.podnadpis}/>
        <Duvody />
        <Vyuziti vyuziti={props.vyuziti}/>
        <Sortiment device="laptop" sortiment={props.sortiment} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
