import {Text} from "@mantine/core";
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6, TbNumber7 } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../../../styles/Home.module.css";
import Duvod from "./Duvod";
export default function Duvody(){
let duvody = ["lepší tepelné vlastnosti než v pevné podobě", " téměř žádná nasákavost", "   100% vyplní prostor k zateplení", "  žádné složité vyměřování prostor k zateplení", " izolace je lehká nezatěžuje konstrukce domu", "nevytváří se plísně, díky vzduchu mezi kuličkami stavba tzv. dýchá","nepodporuje hoření", "recyklací polystyrenu přispíváme ke zlepšení životního prostředí"  ]
    return(
        <div className={styles.third}>
          <Text
            element="h2"
            size="xl"
            sx={{
              fontWeight: 600,
              color: "#216a55",
              fontSize: "3em",
              marginBottom: "5vh",
            }}
          >
            Máme 7 dobrých důvodů proč zvolit sypaný polystyren
          </Text>
          
          <ul className={styles.duvody}>
         <div style={{display: "flex", flexDirection: "column", gap: "1vh"}}>
         {duvody.map((duvod, index) => {
            if(index < duvody.length * 0.5){
              return(
              <Duvod text={duvod} num={index + 1} />
            )
            }
          })}
         </div>
         <div style={{display: "flex", flexDirection: "column", gap: "1vh"}}>
         {duvody.map((duvod, index) => {
            if(index >= duvody.length * 0.5){
              return(
              <Duvod text={duvod} num={index < 7 ? index + 1 : "+"} />
            )
            }
          })}
         </div>
          
        
          </ul>
        </div>
    )
}