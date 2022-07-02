import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Burger, Divider, Drawer, Grid, MediaQuery, Menu, Paper, Text } from "@mantine/core";
import Image from "next/image";
export default function NavbarTablet(props) {
    const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
  
    return(
        <div
        className={styles.main_mobile}
        style={{
          backgroundColor: props.backgroundColor,
          position: "fixed",
          zIndex: "12000",
        }}
      >
        <Link href="/">
          <div className={styles.header_tablet}>
          <div style={{display:"block", minWidth: "10%", minHeight: "100%"}}> <Image src="/images/finalLogo.png" width={100} height={100} style={{aspectRatio: 1 }}  alt="logo" layout="responsive"/></div>
            <Link href="/">
              <Text color="#545454" weight={600} size="xl" sx={{ fontSize: "2rem", margin: 0, whiteSpace: "nowrap" }} component="h1">Polystyren sypaný</Text>
            </Link>
            {/* sx={{cursor: "pointer"}}*/}
          </div>
        </Link>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
        {opened && (
          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Navigace"
            padding="xl"
            position="right"
            transition="fade"
          >
            <div className={styles.openedMenu_tablet}>
              <Paper>
                <Link href="/">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                    Hlavní strana
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/o-nas">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  O nás
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/aktuality">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  Sortiment
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/sortiment">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  EPS Bílý
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/galerie">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  EPS Šedý
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/kontakt">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  XPS
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/kontakt">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  Novinky
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/kontakt">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  Poptávka
                  </Text>
                </Link>
              </Paper>
              <Paper>
                <Link href="/kontakt">
                  <Text size="xl" sx={{ fontWeight: 400 }}>
                  Kontakty
                  </Text>
                </Link>
              </Paper>
            </div>
          </Drawer>
        )}
      </div>
    )
}