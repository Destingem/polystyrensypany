import Footer from "../UI/Footer";
import DefaultScreen from "../UI/DefaultScreen";
import {Text, List, ListItem, Grid, Button} from "@mantine/core"
import Image from "next/image";
import {BsCircle} from "react-icons/bs";
import Link from "next/link";
import Heading from "../UI/Heading";
export default function SedyMobile(props) {
    let {device} = props;
    const items = ["tepelná vodivost od 0,031W/mk",
    "tepelný odpor R= od 3,15 při zásypu 10cm"]
    return (
        <div>
        <DefaultScreen label="Polystyren sypaný - EPS šedý" device={device} />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
           <div style={{display: "flex", flexDirection: device !== "laptop" ? "column" : "row"}}>
            <div>
            <Heading device={device}>
            Polystyren sypaný, drcený - Polystyren sypaný - EPS šedý
            </Heading>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Polystyren sypaný Polystyren sypaný - EPS šedý obsahuje grafit, který odráží teplo zpět k jeho zdroji a tak zvyšuje izolační účinek. Šedý polystyren je vhodný pro dodatečné zateplení starších domů, pasivních a nízkoenergetických domů.U této izolace jsou deklarovány lepší tepelně izolační vlastnosti.
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Možnosti použití a aplikace jsou shodné jako u bílého EPS.


            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Při aplikaci a skladování je nutné se vyhnout přímému slunečnímu záření.
            </Text>
            <Heading device={device}>
            Polystyren sypaný Polystyren sypaný - EPS šedý - tepelné vlastnosti
            </Heading>
            <List spacing="xs"
          center
          icon={ <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: "2vw", justifyContent:  "center", alignItems: "center", display: "flex", minWidth: "10%"}} />}
          sx={{ textAlign: "left" }}>
            {items && items.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: "auto", textAlign: "left" }}>
                            {item}
                        </Text>
                    </ListItem>
                )
            })}
                
            </List>
            </div>
            <div style={{minWidth: "30%", marginTop: "auto", marginBottom: "auto"}}>
                <Image src="/images/sedy_zatepleni.jpg" layout="responsive" width={4} height={3} />
            </div>
           </div>
            <Link href="/ceny#polystyren-sypany-EPS-sedy"><Button variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "15%" , marginTop: "3vh", marginLeft: "auto" }}>Ceník</Button></Link>
            {device == "mobile" ? <><Image src="/images/sedy.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            <Image src="/images/sedy_pytel.png" layout="responsive" width={299} height={448} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} /></> : 
            <Grid sx={{justifyContent: "center"}}>
            <Grid.Col span={6}  sx={{maxWidth: "30% !important"}}>
            <Image src="/images/sedy.png" layout="responsive" width={640} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            <Grid.Col span={6} sx={{maxWidth: "30% !important"}}>
            <Image src="/images/sedy_pytel.png" layout="responsive" width={600} height={435} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            
            
            </Grid>}
        </div>
        <Footer />
        </div>
    );
    }