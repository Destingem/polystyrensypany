import {Text} from '@mantine/core';
import styles from './IndexMobile.module.css';
export default function Text1(){
    return(
        <div className={styles.thirdSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
          Proč polystyren?
        </Text>
        <Text
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            padding: "",
          }}
        >
          Text 1 - Zateplujete dům? Nechce se Vám složitě vyměřovat prostor k
          zateplení? Standardní izolace se Vám zdají nákladné? Pak sypaný
          polystyren je pro Vás to pravé řešení.
        </Text>
      </div>
    )
}