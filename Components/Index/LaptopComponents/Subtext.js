import styles from "../../../styles/Home.module.css";
import {Button, Text } from "@mantine/core";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
export default function Subtext(props) {
    return(
        <div className={styles.second}>
         <div style={{width: "80%", backgroundColor: "rgba(63,123,99,1)", padding:" 5vh 35vw 5vh 5vw"}}>
           
         <Text size="xl" element="p" sx={{ fontWeight: 400, color: "#eeee" }}>
            Zateplujete dům? Nechce se Vám složitě vyměřovat prostor k
            zateplení? Standardní izolace se Vám zdají nákladné? Pak sypaný
            polystyren je pro Vás to pravé řešení.
          </Text>
          
         </div>
         <div style={{width: "20%", cursor: "pointer"}}>
         <Link href="/sortiment">
         <div
            size="xl"
            variant="filled"
            color="green"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#216a55",
              color: "#fff",
              transition: "0.5s",
              width: "100%",
              height: "100%",
              borderRadius: "0",
           " &:hover":{backgroundColor: "#216a55"}}}
          >
            <Text component="p" size="xl" weight={500} sx={{margin: "0"}}>Prohlédnout produkty</Text> <AiOutlineRight />
          </div>
          </Link>
         </div>
        </div>
    )
}