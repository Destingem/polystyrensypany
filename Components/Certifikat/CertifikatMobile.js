import MainScreen from "../UI/MainScreenMobile";
import { Text, List, ListItem } from "@mantine/core";
import Link from "next/link";
import Footer from "../UI/Footer";
export default function CertifikatMobile() {
  return (
    <div>
      <MainScreen
        label="Certifikáty"
        image="/images/polystyren_jemny_detail2.png"
      />
      <div
        style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
          textAlign: "center",
        }}
      >
        <Text size="xl" weight={700} sx={{ color: "#545454", fontSize: "8vw" }}>
          Protokoly o zkouškách a stavebně technické osvědčení
        </Text>
        <List>
          <ListItem>
            <Link href="/images/certifikat.pdf">
              Protokol o zkoušce tepelné vodivosti - 3 strany
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/Protokol_o_zkousce.pdf">
              Protokol o zkoušce objemové hmotnosti a vlhkosti - 3 strany
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/Prohlaseni_o_vlastnostech.pdf">
              Prohlášení o vlastnostech
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/tech_list.pdf">
              Technický list - Polystyren sypaný
            </Link>
          </ListItem>
        </List>
        <Text size="xl" weight={700} sx={{ color: "#545454", fontSize: "8vw" }}>
          Netechnické certifikace
        </Text>
        <ListItem>
          <Link href="/images/certifikat_proverena_spolecnost.pdf">
            Certifikát - Prověřená společnost
          </Link>
        </ListItem>
      </div>
      <Footer />
    </div>
  );
}
