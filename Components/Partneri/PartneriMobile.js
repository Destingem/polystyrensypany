import MainScreen from "../UI/MainScreenMobile";
import {Text, Card, Space, Divider} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import Footer from "../UI/Footer";
export default function PartneriMobile(){

    return(
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <MainScreen label="Partneři" image="/images/polystyren_jemny_detail2.png"/>
            <div style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
        }}>
        <Text size="xl" weight={400} sx={{ color: "#545454", fontSize: "1rem", marginBottom: "2vh" }}>Zde Vám budeme postupně představovat partnery, kteří používají naší izolaci pro realizaci svých zakázek.</Text>
        
                <Link href="https://www.drevostavby-myhome.cz" >
               
                <div style={{margin: "0 5vw", gap: "2vh", display: "flex", flexDirection: "column"}}>
                <Image src="/images/drevostavby.png"  width={178} height={60} layout="responsive" />
                <Text size="xl" weight={600} sx={{ color: "#545454", fontSize: "1.5rem" }}>DŘEVOSTAVBY MY HOME</Text>
                <Text size="xl" weight={400} sx={{ color: "#545454", fontSize: "1rem" }}>Dřevostavby na klíč, dřevostavba svépomocí</Text>
                </div>
                </Link>
                <Divider my="xl" />
                <Link href="http://www.becker-sport.cz/">
                <div style={{margin: "0 5vw", gap: "2vh", display: "flex", flexDirection: "column"}}>
                <Image src="/images/becker.jpg"  width={178} height={60} layout="responsive" />
                <Text size="xl" weight={600} sx={{ color: "#545454", fontSize: "1.5rem" }}>Becker Sport ČR s.r.o. s</Text>
                <Text size="xl" weight={400} sx={{ color: "#545454", fontSize: "1rem" }}>Realizace sportovních podlah</Text>
                </div>
                </Link>
        </div>
        <Footer />
        </div>
    )
}