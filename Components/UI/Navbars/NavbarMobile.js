import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  Burger,
  Divider,
  Drawer,
  Grid,
  MediaQuery,
  Menu,
  Paper,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import ItemMobile from "../ItemMobile";
import MultipleItemMobile from "../MultipleItemMobile";

export default function NavBarMobile(props) {
  const itemsOnas = [{href: "/o_nas", label: "O nás"}, {href: "/certifikat", label: "Certifikáty"}, {href: "/partneri", label: "Partneři"}, {href: "/hodnoceni", label: "Hodnocení zákazníky"}];
  const itemsSortiment = [{href: "/sortiment", label: "Přehled sortimentu"}, {href: "/drcenypolystyren-bily", label: "EPS Bílý"}, {href: "/drcenypolystyren-sedy", label: "EPS Šedý"}, {href: "/drcenypolystyren-XPS", label: "XPS"}, {href: "/foukana-izolace", label: "Foukaná izolace"}];
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";
  var [scroll, scrollTo] = useWindowScroll();

  return (
    <div
      className={styles.main_mobile}
      style={{
        backgroundColor: scroll.y > 0 && "rgba(84, 84, 84, 0.5)",
        position: "fixed",
        zIndex: "12000",
        transition: !opened ? (scroll.y > 0 ? "2s" : "0.5s") : 0,
        backdropFilter: scroll.y > 0 && !opened && "blur(4px)",
      }}
    >
      {!opened && (
        <Link href="/">
          <div className={styles.header_mobile}>
            <img
              src="/images/finalLogo.png"
              width={"15%"}
              style={{ aspectRatio: 1 }}
              alt="logo"
            />
            <Text size="xl" sx={{ whiteSpace: "nowrap" }}>
              Polystyren sypaný
            </Text>
          </div>
        </Link>
      )}
      {!opened && <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
        
      />}
      {opened && (
        <Drawer
          zIndex={12001}
          onAbort={() => setOpened((o) => !o)}
          opened={opened}
          onClose={() => setOpened((o) => !o)}
          
          title={
            <Link href="/">
              <div className={styles.header_mobile} style={{}}>
                <img
                  src="/images/finalLogo.png"
                  width={"15%"}
                  style={{ aspectRatio: 1 }}
                  alt="logo"
                />
                <Text size="xl" sx={{ whiteSpace: "nowrap" }}>
                  Polystyren sypaný
                </Text>
              </div>
            </Link>
          }
          padding="xl"
          size="full"
          transition="fade"
          position="right"
        >
          <div className={styles.openedMenu_mobile}>
            <ItemMobile  href="/" label="Hlavní strana"/>
            <MultipleItemMobile label="O nás" items={itemsOnas}/>
            <MultipleItemMobile label="Sortiment" items={itemsSortiment}/>
            <ItemMobile  href="/novinky" label="Novinky"/>
            <ItemMobile  href="/poptavka_form" label="Poptávka"/>
            <ItemMobile  href="/likvidace-recyklace" label="Recyklace"/>
            <ItemMobile  href="/kontakty" label="Kontakty"/>
          </div>
        </Drawer>
      )}
    </div>
  );
}
