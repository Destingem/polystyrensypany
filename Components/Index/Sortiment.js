import styles from "./MobileComponents/IndexMobile.module.css";
import PolyCard from "./MobileComponents/PolyCard";
import Link from "next/link";
import { Button, Text, Grid } from "@mantine/core";
export default function SortimentMobile(props) {
  let {device, button_text, sortiment} = props;
  return (
    <div className={styles.sixthSection} style={{ backgroundColor: "white" }}>
      {button_text && <Text size="xl" weight={600} sx={device !== "laptop" ? { color: "black", fontSize: "12vw" } : { color: "black", fontSize: "3em", marginRight: "auto", color: "rgb(84, 84, 84)" }}>
        Sortiment
      </Text>}
      <Grid
       style={{alignItems: "top"}}
       span={12}
        sx={{ width: "100%", height: "fitContent", gap: device !== "laptop" ? "2vh" : "0", margin: "5vh 0", alignItems: "top"}}
      >

        {sortiment.map((item, index) => {
          return(
            <Grid.Col span={device !== "laptop" ? 12 : 4} key={item.id}>
            <PolyCard
              image={{ url: "http://134.122.88.214:1337" + item.attributes.fotka_produktu.data.attributes.formats.large.url, alt: item.attributes.fotka_produktu.data.attributes.formats.large.name }}
              header={item.attributes.nazev_produktu}
              text={item.attributes.popis}
              buttonText={item.attributes.popis_tlacitka}
              link={item.attributes.odkaz}
              device={device}
            />
          </Grid.Col>
          )
        })}
        



      </Grid>
      {button_text && <Button
        shadow="xl"
        variant="gradient"
        gradient={{ from: "#327b62", to: "teal" }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: "3px",
          width: device !== "laptop" ? "100%" : "33%",
          marginTop: "-2vh",
      marginLeft: device !== "laptop" ? "0" : "auto",
          height: "6vh",
        }}
      >
        <Text
          element="p"
          weight={400}
          size="xl"
          sx={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "500"
          }}
        >
          Sortiment
        </Text>
      </Button>}
    </div>
  );
}
