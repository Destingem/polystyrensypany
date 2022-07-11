import Footer from "../UI/Footer"
import MainScreen from "../UI/MainScreen"
import {List, ListItem, Text, Grid, Paper, Space, Box} from "@mantine/core"
import {BsCircle } from "react-icons/bs"
import IndexDivider from "../UI/IndexDivider"
import Link from "next/link"
import SortimentVyuziti from "./SortimentVyuziti"
import SortimentSortiment from "./SortimentSortiment"
import Image from "next/image"
export default function SortimentMobile(props){
  let {device} = props
  let headingSx =  device !== "laptop" ? { color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" } : { color: "#545454", fontSize: "3rem", textAlign: "left", marginRight:"auto" }
  let labelSx = device !== "laptop" ? {
    color: "#fff",
    fontSize: "10vw",
    marginTop: "0vh",
    padding: "",
  }: {
    color: "#fff",
    fontSize: "3rem",
    marginTop: "0vh",
    padding: "",
    position: "absolute",
    marginLeft: "auto",
    cursor: "pointer",
  }
  const pointy = ["zrnitost sypaného polystyrenu je 1 až 6mm",
    "tepelná vodivost od 0,034 do 0,039W/mk",
    "tepelný odpor R= od 2,64 do 3 při zásypu 10cm",
    "vyvážená vnitřní a vnější regulace teploty díky vzduchu mezi kuličkami",
    "nevytváří tepelné mosty",
    "nepodporuje hoření",
    "výborná zvuková izolace",
    "na 100% vyplní i špatně dostupné prostory",
    "téměř žádná nasákavost vlhkosti",
    "je lehký nezatěžuje konstrukci domu",
    "stavba nebo zateplený prostor dýchá a netvoří se plísně",
    "znemožňuje uhnízdění hlodavců",
    "příjemný na dotyk",
    "cenově dostupný"]
    return(
        <div>
            <MainScreen label="Sortiment" image="/images/bily_c.png" device={device} />
            <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", height: "fitContent", width: "100%", textAlign: "center" }}>
                <Text weight={600} size="xl" sx={headingSx}>
                Polystyren sypaný - základní vlastnosti
                </Text>
                {device === "laptop" && <Space h="xl" />}
              {device !== "laptop" &&   <List
                spacing="xs"
          center
          icon={<BsCircle color="rgb(25, 95, 0)" />}
          sx={{ textAlign: "left" }}
        >
          {pointy &&
            pointy.map((item, index) => {
              return (
                <ListItem icon={item.icon}>
                  <Text
                    weight={400}
                    size="xl"
                    sx={{
                      color: "#545454",
                      fontSize: "1rem",
                      margin: "0 5vw 0 5vw",
                    }}
                  >
                    {item}
                  </Text>
                </ListItem>
              );
            })}
        </List>}
        {device === "laptop" && <div style={{display: "flex", justifyContent: "space-between"}}>
        <List
                spacing={"xs"}
          center
          icon={<BsCircle color="rgb(25, 95, 0)" />}
          sx={{ textAlign: "left" , width: "50%"}}
        >
          {pointy &&
            pointy.map((item, index) => {
              return (
                <ListItem icon={item.icon}>
                  <Text
                    weight={400}
                    size="xl"
                    sx={{
                      color: "#545454",
                      fontSize: "1rem",
                      margin: "0 5vw 0 5vw",
                    }}
                  >
                    {item}
                  </Text>
                </ListItem>
              );
            })}
        </List>
       <div style={{width: "40%", height: "60%"}}>
       <Image src="/images/sedy.png" height={300} width={400} layout={"responsive"} />
       </div>
        </div>}
        <Space h="xl" />   
       <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh"}}>
       <Text weight={600} size="xl" sx={headingSx}>
                Využití
                </Text>
            
            <SortimentVyuziti device={device} />
     
       </div>
     <SortimentSortiment device={device} headingSx={headingSx} labelSx={labelSx}/>
                </div>
            <Footer />
        </div>
    )
}