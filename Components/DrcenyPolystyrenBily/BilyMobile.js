
import Footer from "../UI/Footer";
import {Text, List, ListItem, Grid, Button, Space} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import SortimentVyuziti from "../Sortiment/SortimentVyuziti";
import Heading from "../UI/Heading";
import DefaultScreen from "../UI/DefaultScreen";
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
    
    return (
        <div>
        <DefaultScreen  label="Polystyren sypaný - EPS bílý" device={device} />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
           
            
            <Heading device={device}>
            Polystyren sypaný EPS bílý - základní vlastnosti
            </Heading>
            {device !== "laptop" &&   <List
                spacing="xs"
          center
          icon={ <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: "4vw", justifyContent:  "center", alignItems: "center", display: "flex", minWidth: "10%"}} />}
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
          icon={ <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: "1vw", justifyContent:  "center", alignItems: "center", display: "flex", minWidth: "10%"}} />}
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
       <Image src="/images/bily.jpg" height={300} width={400} layout={"responsive"} />
       </div>
        </div>}
        <Space h="xl" />   
       <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh"}}>
       <Heading weight={600} size="xl" device={device} style={{marginRight: device == "laptop" ? "auto" : ""}}>
                Využití
                </Heading>
            
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
            <Image src="/images/Polystyren_sypany_bily.jpg" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            </Grid>}
        </div>
        <Footer />
        </div>
    );
    }