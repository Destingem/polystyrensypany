import MainScreen from "../UI/MainScreen";
import Footer from "../UI/Footer";
import {Text, List, ListItem, Grid, Button, Space} from "@mantine/core";
import Image from "next/image";
import {BsCircle} from "react-icons/bs"
import Link from "next/link";
import SortimentVyuziti from "../Sortiment/SortimentVyuziti";
export default function BilyMobile(props) {

    let {device} = props;
    const items = []
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
    return (
        <div>
        <MainScreen  polysyp={true} label="EPS bílý" image="/images/bily_c.png" device={device} />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
           
            
            <Text weight={600} size="xl" sx={headingSx}>
            Polystyren sypaný EPS bílý - základní vlastnosti
            </Text>
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
        
           <Link href="/ceny#polystyren-sypany-EPS-bily"><Button variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "15%" , marginTop: "3vh", marginLeft: "auto" }}>Ceník</Button></Link>
            {device == "mobile" ? <><Image src="/images/bily.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            <Image src="/images/EPS_bily.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            
            <Image src="/images/polystyren_jemny_detail.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            <Image src="/images/polystyren_jemny_detail2.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} /></>:
            <Grid>
            <Grid.Col span={4}>
            <Image src="/images/EPS_bily.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            <Grid.Col span={4}>
            <Image src="/images/polystyren_jemny_detail.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            <Grid.Col span={4}>
            <Image src="/images/polystyren_jemny_detail2.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            </Grid>}
        </div>
        <Footer />
        </div>
    );
    }