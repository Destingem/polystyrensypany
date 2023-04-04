import { Table, Text } from "@mantine/core";
import Link from "next/link";
import MainScreen from "../UI/DefaultScreen";
import Footer from "../UI/Footer";

export default function CenikMobile(props) {
    let {device, ceniky} = props
    let h1Sx = { textAlign: device !== "laptop" ? "center" : "left", fontSize: "1.5rem", color: "#487b61" }
    let pSx = device !== "laptop" ? { padding: "0 5vw" } : { textAlign: "left" }
    console.log(props);
  return (
    <>
      <MainScreen
        label="Ceník"
        image="/images/bily_c.png"
        device={device ? device : "mobile"}
      />
      <div style={device == "laptop" ? {padding: "0 10vw", textAlign: "left"}: {}}>
        <Text
          component="h1"
          style={h1Sx}
        >
          Polystyren sypaný - standardní ceník
        </Text>
        <Table striped>
          <tbody>
            <tr
              style={{
                backgroundColor: "rgba(50, 123, 98, 1)",
                color: "white",
              }}
            >
              <td>Název:</td> <td>Objem</td> <td>Cena bez DPH</td>
              <td>Cena s DPH</td>
            </tr>
            {ceniky.map((cenik) => {
              if(cenik.attributes.standardni_cenik_x_zapujcka_stroje == true || !cenik.attributes.radek_tabulky){
                return
              }
              return cenik.attributes.radek_tabulky.map((radek) => {
                return (
                  <tr key={radek.id}>
                    <td>{radek.nazev}</td>
                    <td>{radek.Objem}</td>
                    <td>{radek.cena_bez_dph}</td>
                    <td>{radek.cena_s_dph}</td>
                  </tr>
                );
              })
            })}
           
          </tbody>
        </Table>
        <Text
          component="h2"
          style={h1Sx}
        >
          Cena zápůjčky stroje vč. příslušenství
        </Text>
        <Table striped>
          <tbody>
            <tr
              style={{
                backgroundColor: "rgba(50, 123, 98, 1)",
                color: "white",
              }}
            >
              <td>Množství sypaného polystyrenu</td> <td>Cena bez DPH</td>
              <td>Cena s DPH</td>
            </tr>
            {ceniky.map((cenik) => {
              if(cenik.attributes.standardni_cenik_x_zapujcka_stroje == false || !cenik.attributes.radek_tabulky){
                return
              }
              return cenik.attributes.radek_tabulky.map((radek) => {
                return (
                  <tr key={radek.id}>
                    <td>{radek.nazev}</td>
                    <td>{radek.cena_bez_dph}</td>
                    <td>{radek.cena_s_dph}</td>
                  </tr>
                );
              })
            })}
          </tbody>
        </Table>
        <Text
          component="h2"
          style={h1Sx}
        >
          Cena dopravy
        </Text>
        <Text component="p" style={pSx}>
          Dopravu se snažíme zajistit vždy co nejlevněji. Konkrétní cenu Vám
          můžeme sdělit na základě dotazu, který nám pošlete na {" "}
          <Link href="mailto:info@polystyrensypany.cz">
            info@polystyrensypany.cz
          </Link>{" "}
          nebo vyplňte <Link href="/poptavka_form">poptávkový formulář</Link>
        </Text>
        <Text component="h2" style={h1Sx}>Polystyren sypaný - dodací lhůty</Text>
        {props.dodaciLhuty && <Text component="p" style={pSx}>
            {props.dodaciLhuty.attributes.text}
        </Text>}
      </div>
      <Footer />
    </>
  );
}
