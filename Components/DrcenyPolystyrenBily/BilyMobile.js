import MainScreen from "../UI/MainScreen";
import Footer from "../UI/Footer";
import {Text, List, ListItem, Grid, Button} from "@mantine/core";
import Image from "next/image";
import {BsCircle} from "react-icons/bs"
import Link from "next/link";
export default function BilyMobile(props) {
    let {device} = props;
    const items = ["zrnitost 0,5-2mm", "váha cca 5kg/300l/1 pytel"]
    return (
        <div>
        <MainScreen label="EPS Bílý" image="/images/bily_c.png" />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný - jemný EPS 
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Možnosti využití: Vysypání otvorů dutých cihel (HELUZ, POROTHERM a další) zlepšuje tepelněizolační vlastnosti obvodového zdiva.
            </Text>
            
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný EPS Bílý - základní vlastnosti
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
           <Link href="/poptavka_form"><Button type="submit" variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "20%" , marginTop: "3vh", marginLeft: "auto" }}>Poptat EPS polystyren bílý</Button></Link>
            {device !== "laptop" ? <><Image src="/images/bily.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
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