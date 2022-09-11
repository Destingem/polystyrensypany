import { Text } from "@mantine/core";
import styles from "../../../styles/Home.module.css";
export default function Duvod(props){

    return(
        <li className={styles.duvod}>
              <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: "4vw", justifyContent:  "center", alignItems: "center", display: "flex"}}><Text weight={500} sx={{color: "white", fontSize: "2vw", aspectRatio: "1"}}>{props.custom ? props.custom : props.num}</Text></div>
              <Text size="xl" element="p">
                {props.text}
              </Text>
            </li>
    )
}