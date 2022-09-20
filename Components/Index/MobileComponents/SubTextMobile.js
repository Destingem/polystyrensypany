import { Text } from "@mantine/core";
import styles from "./IndexMobile.module.css"
export default  function SubTextMobile(props) {
    return <div className={styles.secondSection}>

      <Text
        size="sm"
        sx={{
          color: "#e5e5e5",
          fontSize: "1rem",
          marginTop: "0vh",
          padding: "",
        }}
      >
        {props.podnadpis}
      </Text>
    </div>;
  }