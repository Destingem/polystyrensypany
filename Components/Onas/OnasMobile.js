import Navbar from "../../Components/UI/Navbar";
import DefaultScreen from "../../Components/UI/DefaultScreen";
import { Text, Divider, Space } from "@mantine/core";
import Link from "next/link";
import {AiOutlineLink} from "react-icons/ai"
import Image from "next/image";
import Footer from "../../Components/UI/Footer";
import Heading from "../UI/Heading";
export default function OnasMobile(props) {
  let {device} = props
  let textSx = device !== "laptop" ? { color: "#545454", fontSize: "1rem", textAlign: "left" } : { color: "#545454", textAlign: "left"}
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
    >
      <DefaultScreen label="O nás" image="/images/backgroundBall1.png" device={props.device}/>
      <section
        style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
          justifyContent: device !== "laptop" ? "center" : "",
        }}
      >
        
        
       {device !== "laptop" ? <>
       <Heading device={device}>
          Jak to všechno začalo
        </Heading>
        <Space h="xl" /><Text
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem",textAlign: "left" }}
        >
          V roce 2009 jsem začal pracovat ve firmě na likvidaci odpadu. Firma
          krom jiného svážela i zbytkový polystyren ze stavebnictví, jehož
          likvidace byla nákladná. Vždy když jsem viděl neskladnou hromadu
          polystyrenu, přemýšlel jsem co s tím. Nápad na sebe nenechal dlouho
          čekat…
        </Text>
        <Divider my="xl" label="" labelPosition="center" />
        <Text
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "left" }}
        >
          Bydlím ve starém rodinném domku z roku 1937, dům není zateplený, má i
          problémy s vlhkostí, takže potřebuje ideální izolaci, která bude
          dýchat a co jiného mě mohlo napadnout než sypaný polystyren. Začalo
          půlroční období vymýšlení, kreslení, měření, počítání na jehož konci
          měl být stroj na drcení polystyrenu a v květnu 2010 byl drtič hotový a
          funkční.
        </Text>
        <Divider my="xl" label="Začátky podníkání" labelPosition="center" />
        <Text
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "left" }}
        >
          Následně na to jsem zkusil sypaný polystyren prodávat a zdařilo se.
          Dodnes si pamatuji na svého prvního zákazníka, který potřeboval sypaný
          polystyren na zateplení podlahy a stropu. Byla to neskutečná radost,
          od té chvíle mi bylo jasné, že se tomu chci věnovat naplno. Jako
          většina podnikatelů jsem i já začínal doma v garáži, ale to už je dnes
          minulost.
        </Text>
        <Divider my="xl" label="Současnost" labelPosition="center" />
        <Text
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "left" }}
        >
          Když k nám dnes přijede zákazník na doporučení, je to pro mě velká
          radost a utvrzení, že výroba kvalitní sypané tepelné izolace má smysl.
          Drcený polystyren se znovu vrací do stavebnictví ve formě plnohodnotné
          sypané izolace a nemusí končit na skládkách. Jsem rád, že tímto
          způsobem mohu přispět ke zlepšení životního prostředí.
        </Text>
        <Text
          size="lg"
          weight={500}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "left" }}
        >
          Byla by škoda nevyužít všechny vlastnosti a přednosti, které
          polystyren sypaný, drcený má.
        </Text><Space h="xl" /><Image src="http://159.89.20.207:1337/uploads/risa_9b8675dba1.webp?width=1920&height=1440" width={4} height={3} layout="responsive" /></>  :<> <Text size="xl" weight={500} sx={{ color: "#545454", fontSize: device ==! "laptop" ? "8vw" : "3rem", textAlign: device === "laptop" ? "left" : "center", margin: "0"  }} component="h2">
          Jak to všechno začalo
        </Text><div style={{display: "flex", justifyContent: "space-between", gap: "5vw"}}>
        <div style={{width: "70%", alignItems: "center", display: "flex"}}>
        <Space h={30}/>
       
        <Space h="xl"/>
        <Text align="left" size="lg" sx={{color: "#545454"}} component="p">
        V roce 2009 jsem začal pracovat ve firmě na likvidaci odpadu. Firma
          krom jiného svážela i zbytkový polystyren ze stavebnictví, jehož
          likvidace byla nákladná. Vždy když jsem viděl neskladnou hromadu
          polystyrenu, přemýšlel jsem co s tím. Nápad na sebe nenechal dlouho
          čekat… <br />
          Bydlím ve starém rodinném domku z roku 1937, dům není zateplený, má i
          problémy s vlhkostí, takže potřebuje ideální izolaci, která bude
          dýchat a co jiného mě mohlo napadnout než sypaný polystyren. Začalo
          půlroční období vymýšlení, kreslení, měření, počítání na jehož konci
          měl být stroj na drcení polystyrenu a v květnu 2010 byl drtič hotový a
          funkční.
          <br />
          Následně na to jsem zkusil sypaný polystyren prodávat a zdařilo se.
          Dodnes si pamatuji na svého prvního zákazníka, který potřeboval sypaný
          polystyren na zateplení podlahy a stropu. Byla to neskutečná radost,
          od té chvíle mi bylo jasné, že se tomu chci věnovat naplno. Jako
          většina podnikatelů jsem i já začínal doma v garáži, ale to už je dnes
          minulost.
          <br />
          Když k nám dnes přijede zákazník na doporučení, je to pro mě velká
          radost a utvrzení, že výroba kvalitní sypané tepelné izolace má smysl.
          Drcený polystyren se znovu vrací do stavebnictví ve formě plnohodnotné
          sypané izolace a nemusí končit na skládkách. Jsem rád, že tímto
          způsobem mohu přispět ke zlepšení životního prostředí.
          Byla by škoda nevyužít všechny vlastnosti a přednosti, které
          polystyren sypaný, drcený má.
        </Text>
        </div>
        
       <div style={{width: "30%"}}> <Image src="http://159.89.20.207:1337/uploads/risa_9b8675dba1.webp?width=1920&height=1440" width={4} height={3} layout="responsive" /></div>
        </div></>}
      </section>
      <section  style={{
          
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "0vh 5vw 3vh 5vw",
        }}>
        <Heading device={device}>
          POLYSTYREN SYPANÝ
        </Heading>
        <Space h={30}/>
        <Text
          size="lg"
          weight={400}
          sx={textSx}
          component="p"
        >
          {" "}
          Náš produkt <strong>POLYSTYREN SYPANÝ</strong> je zaregistrován v Programu Ministerstva
          životního prostředí administrovaný Státním fondem životního prostředí
          ČR zaměřený na úspory energie a obnovitelné zdroje energie v rodinných
          a bytových domech v Seznamu výrobku a technologií pod značkou SVT11344
          , polystyren sypaný, krouhaný, drcený.
        </Text>
        <Space h="xl" />
        <Text
          size="lg"
          weight={400}
          sx={textSx}
        >
          
          V říjnu 2011 jsme se stali členy občanského sdružení SME UNION CZECH REPUBLIC - Unie malých a středních podniků České republiky, registrována pod Ministerstvem vnitra ČR.
        </Text>
        <Space h="xl" />
        <Text
          size="lg"
          weight={400}
          sx={textSx}
        >
          
          Od dubna 2012 poskytujeme <strong>strojové zafoukání</strong> naší izolace
        </Text>
        <Space h="xl" />
        <Text size="lg" weight={400} sx={textSx}>Od roku 2013 jsme uvedeni v globální firemní databázi <Link href="https://cz.kompass.com/c/polystyren-sypany-richard-humes/cz046098/"><strong style={{color: "#e5312a"}}>KOMPASS <AiOutlineLink /></strong></Link>, která nám pomáhá zlepšit naše prodejní a marketingové aktivity.</Text>
        <Space h="xl" />
        <Text size="lg" weight={400} sx={textSx}>V srpnu 2015 jsme obdrželi Certifikát - prověřená společnost". Tímto certifikátem se můžou pochlubit firmy, které nemají žádné negativní ohlasy od zákazníků a obchodních partnerů. Je to pro nás další ujištění, že to děláme dobře.</Text>
        <Space h="xl" />
        
        <Text size="lg" weight={400} sx={textSx}>Od 3.11.2016 je náš výrobek Polystyren sypaný opět registrovaný v nové zelené úsporám pod číslem SVT5474</Text>
        <Space h="xl" />
        <Image src="/images/nova_zelena_uspora.png"  width={456} height={49} layout={device !== "laptop" ? "responsive" : "fixed"} />
       
      </section>
      <Footer />
    </div>
  );
}
