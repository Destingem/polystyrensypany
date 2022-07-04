import MainScreen from "../UI/MainScreenMobile";

import {Text, List, ListItem} from "@mantine/core";
import Image from "next/image";
import Footer from "../UI/Footer";
import {BsCircle} from "react-icons/bs";
export default function XPSMobile() {
    const items = ["zrnitost sypaného polystyrenu XPS je 5 až 10mm",
   " tepelná vodivost od 0,032 do 0,033W/mk",
    "tepelný odpor R= od 2,75 při zásypu 10cm",
    "žádná nasákavost vlhkosti"]
    return (
        <div>
        <MainScreen label="XPS" image="/images/barevny_c.png" />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
            Polystyren sypaný, drcený - XPS
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: "auto", textAlign: "left" }}>
            Polystyren sypaný XPS (extrudovaný) je vodě odolný. Tuto izolaci doporučujeme pod úroveň terénu - zasypání drenážních trubek, zásyp do podlahy, izolace okolo bazénů.
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: "auto", textAlign: "left" }}>
            Výroba extrudovaného sypaného polystyrenu je náročnější než u standardního EPS polystyrenu, proto je i cena vyšší


            </Text>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
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
            
            <Image src="/images/barevny.png" layout="responsive" width={4} height={3} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
            <Image src="/images/XPS_pytel.png" layout="responsive" width={299} height={448} sx={{ width: "100%", height: "auto", marginRight: "auto", marginLeft: "auto", textAlign: "center" }} />
        </div>
        <Footer />
        </div>
    );
    }