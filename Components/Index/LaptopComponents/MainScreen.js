import styles from "../../../styles/Home.module.css";
import { Button, Text } from "@mantine/core";
import NavBar from "../../UI/Navbar";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
export default function MainScreen(props) {
    return(
        <div className={styles.first}>
       
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
          <Text
            component="h1"
            size="xl"
            sx={{ fontSize: "6.8em", backgroundColor: "rgba(50, 123, 98, 0.7)", maxWidth: "70vw", marginBottom: "1vh", color: "white" , padding: "0 2vw 1vh 1vw"}}
            weight="bold"
          >
            Polystyren sypaný
          </Text>
            <Text
            component="b"
            sx={{ fontSize: "3em", backgroundColor: "rgba(50, 123, 98, 0.7)", maxWidth: "70vw", marginTop: "", color: "white", padding: "0 2vw 1vh 2vw" }}
            weight="bold"
            >ta pravá izolace</Text>
          </div>
         
        </div>
       
        
       
       
      </div>
    )
}