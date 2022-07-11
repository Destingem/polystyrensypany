import MainScreen from "../UI/MainScreen";
import {Button, Space, Table, Text } from "@mantine/core";
import BasicText from "../UI/BasicText";
import SubheaderText from "../UI/SubheaderText";
import Footer from "../UI/Footer";
import Link from "next/link";
export default function FoukanaIzolaceMobile(props) {
  let { device } = props;
  return (
    <div>
      <MainScreen
        label="Foukaná Izolace"
        image="/images/polystyrenestructure.jpg"
        device={device}
      />
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
        <BasicText device={device}>
          Foukaná izolace patří mezi nejefektivnější variantu aplikace tepelných
          izolací. Foukaná izolace je vhodná k zateplení různých částí domu.
        </BasicText>
        <Space h="xl" />
        <SubheaderText device={device}>
          Foukaná izolace - izolační materiál
        </SubheaderText>

        <BasicText device={device}>
          Pro foukanou izolaci používáme sypanou tepelnou izolaci. Polystyren
          sypaný je lehký, nezatěžuje konstrukce domu, má skvělé izolační
          vlastnosti, rychle ustupuje od ložiska ohně a nechutná hlodavcům viz
          další vlastnosti a přednosti.
        </BasicText>
        <Space h="xl" />
        <SubheaderText device={device}>
          Foukaná izolace - možnosti použití
        </SubheaderText>
        <BasicText device={device}>
          Foukaná izolace lze použít do všech typů staveb od novostaveb,
          starších domů, dřevostaveb, nízkoenergetických a pasivních domů po
          haly, garáže a ostatní stavby.
        </BasicText>
        <BasicText device={device}>
          Polystyren sypaný lze zafoukat do dutin v půdních prostorech, stropů,
          podlah, obvodových stěn, mezi krokve šikmých střech atd. Nemusíte
          složitě překládat střechu, stačí pouze vytvořit tzv. kapsu z netkané
          textílie, aby se izolace nevyfoukala ven.
        </BasicText>
        <Space h="xl" />
        <SubheaderText device={device}>Foukaná izolace - cena</SubheaderText>
        <BasicText device={device}>
          Aplikaci foukané izolace Vám zajistíme u našich partnerů. Cena za
          aplikaci foukané izolace se skládá z ceny potřebného množství sypaného
          polystyrenu a z ceny za práci. Cena za práci se stanovuje individuálně
          na základě pracnosti zakázky.
        </BasicText>

        <BasicText device={device}>
          Máte-li zájem o foukanou izolaci pošlete nám poptávku přes <Link href="poptavka_form">poptávkový
          formulář</Link> a do kolonky "další specifikace poptávky“ napiště jednoduše
          foukaná izolace. Nebo stačí napsat dotaz na <a href="mailto:info@polystyrensypany.cz">info@polystyrensypany.cz</a>.
          Váš požadavek předáme našim partnerům, kteří Vám vypracují kalkulaci
          na foukanou izolaci dle vašich konkrétních požadavků.
        </BasicText>
        <Space h="xl" />
        <SubheaderText device={device}>
          Foukaná izolace - svépomocí
        </SubheaderText>
        <BasicText device={device}>
          Foukaná izolace svépomocí je pro každého, kdo si chce provést
          zateplení sám.Tento způsob zateplení Vám přinese značnou úsporu
          nákladů. Nabízíme Vám zápůjčku foukacího stroje včetně příslušenství a
          zaškolení k aplikaci foukané izolace svépomocí.
        </BasicText>
        <Space h="xl" />
        <Text  weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1.5rem",
            
       
            textAlign: "center",
          }}>
          Cena zápůjčky stroje vč. příslušenství
        </Text>
        <Space h="xl" />
        <Table sx={device !== "laptop" ? {} : {width: "60%", height: "40vh", marginLeft: "auto", marginRight: "auto"}}>
          <thead>
            <tr>
              <th>Množství sypaného polystyren</th>
              <th>Cena bez DPH</th>
              <th>Cena s DPH</th>
            </tr>
          </thead>
          <tbody style={{ color: "#545454", fontWeight: "400" }}>
            <tr>
              <td>do 20,10m3</td>
              <td>800,-Kč </td>
              <td>968,-Kč</td>
            </tr>
            <tr>
              <td>20,11 - 45,00m3</td>
              <td>1.600,-Kč</td>
              <td>1.936,-Kč</td>
            </tr>
            <tr>
              <td>45,01 - 79,80m3</td>
              <td>2.400,-Kč</td>
              <td>2.904,-Kč</td>
            </tr>
            <tr>
              <td>nad 79,81m3</td>
              <td>neděle</td>
              <td>neděle</td>
            </tr>
          </tbody>
        </Table>
        <Link href="/poptavka_form"><Button type="submit" variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "20%" , marginTop: "3vh", marginLeft: "auto" }}>Poptat foukanou izolaci</Button></Link>
      </div>
      <Footer />
    </div>
  );
}
