import { List, ListItem, Space, Text } from "@mantine/core";
import SubHeading1 from "../UI/SubHeading1";
import Footer from "../UI/Footer";
import Link from "next/link";
import DefaultScreen from "../UI/DefaultScreen";
export default function RecyklaceMobile(props) {
  let { device } = props;
  const pointy = [
    "Naším způsobem zpracování vracíme polystyren zpět do stavebnictví jako plnohodnotnou tepelnou izolaci",
    "Likvidaci polystyrenu provádíme zdarma",
    "Odebíráme zbytkový stavební polystyren, který nemusí být úplně čistý, ale nesmí obsahovat velké množství lepenky, tmelů, lepidel a ocelové předměty",
    "Stavební polystyren musí být vyroben po 1.5.2015 dle normy kvality - značení a minimální požadavky na desky z expandovaného polystyrenu určeného pro použití ve stavebnictví č. EPS 001/15",
    "Polystyrenový odpad k recyklaci přijímáme ve velkoobjemových pytlích, kartonech či igelitových pytlích",
    "Při prvním nebo jednorázovém odběru odpadu požadujeme základní informace od původce odpadu, tzv. základní popis odpadu",
    "Odvoz odpadu na naši provozovnu si původce odpadu zajišťuje sám",
    "Před samotnou dodávkou vždy zavolat předem",
    "Vystavení písemného potvrzení o každé dodávce přijatého odpadu je samozřejmostí",
  ];
  return (
    <div>
      <DefaultScreen label="Recyklace" image="/images/polystyrenovy_odpad.png" device={device} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
          height: "fitContent",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "rgb(33, 106, 85)",
            fontSize: "1.5rem",
            marginRight: "auto",
            marginLeft: device === "laptop" ? "auto" : "0",
            textAlign: device !== "laptop" ? "left" : "center",
          }}
        >
          Recyklace se stala běžnou součástí života a my jsme rádi, že i my
          můžeme přispět
        </Text>
        {device === "laptop" && <Space h="xl" />}
        <List
          center
          icon={ <div style={{backgroundColor: "#216a55", borderRadius: "", aspectRatio: 1, width: device === "laptop" ? "2vw" : "5vw", justifyContent:  "center", alignItems: "center", display: "flex", minWidth: "10%"}} />}
          sx={{ textAlign: "left" }}
          spacing={device === "laptop" ? "xl" : ""}
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
                      margin: device === "laptop" ? "0" : "2vh 5vw 2vh 5vw",
                    }}
                  >
                    {item}
                  </Text>
                </ListItem>
              );
            })}
        </List>
        <Space h="xl" />
       <div style={{display: "flex"}}>
      <div>
      <SubHeading1 device={device}
          
        >
          Dokumenty
        </SubHeading1>
        <a
          href="/documents/ZPO_vzor_170604.xls"
          download={"ZPO_vzor_170604.xls"}
        >
          <Text
            weight={600}
            size="xl"
            sx={{
              color: "rgb(25, 95, 0)",
              fontSize: "1rem",
              textAlign: device !== "laptop" ? "center" :"left",
            }}
          >
            Vzor pro stavební firmy
          </Text>
        </a>
        <Text
          weight={400}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "0.8rem",
            textAlign: device !== "laptop" ? "center" :"left",
          }}
        >
          <em>
            {" "}
            Před první dodávkou odpadu je nutné vyplnit a podepsat základní
            popis odpadu, který se podepisuje 1x ročně. Před vyplněním si
            formulář nejprve uložte na disk.
          </em>
        </Text>
        <a
          href="/documents/rozhodnuti_2020.pdf"
          download={"rozhodnuti_2020.pdf"}
        >
          <Text
            weight={600}
            size="xl"
            sx={{
              color: "rgb(25, 95, 0)",
              fontSize: "1rem",
              textAlign: device !== "laptop" ? "center" :"left",
            }}
          >
            Povolení Magistrátu hlavního města Prahy nakládání s odpady
          </Text>
        </a>
        <Text
          size="xl"
          weight={700}
          sx={{
            color: "#545454",
            fontSize: device !== "laptop" ? "3rem" : "2rem",
            textAlign: device !== "laptop" ? "center" :"left",
            marginBottom: "2vh",
          }}
        >
          Kde?
        </Text>
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1rem",
            textAlign: device !== "laptop" ? "center" :"left",
          }}
        >
          Polystyrenový odpad k recyklaci přijímáme na adrese naší provozovny
          
        </Text>
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1rem",
            textAlign: device !== "laptop" ? "center" :"left",
          }}
        >
        <Link href="/kontakty">  Štěpánovská 330 19017 Praha 9 – Vinoř</Link>
          
        </Text>
      </div>
      {device == "laptop" && <div class="gmap_canvas" style={{ height: "100%", alignItems: "center", display: "flex", flexDirection: "column", marginLeft: "auto"}}>
            <iframe
            title="mapa"
              style={{ borderRadius: "3px" }}
              width={window.innerWidth * 0.3}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%C5%A0t%C4%9Bp%C3%A1novsk%C3%A1%20330%2019017%20Praha%209%20%E2%80%93%20Vino%C5%99&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>}
       </div>
        
      </div>
      {device !== "laptop" && <div class="gmap_canvas" style={{width: "100%", height: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <iframe
            title="mapa"
              style={{ borderRadius: "3px" }}
              width={window.innerWidth}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%C5%A0t%C4%9Bp%C3%A1novsk%C3%A1%20330%2019017%20Praha%209%20%E2%80%93%20Vino%C5%99&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>}
      <Footer />
    </div>
  );
}
