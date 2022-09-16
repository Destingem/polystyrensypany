import styles from "./MobileComponents/IndexMobile.module.css";
import PolyCard from "./MobileComponents/PolyCard";
import Link from "next/link";
import { Button, Text, Grid } from "@mantine/core";
export default function SortimentMobile(props) {
  let {device, button_text} = props;
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

        <Grid.Col span={device !== "laptop" ? 12 : 4}>
            <PolyCard
              image={{ url: "/images/bily.jpg", alt: "Polystyren drcený eps bílý" }}
              header="Polystyren drcený eps bílý"
              text="Sypaný polystyren využíváme ve stavebnictví jako tepelnou izolaci. Sypaná tepelná izolace je vhodná k zateplení domu, do všech špatně přístupných míst, stropů, podlah, krovů, střech, obvodových stěn a vnitřních příček"
              buttonText="Více o drceném bílém"
              link="/drcenypolystyren-bily"
              device={device}
            />
          </Grid.Col>


        <Grid.Col  span={device !== "laptop" ? 12 : 4}>
            <PolyCard
              image={{ url: "/images/sedy2.jpg", alt: "Polystyren drcený XPS" }}
              header="Polystyren drcený šedý"
              text="Polystyren sypaný - EPS šedý obsahuje grafit, který odráží teplo zpět k jeho zdroji a tak zvyšuje izolační účinek. Šedý polystyren je vhodný pro dodatečné zateplení starších domů, pasivních a nízkoenergetických domů.U této izolace jsou deklarovány lepší tepelně izolační vlastnosti."
              buttonText="Více o drceném šedém"
              link="/drcenypolystyren-sedy"
              device={device}
            />
          </Grid.Col>


          <Grid.Col  span={device !== "laptop" ? 12 : 4}>
            <PolyCard
              image={{ url: "/images/XPS2.jpg", alt: "Polystyren drcený XPS" }}
              header="Polystyren drcený XPS"
              text="Polystyren sypaný XPS (extrudovaný) je vodě odolný. Tuto izolaci doporučujeme pod úroveň terénu - zasypání drenážních trubek, zásyp do podlahy, izolace okolo bazénů."
              buttonText="Více o drceném XPS"
              device={device}
              link="/drcenypolystyren-XPS"
            />
          </Grid.Col>

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
