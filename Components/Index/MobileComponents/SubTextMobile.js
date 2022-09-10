import { Text } from "@mantine/core";
import styles from "./IndexMobile.module.css"
export default  function SubTextMobile() {
    return <div className={styles.secondSection}>

      <Text
        size="sm"
        sx={{
          color: "#545454",
          fontSize: "1rem",
          marginTop: "0vh",
          padding: "",
        }}
      >
        Polystyren sypaný pro zateplení domu je ta pravá izolace. Doporučíme
        jak izolaci polystyren sypaný použít k zateplení domu se značnou
        úsporou nákladů.
      </Text>
    </div>;
  }