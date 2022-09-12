import { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Burger, Divider, Drawer, Grid, MediaQuery, Menu, Paper, Text } from "@mantine/core";
import Image from "next/image";
import ItemMobile from "../ItemMobile";
import MultipleItemMobile from "../MultipleItemMobile";
import {useWindowScroll} from "@mantine/hooks";
export default function NavbarTablet(props) {
  const itemsOnas = [{href: "/o_nas", label: "O nás"}, {href: "/certifikat", label: "Certifikáty"}, {href: "/partneri", label: "Partneři"}, {href: "/hodnoceni", label: "Hodnocení zákazníky"}];
  const itemsSortiment = [{href: "/sortiment", label: "Přehled sortimentu"}, {href: "/drcenypolystyren-bily", label: "Polystyren sypaný - EPS bílý"},{href: "/eps-jemny", label: "Polystyren sypaný - EPS jemný"} ,{href: "/drcenypolystyren-sedy", label: "Polystyren sypaný - EPS šedý"}, {href: "/drcenypolystyren-XPS", label: "Polystyren sypaný - XPS"}, {href: "/ceny", label: "Ceník"} ,{href: "/foukana-izolace", label: "Foukaná izolace"}];  
  const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
    var [scroll, scrollTo] = useWindowScroll();
  
    return(
        <div
        className={styles.main_mobile}
        style={{
          backgroundColor: props.backgroundColor,
          position: "fixed",
          zIndex: "12000",
          backgroundColor: scroll.y > 0 && "rgba(84, 84, 84, 0.5)",
          transition: !opened ? (scroll.y > 0 ? "2s" : "0.5s") : 0,
          backdropFilter: scroll.y > 0 && !opened && "blur(4px)",
        }}
      >
        <Link href="/">
        
          <div style={{display:"flex", minWidth: "10%", minHeight: "100%", padding: "2% 1% 2% 0"}}>  
            <Link href="/" style={{cursor: "pointer"}}>
            <img
              src="/images/logo_stranky.jpg"
             width="50%"
             
              alt="logo"
            />
            </Link>
            
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
    )
}