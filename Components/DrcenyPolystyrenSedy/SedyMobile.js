import Footer from "../UI/Footer";
import MainScreen from "../UI/MainScreen";
import {Text, List, ListItem, Grid, Button} from "@mantine/core"
import Image from "next/image";
import {BsCircle} from "react-icons/bs";
import Link from "next/link";
export default function SedyMobile(props) {
    let {device} = props;
    const items = ["tepelná vodivost od 0,031W/mk",
    "tepelný odpor R= od 3,15 při zásypu 10cm"]
    return (
        <div>
        <MainScreen label="EPS Sedy" image="/images/sedy_c.png" device={device} />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto",marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný, drcený - EPS šedý
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Polystyren sypaný EPS šedý obsahuje grafit, který odráží teplo zpět k jeho zdroji a tak zvyšuje izolační účinek. Šedý polystyren je vhodný pro dodatečné zateplení starších domů, pasivních a nízkoenergetických domů.U této izolace jsou deklarovány lepší tepelně izolační vlastnosti.
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Možnosti použití a aplikace jsou shodné jako u bílého EPS.


            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Při aplikaci a skladování je nutné se vyhnout přímému slunečnímu záření.
            </Text>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný EPS šedý - tepelné vlastnosti
            </Text>
            <List spacing="xs"
          center
          icon={<BsCircle color="rgb(25, 95, 0)" />}
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
            <Link href="/poptavka_form"><Button type="submit" variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "20%" , marginTop: "3vh", marginLeft: "auto" }}>Poptat EPS polystyren šedý</Button></Link>
            {device !== "laptop" ? <><Image src="/images/sedy.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
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