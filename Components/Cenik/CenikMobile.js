import { Table, Text } from "@mantine/core";
import Link from "next/link";
import MainScreen from "../UI/DefaultScreen";
import Footer from "../UI/Footer";

export default function CenikMobile(props) {
    let {device} = props
    let h1Sx = { textAlign: device !== "laptop" ? "center" : "left", fontSize: "1.5rem", color: "#487b61" }
    let pSx = device !== "laptop" ? { padding: "0 5vw" } : { textAlign: "left" }
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
            <tr>
              <td>
                <Link href="/drcenypolystyren-bily">
                  Polystyren sypaný - EPS bílý
                </Link>
              </td>
              <td>1m3</td> <td>1200,-Kč</td>
              <td>1452,-Kč</td>
            </tr>
            <tr>
              <td>
                <Link href="/eps-jemny">
                  Polystyren sypaný - EPS bílý(1pytel)
                </Link>
              </td>
              <td>300l</td> <td>360,-Kč</td>
              <td>436,-Kč</td>
            </tr>
            <tr>
              <td>
                <Link href="/drcenypolystyren-sedy">
                  Polystyren sypaný - EPS šedý-grafitový
                </Link>
              </td>
              <td>1m3</td> <td>1500,-Kč</td>
              <td>1815,-Kč</td>
            </tr>
            <tr>
              <td>
                <Link href="/drcenypolystyren-sedy">
                  Polystyren sypaný - EPS šedý-grafitový(1pytel)
                </Link>
              </td>
              <td>300l</td> <td>450,-Kč</td>
              <td>545,-Kč</td>
            </tr>

            <tr>
              <td>
                <Link href="/eps-jemny">
                  Polystyren sypaný - EPS jemný (1pytel)
                </Link>
              </td>
              <td>300l</td> <td>900Kč</td>
              <td>1089,-Kč</td>
            </tr>
            <tr>
              <td>
                <Link href="/drcenypolystyren-XPS">
                  Polystyren sypaný - XPS (1pytel)
                </Link>
              </td>
              <td>300l</td> <td>900Kč</td>
              <td>1089,-Kč</td>
            </tr>
          </tbody>
        </Table>
        <Text
          component="h1"
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

            <tr>
              <td>do 20,10m3</td> <td>800,-Kč</td>
              <td>968,-Kč</td>
            </tr>
            <tr>
              <td>20,11 - 45,00m3</td> <td>1.600,-Kč</td>
              <td>1.936,-Kč</td>
            </tr>
            <tr>
              <td>45,01 - 79,80m3</td> <td>2.400,-Kč</td>
              <td>2.904,-Kč</td>
            </tr>
            <tr>
              <td>nad 79,81m3</td> <td>individuální</td>
              <td>individuální</td>
            </tr>
          </tbody>
        </Table>
        <Text
          component="h1"
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
        <Text component="h1" style={h1Sx}>Polystyren sypaný - dodací lhůty</Text>
        <Text component="p" style={pSx}>
        Díky velkému počtu poptávek po sypaném polystyrenu máme materiál již pátým rokem na pořadník, z tohoto důvodu musíme dávat přednost klientům, kteří si sypaný polystyren závazně objednali. Abychom každému mohli vyjít vstříc, bylo by ideální, když budeme o vašem požadavku na sypaný polystyren vědět, alespoň 10dnů předem.
        </Text>
      </div>
      <Footer />
    </>
  );
}
