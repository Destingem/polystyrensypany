import MainScreen from "../UI/MainScreen";

import {Text, List, ListItem, Grid, Button} from "@mantine/core";
import Image from "next/image";
import Footer from "../UI/Footer";
import {BsCircle} from "react-icons/bs";
import Link from "next/link";
export default function XPSMobile(props) {
    let device = props.device;
    const items = ["zrnitost sypaného polystyrenu XPS je 5 až 10mm",
   " tepelná vodivost od 0,032 do 0,033W/mk",
    "tepelný odpor R= od 2,75 při zásypu 10cm",
    "žádná nasákavost vlhkosti"]
    return (
        <div>
        <MainScreen label="XPS" image="/images/barevny_c.png" device={device}  polysyp={true}/>
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto",marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný, drcený - XPS
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Polystyren sypaný XPS (extrudovaný) je vodě odolný. Tuto izolaci doporučujeme pod úroveň terénu - zasypání drenážních trubek, zásyp do podlahy, izolace okolo bazénů.
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Výroba extrudovaného sypaného polystyrenu je náročnější než u standardního EPS polystyrenu, proto je i cena vyšší


            </Text>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný XPS - základní vlastnosti
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
            <Link href="/ceny#polystyren-drceny-XPS"><Button variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "20%" , marginTop: "3vh", marginLeft: "auto" }}>Ceník pro XPS polystyren drcený</Button></Link>
            {device == "mobile" ? <><Image src="/images/barevny.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            <Image src="/images/XPS_pytel.png" layout="responsive" width={299} height={448} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} /></>
            : <Grid justify="center">
            <Grid.Col span={6} sx={{maxWidth: "25% !important", justifyContent: "center", marginTop: "auto", marginBottom: "auto"}}>
            <Image src="/images/barevny.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
           
            </Grid.Col>
            <Grid.Col span={6} sx={{maxWidth: "20% !important"}}>
            <Image src="/images/XPS_pytel.png" layout="responsive" width={299} height={448} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            </Grid.Col>
            </Grid> }
        </div>
        <Footer />
        </div>
    );
    }