import MainScreen from "../UI/MainScreen";
import {Button, Space, Table, Text } from "@mantine/core";
import BasicText from "../UI/BasicText";
import SubheaderText from "../UI/SubheaderText";
import Footer from "../UI/Footer";
import Link from "next/link";
import DefaultScreen from "../UI/DefaultScreen";
import Image from "next/image";
export default function FoukanaIzolaceMobile(props) {
  let { device, ceniky } = props;
  if (device == undefined) {
    device = "mobile";
  }
  return (
    <div>
      <DefaultScreen
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
       <div style={{display: "flex", flexDirection: device !== "mobile" ? "row" : "column"}}>
        <div>
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
        </div>
        <div style={{maxWidth: device !== "mobile" ? "25%" : "100%", padding: "5vh 2vw", display: "flex", flexDirection: device !== "mobile" ? "column" : "row", gap: "1vw"}}><Image src="/images/foukani_strop.png" alt="Zafoukávání stropu polystyrenem" width={600} height={600}/> <Image src="/images/foukani_pricka.png" alt="Zafoukávání půdy polystyrenem" width={600} height={600}/></div>
       </div>
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
        <Link href="/ceny#foukana-izolace"><Button variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "15%" , marginTop: "3vh", marginLeft: "auto" }}>Ceník</Button></Link>
      </div>
      <Footer />
    </div>
  );
}
