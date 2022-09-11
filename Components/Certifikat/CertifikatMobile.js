import MainScreen from "../UI/MainScreen";
import DefaultScreen from "../UI/DefaultScreen";
import { Text, List, ListItem, Space } from "@mantine/core";
import Link from "next/link";
import Footer from "../UI/Footer";
import { AiOutlineLink } from "react-icons/ai";
export default function CertifikatMobile(props) {
  let {device} = props;
  let headerSx = device !== "tablet" ? device !== "laptop" ? {color: "#545454", fontSize: "2rem", fontWeight: "700" } : {color: "#545454", fontSize: "3rem", fontWeight: "500", textAlign: "left"} : {color: "#545454", fontSize: "2rem", fontWeight: "500", textAlign: "center"};
  return (
    <div>
      <DefaultScreen
        label="Certifikáty"
        image="/images/polystyren_jemny_detail2.png"
        device={props.device}
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
        <Text size="xl"  sx={headerSx}>
          Protokoly o zkouškách a stavebně technické osvědčení
        </Text>
        <List sx={device !== "laptop" ? {}: {textAlign: "left", color: "#545454", fontWeight: "400"} } icon={<Space h={0} />}>
          <ListItem>
            <Link href="/images/certifikat.pdf">
              <Text class="link" component="p">Protokol o zkoušce tepelné vodivosti - 3 strany <AiOutlineLink/> </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/Protokol_o_zkousce.pdf">
              <Text class="link" component="p">Protokol o zkoušce objemové hmotnosti a vlhkosti - 3 strany <AiOutlineLink/> </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/Prohlaseni_o_vlastnostech.pdf">
              <Text class="link" component="p">Prohlášení o vlastnostech <AiOutlineLink/> </Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/images/tech_list.pdf">
              <Text class="link" component="p">Technický list - Polystyren sypaný <AiOutlineLink/> </Text>
            </Link>
          </ListItem>
        </List>
        <Text size="xl" weight={700} sx={headerSx}>
          Netechnické certifikace
        </Text>
        <ListItem sx={device !== "laptop" ? {}: {textAlign: "left", color: "#545454", fontWeight: "400"} } icon={<Space h={0} />}>
          <Link href="/images/certifikat_proverena_spolecnost.pdf">
            <Text class="link" component="p">Certifikát - Prověřená společnost <AiOutlineLink/> </Text>
          </Link>
        </ListItem>
        <Space h={3} />
      </div>
      <Footer />
    </div>
  );
}
