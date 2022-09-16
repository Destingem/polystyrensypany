import styles from "../../../styles/Home.module.css";
import {Text, List, ListItem } from "@mantine/core";
import Image from "next/image";
import {IoConstruct} from "react-icons/io5";
import HeadingWithIcon from "./HeadingWithIcon";
import {TbBrandAirtable} from "react-icons/tb"
import {SiGumtree} from "react-icons/si"
import {BsSnow} from "react-icons/bs"
export default function Vyuziti(){

    return(
        <div className={styles.fourth}>
        <div>
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
            Využití
          </Text>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            
          </Text>

         <HeadingWithIcon icon={<IoConstruct style={{ color: "#fff", fontSize: "2em" }}/>}>Stavebnictví</HeadingWithIcon>
        
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
          <HeadingWithIcon icon={<TbBrandAirtable style={{ color: "#fff", fontSize: "2em" }}/>}>Nábytkářský průmysl</HeadingWithIcon>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
            Text 3b - Sypaný polystyren objevili i majitelé sedacích vaků.
            Nakupují u nás sypaný polystyren jako náhradní náplň do sedacích
            vaků. Pro tento účel třídíme a zpracováváme zcela čistý
            polystyren, aby mezi kuličkami nevznikal prach a nečistoty.
          </Text>
          <HeadingWithIcon icon={<SiGumtree style={{ color: "#fff", fontSize: "2em" }}/>}>Zahrádkářství</HeadingWithIcon>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
          Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy k jejímu odlehčení.
          </Text>
          <HeadingWithIcon icon={<BsSnow style={{ color: "#fff", fontSize: "2em" }}/>}>Zábavní průmysl</HeadingWithIcon>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
          Sypaný polystyren používají filmaři, organizátoři zábavných akcí, divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro děti - náhrada vody v bazénu.
          </Text>
          <Text
        element="h3"
        size="xl"
        sx={{
          fontWeight: 600,
          color: "#487b63",
          fontSize: "2em",
        }}
      >
        A další
      </Text>
          <Text size="xl" element="p" sx={{ fontWeight: 400, color: "" }}>
          Sypaný polystyren používají různé společnosti k vyplnění balíků s křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s křišťálovým lustrem nebo s pivem do Indie.

          </Text>
          
        </div>
        <div style={{ minWidth: "30%", marginTop: "auto", marginBottom: "5vh" }}>
          <Image
            src="/images/podlaha.jpg"
            layout="responsive"
            width="100px"
            height="100px"
            style={{ borderRadius: "3px" }}
          />
        </div>
      </div>
    )
}