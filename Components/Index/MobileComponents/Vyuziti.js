import styles from "./IndexMobile.module.css";
import {Text, Button} from '@mantine/core';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineRight } from "react-icons/ai";

export default function Vyuziti(){

    return(
        <div className={styles.fifthSection}>
        <Text size="xl" weight={600} sx={{ color: "black", fontSize: "10vw", color: "#545454" }}>
          Využití
        </Text>
        <Splide hasTrack={false}  options={{width: "100%", rewind: "true", arrows: "false"}}>
       <SplideTrack>
       <SplideSlide className={styles.slide}>
              
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
              </SplideSlide>
              <SplideSlide className={styles.slide}>
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
              </SplideSlide>
              <SplideSlide className={styles.slide}>
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
              </SplideSlide>
             <SplideSlide className={styles.slide}>
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
              </SplideSlide>
              <SplideSlide className={styles.slide}>
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
              </SplideSlide>
       </SplideTrack>
       <div className="splide__arrows">
    <Button sx={{marginTop: "11vh", backgroundColor: "#e5e5e5 !important", opacity: "1 !important", fill: "white !important",}} className="splide__arrow splide__arrow--prev"><AiOutlineRight /></Button>
    <Button sx={{marginTop: "11vh", backgroundColor: "#e5e5e5 !important", opacity: "1 !important", fill: "white !important",}} className="splide__arrow splide__arrow--next"><AiOutlineRight /></Button>
  </div>
  <div className="splide__progress">
    <div className="splide__progress__bar" />
  </div>
        </Splide>
      </div>
    )
}