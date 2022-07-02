import NavBar from "../UI/Navbar";
import styles from "./IndexMobile.module.css";
import { useRef } from "react";
import {
  Button,
  Card,
  CardSection,
  Divider,
  Grid,
  List,
  ListItem,
  Text,
  ThemeIcon,
  GridItem,
  CardContent,
  Space,
  Paper
} from "@mantine/core";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
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
import Footer from "../UI/Footer";
import IndexDivider from "../UI/IndexDivider";
export default function IndexMobile(props) {
  const video = useRef();
  return (
    <div className={styles.main}>
      <nav>
        <NavBar />
      </nav>
      <video
        ref={video}
        autoPlay
        loop
        speed
        muted
        height="100px"
        style={{
          height: "60vh",
          width: "100vw",
          maxWidth: "100%",
        }}
        className={styles.video}
      >
        <source src="video/video4.mp4" />
      </video>
      <div className={styles.firstSection}>
        <div style={{alignItems: "flex-end", display: "flex", flexDirection: "column", width: "fit-content"}}>
        <Text
          size="xl"
          sx={{ color: "#545454", fontSize: "15vw", margin: "5vh", marginRight: "10vw", marginBottom: 0 }}
          component="h1"
        >
          Polystyren
        </Text>
        <Text
          size="xl"
          sx={{ color: "#195f00", fontSize: "12vw", marginTop: "0vh", marginRight: "10vw", marginBottom: 0 }}
          component="h1"
        >
          Sypaný
        </Text>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10%",
            justifyContent: "center",
            marginTop: "auto",
            
          }}
        >
          <Link href="/sortiment">
            <Button
              variant="filled"
              size="xl"
              radius="sm"
              color="gray"
              sx={{
                color: "black",
                borderColor: "white",
                backgroundColor: "white",
                width: "60vw",
                minWidth: "min-content",
              }}
              rightIcon={<MdArrowForwardIos />}
            >
              <Text sx={{ fontsize: "10vw" }}>Sortiment</Text>
            </Button>
          </Link>
          <Link href="/o_nas">
            <Button
              variant="outline"
              size="xl"
              radius="sm"
              sx={{
                color: "#195f00",
                borderColor: "#195f00",

                width: "12vw",
                minWidth: "min-content",
                padding: "fit-content",
              }}
            >
              <Text sx={{ fontsize: "10vw" }}>O nás</Text>
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.secondSection}>
        
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
      </div>
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
        




          <List
            spacing={8}
            icon={<ThemeIcon color="teal" size={36} radius="xl"></ThemeIcon>}
            className={styles.list}
          >
            <ListItem
              className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber1 />
                </ThemeIcon>
              }
            >
           
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>lepší tepelné vlastnosti než v pevné podobě</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber2 />{" "}
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>téměř žádná nasákavost</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber3 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>100% vyplní prostor k zateplení</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber4 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>žádné složité vyměřování prostor k zateplení</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber5 />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>izolace je lehká nezatěžuje konstrukce domu</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber6 />
                </ThemeIcon>
              }
            >
             <Text component="p" size="xl" sx={{fontSize: "1rem"}}> nevytváří se plísně, díky vzduchu mezi kuličkami stavba tzv. dýchá</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <TbNumber7 />
                </ThemeIcon>
              }
            >
             <Text component="p" size="xl" sx={{fontSize: "1rem"}}>  nepodporuje hoření</Text>
            </ListItem>
            <ListItem
             className={styles.listItem}
              icon={
                <ThemeIcon color="teal" size={36} radius="xl">
                  <AiOutlinePlus />
                </ThemeIcon>
              }
            >
              <Text component="p" size="xl" sx={{fontSize: "1rem"}}>recyklací polystyrenu přispíváme ke zlepšení životního prostředí</Text>
            </ListItem>
          </List>
        </div>
      </div>
      <div className={styles.fifthSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "10vw", color: "#545454" }}>
          Využití
        </Text>
        <Text size="xl" weight={400} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
          Stavebnictví
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren využíváme ve stavebnictví jako tepelnou izolaci.
          Sypaná tepelná izolace je vhodná k zateplení domu, do všech špatně
          přístupných míst, stropů, podlah, krovů, střech, obvodových stěn a
          vnitřních příček.
        </Text>
        <IndexDivider />
        <Text size="xl" weight={400} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
        Nábytkářský průmysl
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren objevili i majitelé sedacích vaků. Nakupují u nás
          sypaný polystyren jako náhradní náplň do sedacích vaků. Pro tento účel
          třídíme a zpracováváme zcela čistý polystyren, aby mezi kuličkami
          nevznikal prach a nečistoty.
        </Text>
        <IndexDivider />
        <Text size="xl" weight={400} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
        Zahrádkářství
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy k jejímu odlehčení.
        </Text>
        <IndexDivider />
        <Text size="xl" weight={400} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
        Zábavní průmysl
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren používají filmaři, organizátoři zábavných akcí, divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro děti - náhrada vody v bazénu.
        </Text>
        <IndexDivider />
        <Text size="xl" weight={400} sx={{ color: "black", fontSize: "8vw", color: "#545454" }}>
        A další
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
         Sypaný polystyren používají různé společnosti k vyplnění balíků s křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s křišťálovým lustrem nebo s pivem do Indie.
        </Text>
      </div>
      <div className={styles.fifthSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "12vw" }}>
          Sortiment
        </Text>
        <Grid
          span={12}
          sx={{ width: "100%", height: "80vh", gap: "2vh", margin: "5vh 0" }}
        >
          <Link href="/drcenypolystyren-bily">
          <Grid.Col
            span={12}
           
           
          >
           <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/bily_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              XPS
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
          <Link href="/drcenypolystyren-sedy">
          <Grid.Col
            
          >
           <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/sedy_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              XPS
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
          <Link href="/drcenypolystyren-XPS">
          <Grid.Col
          
          
          >
          <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/barevny_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              XPS
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
