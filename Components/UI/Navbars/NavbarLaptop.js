import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  Burger,
  Divider,
  Drawer,
  Grid,
  MediaQuery,
  Menu,
  MenuItem,
  Paper,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
export default function NavbarLaptop(props) {
  const [opened, handlers] = useDisclosure(false);
  const [opened2, handlers2] = useDisclosure(false);
  var [scroll, scrollTo] = useWindowScroll();

  return (
    <div
      className={styles.main_laptop}
      style={{
        backgroundColor: scroll.y > 0 && "rgba(84, 84, 84, 0.5)",
        position: "fixed",
        zIndex: "12000",
        transition: scroll.y > 0 ? "2s" : "0.5s",
      }}
    >
      <div className={styles.header_laptop}>
        <Link href="/">
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              cursor: "pointer",
              minWidth: "25%",
              padding: "2vh",
              gap: "5%",
            }}
          >
            <div
              style={{ display: "block", minWidth: "13%", minHeight: "100%" }}
            >
              {" "}
              <Image
                src="/images/finalLogo.png"
                width={100}
                height={100}
                style={{ aspectRatio: 1 }}
                alt="logo"
                layout="responsive"
              />
            </div>
            <Text
              color="#545454"
              weight={600}
              size="xl"
              sx={{ fontSize: "2rem", margin: 0, whiteSpace: "nowrap" }}
              component="h1"
            >
              Polystyren sypaný
            </Text>
          </div>
        </Link>
        <Grid
          sx={{
            margin: 0,
            width: "maxContent",
            gap: "5vh",
            paddingRight: "5%",
          }}
        >
          <Menu
          zIndex={13000}
            control={<p>O nás</p>}
            trigger="hover"
            delay={500}
            opened={opened}
            onOpen={() => {
              handlers2.close();
              handlers.open();
            }}
            onClose={handlers.close}
          >
            <MenuItem>
              <Link href="/o_nas">
                <p>O nás</p>
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
            <Link href="/certifikat">
              <p>Certifikáty</p>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link href="/partneri">
              <p>Partneři</p>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link href="/hodnoceni">
              <p>Hodnocení zákazníky</p>
            </Link>
            </MenuItem>
          </Menu>
          <Menu
           zIndex={13000}
            control={<p> Sortiment</p>}
            trigger="hover"
            delay={500}
            opened={opened2}
            onOpen={() => {
              handlers.close();
              handlers2.open();
            }}
            onClose={handlers2.close}
          >
            <MenuItem>
            <Link href="/sortiment">
              <p> Přehled sortimentu</p>
            </Link>
            </MenuItem>
            <Divider />
            <Menu.Label>Produkty</Menu.Label>
            <MenuItem>
            <Link href="/drcenypolystyren-bily">
              <p> EPS Bílý</p>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link href="/drcenypolystyren-sedy">
              <p>EPS Šedý</p>
            </Link>
            </MenuItem>
            <MenuItem>
            <Link href="/drcenypolystyren-XPS">
              <p> XPS</p>
            </Link>
            </MenuItem>
            <Divider />
            <Menu.Label>Služby</Menu.Label>

            <MenuItem>
            <Link href="/foukana-izolace">
              <p>Foukaná izolace</p>
            </Link>
            </MenuItem>
          </Menu>

          <Link href="/novinky">
            <p> Novinky</p>
          </Link>
          <Link href="/poptavka_form">
            <p>Poptávka</p>
          </Link>
          <Link href="/likvidace-recyklace">
            <p>Recyklace</p>
          </Link>
          <Link href="/kontakty">
            <p>Kontakty</p>
          </Link>
        </Grid>
      </div>
    </div>
  );
}
