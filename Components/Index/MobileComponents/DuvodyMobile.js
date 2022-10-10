import styles from "./IndexMobile.module.css";
import {Text, List, ListItem, ThemeIcon} from '@mantine/core';
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4, TbNumber5, TbNumber6, TbNumber7 } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import DuvodMobile from "./DuvodMobile";

export default function DuvodyMobile(){
  let duvody = ["lepší tepelné vlastnosti než v pevné podobě", " téměř žádná nasákavost", "   100% vyplní prostor k zateplení", "  žádné složité vyměřování prostor k zateplení", " izolace je lehká nezatěžuje konstrukce domu", "nevytváří se plísně, díky vzduchu mezi kuličkami stavba tzv. dýchá","nepodporuje hoření", "recyklací polystyrenu přispíváme ke zlepšení životního prostředí"  ]
    return(
        <div className={styles.fourthSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
          Máme 7 dobrých důvodů proč děláme sypaný polystyren
        </Text>
        <div
          size="sm"
          sx={{
            color: "black",
            fontSize: "6vw",
            marginTop: "0vh",
            overflow: "hidden",
            
          }}
        >
        <div style={{display: "flex", flexDirection: "column", gap: "1vh"}}>
        {duvody.map((duvod, index) => {
            
            return(
            <DuvodMobile text={duvod} num={index !== 7 ? index + 1: "+" } />
          )
          
        })}
        </div>




         
        </div>
      </div>
    )
}