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
              style={{ display: "block", minWidth: "60%", minHeight: "100%" }}
            >
              {" "}
              <Image
                src="/images/logo_stranky.jpg"
                width={94}
                height={23}
                
                alt="logo"
                layout="responsive"
              />
            </div>
          
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
              <Link href="/o_nas">
            <MenuItem>
                <p>O nás</p>
            </MenuItem>
              </Link>
            <Divider />
            <Link href="/certifikat">
            <MenuItem>
              <p>Certifikáty</p>
            </MenuItem>
            </Link>
            <Link href="/partneri">
            <MenuItem>
              <p>Partneři</p>
            </MenuItem>
            </Link>
            <Link href="/hodnoceni">
            <MenuItem>
              <p>Hodnocení zákazníky</p>
            </MenuItem>
            </Link>
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
          <Link href="/sortiment">
            <MenuItem>
            
              <p> Přehled sortimentu</p>
            
            </MenuItem>
            </Link>
            <Divider />
            <Menu.Label>Produkty</Menu.Label>
            <Link href="/drcenypolystyren-bily">
            <MenuItem>
           
              <p> Polystyren sypaný - EPS bílý</p>
            </MenuItem>
            </Link>
            <Link href="/eps-jemny">
            <MenuItem>
              <p> Polystyren sypaný - EPS jemný</p>
            </MenuItem>
            </Link>
            <Link href="/drcenypolystyren-sedy">
            <MenuItem>
              <p>Polystyren sypaný - EPS šedý</p>
            </MenuItem>
            </Link>
            <Link href="/drcenypolystyren-XPS">
            <MenuItem>
              <p> Polystyren sypaný - XPS</p>
            </MenuItem>
            </Link>
            <Divider />
            <Menu.Label>Služby</Menu.Label>

            <Link href="/foukana-izolace">
            <MenuItem>
              <p>Foukaná izolace</p>
            </MenuItem>
            </Link>
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
