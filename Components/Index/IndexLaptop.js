import { useEffect, useRef } from "react";
import NavBar from "../UI/Navbar";
import styles from "../../styles/Home.module.css";
import Footer from "../UI/Footer";
import { Button, Card, CardSection, Divider, Grid, List, ListItem, Text } from "@mantine/core";
import {
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
  TbNumber7,
  TbNumber8,
} from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
export default function IndexLaptop(options) {
  const video = useRef();
  useEffect(() => {
    video.current.playbackRate = 0.5;
  }, [video]);
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <video
        ref={video}
        autoPlay
        loop
        speed
        muted
        height="100px"
        style={{
          height: "100vh",
          width: "100vw",
          maxWidth: "100%",
        }}
        className={styles.video}
      >
        <source src="video/video4.mp4" />
      </video>
      <nav>
        {" "}
        <NavBar />
      </nav>
      <main className={styles.main}>
        <div className={styles.first}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Text
              size="xl"
              sx={{ fontSize: "6.8em", color: "#545454", maxWidth: "70vw" }}
              weight="bold"
            >
              Polystyren sypaný
            </Text>
            <Text size="xl">
              Polystyren sypaný pro zateplení domu je ta pravá izolace.
              Doporučíme jak izolaci polystyren sypaný použít k zateplení domu
              se značnou úsporou nákladů.
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="xl"
              variant="filled"
              color="green"
              sx={{
                backgroundColor: "#195f00",
                color: "#fff",
                transition: "0.5s",
              }}
            >
              Prohlédnout produkty
            </Button>
          </div>
        </div>
        <div className={styles.second}>
          <Text
            element="h2"
            size="xl"
            sx={{
              fontWeight: 600,
              color: "#545454",
              fontSize: "3em",
              marginBottom: "5vh",
            }}
          >
            Nadpis 1
          </Text>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Text 1 - Zateplujete dům? Nechce se Vám složitě vyměřovat prostor k
            zateplení? Standardní izolace se Vám zdají nákladné? Pak sypaný
            polystyren je pro Vás to pravé řešení.
          </Text>
        </div>
        <div className={styles.third}>
          <Text
            element="h2"
            size="xl"
            sx={{
              fontWeight: 600,
              color: "#545454",
              fontSize: "3em",
              marginBottom: "5vh",
            }}
          >
            Máme 7 dobrých důvodů proč děláme sypaný polystyren
          </Text>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Text 2 - Zateplujete dům? Nechce se Vám složitě vyměřovat prostor k
            zateplení? Standardní izolace se Vám zdají nákladné? Pak sypaný
            polystyren je pro Vás to pravé řešení.
          </Text>
          <ul className={styles.duvody}>
            <li className={styles.duvod}>
              <TbNumber1 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                lepší tepelné vlastnosti než v pevné podobě
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber2 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                téměř žádná nasákavost
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber3 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                100% vyplní prostor k zateplení
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber4 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                žádné složité vyměřování prostor k zateplení
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber5 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                izolace je lehká nezatěžuje konstrukce domu
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber6 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                nevytváří se plísně, díky vzduchu mezi kuličkami stavba tzv.
                dýchá
              </Text>
            </li>
            <li className={styles.duvod}>
              <TbNumber7 color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                nepodporuje hoření
              </Text>
            </li>
            <li className={styles.duvod}>
              <AiOutlinePlus color="rgb(25, 95, 0)" size="3rem" />
              <Text size="xl" element="p">
                recyklací polystyrenu přispíváme ke zlepšení životního prostředí
              </Text>
            </li>
          </ul>
        </div>

        <div className={styles.fourth}>
          <div>
            <Text
              element="h2"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "3em",
                marginBottom: "5vh",
              }}
            >
              Nadpis 3 - Využití
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
              Text 3 - Zateplujete dům? Nechce se Vám složitě vyměřovat prostor
              k zateplení? Standardní izolace se Vám zdají nákladné? Pak sypaný
              polystyren je pro Vás to pravé řešení.
            </Text>

            <Text
              element="h3"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              Stavebnictví
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
              Text 3a - Sypaný polystyren využíváme ve stavebnictví jako
              tepelnou izolaci. Sypaná tepelná izolace je vhodná k zateplení
              domu, do všech špatně přístupných míst, stropů, podlah, krovů,
              střech, obvodových stěn a vnitřních příček.
            </Text>
            <List>
              <ListItem>
                Při výrobě sypaného polystyrenu vybíjíme statiku, takže
                polystyren na vás nenaskáče, teče jako lavina a dostane se
                opravdu všude.
              </ListItem>
              <ListItem>
                Využití je široké nejen pro novostavby, ale hlavně pro starší
                domy, které mají problém s vlhkostí. Vzduch mezi kuličkami
                odvádí vlhkost až do ztracena. Stavba tzv. dýchá a nevytváří se
                plísně.
              </ListItem>
            </List>
            <Text
              element="h3"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              Nábytkářský průmysl
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
              Text 3b - Sypaný polystyren objevili i majitelé sedacích vaků.
              Nakupují u nás sypaný polystyren jako náhradní náplň do sedacích
              vaků. Pro tento účel třídíme a zpracováváme zcela čistý
              polystyren, aby mezi kuličkami nevznikal prach a nečistoty.
            </Text>
            <Text
              element="h3"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              Zahrádkářství
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy k jejímu odlehčení.
            </Text>
            <Text
              element="h3"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              Zábavní průmysl
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Sypaný polystyren používají filmaři, organizátoři zábavných akcí, divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro děti - náhrada vody v bazénu.
            </Text>
            <Text
              element="h3"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              A další
            </Text>
            <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Sypaný polystyren používají různé společnosti k vyplnění balíků s křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s křišťálovým lustrem nebo s pivem do Indie.

            </Text>
            
          </div>
          <div style={{ minWidth: "30%", marginTop: "12vh" }}>
            <Image
              src="/images/podlaha.png"
              layout="responsive"
              width="100px"
              height="100px"
              style={{ borderRadius: "3px" }}
            />
          </div>
        </div>
        <div className={styles.fifth}>
        <Text
              element="h2"
              size="xl"
              sx={{
                fontWeight: 600,
                color: "#545454",
                fontSize: "3em",
                marginBottom: "5vh",
              }}
            >
              Sortiment
            </Text>
        <Grid span={12}>
              <Grid.Col span={4}>
              
                
                <Image src="/images/EPS_bily.png"  layout="responsive"
              width="100px"
              height="100px" />
             
                <Text sx={{position: "absolute", margin: "auto"}}  weight={500}>EPS Bílý</Text>
                
             
              </Grid.Col>
              <Grid.Col span={4}>
            
                <Image src="/images/EPS_sedy.png"  layout="responsive"
              width="100px"
              height="100px" />
               
                <Text sx={{position: "", margin: "auto", top: "50%", zIndex: "14000"}} weight={500}>EPS Šedý</Text>
                
        
             
              </Grid.Col>
              <Grid.Col span={4}>
             
              <Image src="/images/XPS.png"  layout="responsive"
              width="100px"
              height="100px" />
              <Text sx={{position: "", margin: "auto", top: "50%", zIndex: "14000"}} weight={500}>XPS</Text>
              </Grid.Col>
            </Grid>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
