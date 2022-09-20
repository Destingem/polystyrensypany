import styles from "./IndexMobile.module.css";
import {Text, Button} from '@mantine/core';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiOutlineRight } from "react-icons/ai";

export default function Vyuziti(props){
let {vyuziti} = props
console.log(vyuziti);
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
                 {vyuziti.attributes.Stavebnictvi}
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
         {vyuziti.attributes.Nabytkarsky_prumysl}
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
               {vyuziti.attributes.Zahradkarstvi}
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
                 {vyuziti.attributes.Zabavni_prumysl}
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
                 {vyuziti.attributes.Dalsi}
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