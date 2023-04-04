import { ListItem, Text } from "@mantine/core";
import styles from "../../../styles/Home.module.css";
export default function DuvodMobile(props){

    return(
       <div style={{display: "flex", alignItems: "center", gap: "3vw"}}>
              <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: "4vw", justifyContent:  "center", alignItems: "center", display: "flex", minWidth: "10%"}}><Text weight={500} sx={{color: "white", fontSize: "4vw", aspectRatio: "1"}}>{props.custom ? props.custom : props.num}</Text></div>
              <Text size="lg" component="p">
                {props.text}
              </Text>
              </div>
    )
}