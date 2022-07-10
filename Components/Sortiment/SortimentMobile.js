import Footer from "../UI/Footer"
import MainScreen from "../UI/MainScreen"
import {List, ListItem, Text, Grid, Paper} from "@mantine/core"
import {BsCircle } from "react-icons/bs"
import IndexDivider from "../UI/IndexDivider"
import Link from "next/link"
export default function SortimentMobile(){
    const pointy = ["zrnitost sypaného polystyrenu je 1 až 6mm",
    "tepelná vodivost od 0,034 do 0,039W/mk",
    "tepelný odpor R= od 2,64 do 3 při zásypu 10cm",
    "vyvážená vnitřní a vnější regulace teploty díky vzduchu mezi kuličkami",
    "nevytváří tepelné mosty",
    "nepodporuje hoření",
    "výborná zvuková izolace",
    "na 100% vyplní i špatně dostupné prostory",
    "téměř žádná nasákavost vlhkosti",
    "je lehký nezatěžuje konstrukci domu",
    "stavba nebo zateplený prostor dýchá a netvoří se plísně",
    "znemožňuje uhnízdění hlodavců",
    "příjemný na dotyk",
    "cenově dostupný"]
    return(
        <div>
            <MainScreen label="Sortiment" image="/images/bily_c.png" />
            <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", height: "fitContent", width: "100%", textAlign: "center" }}>
                <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
                Polystyren sypaný - základní vlastnosti
                </Text>
                
                <List
                spacing="xs"
          center
          icon={<BsCircle color="rgb(25, 95, 0)" />}
          sx={{ textAlign: "left" }}
        >
          {pointy &&
            pointy.map((item, index) => {
              return (
                <ListItem icon={item.icon}>
                  <Text
                    weight={400}
                    size="xl"
                    sx={{
                      color: "#545454",
                      fontSize: "1rem",
                      margin: "0 5vw 0 5vw",
                    }}
                  >
                    {item}
                  </Text>
                </ListItem>
              );
            })}
        </List>
        
       <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh"}}>
       <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", marginTop: "2vh", marginBottom: "5vh" }}>
                Využití
                </Text>
                <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
                    Stavebnictví
                </Text>
                <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
                    Sypaný polystyren
                </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
          Sypaný polystyren využíváme ve stavebnictví jako tepelnou izolaci.
          Sypaná tepelná izolace je vhodná k zateplení domu, do všech špatně
          přístupných míst, stropů, podlah, krovů, střech, obvodových stěn a
          vnitřních příček.
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
Při výrobě sypaného polystyrenu vybíjíme statiku, takže polystyren na vás nenaskáče, teče jako lavina a dostane se opravdu všude.

        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        > Využití je široké nejen pro novostavby, ale hlavně pro starší domy, které mají problém s vlhkostí. Vzduch mezi kuličkami odvádí vlhkost až do ztracena. Stavba tzv. dýchá a nevytváří se plísně.


        </Text>
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.25rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
                    Drcený polystyren
                </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >Drcený polystyren nemusíte složitě vyměřovat nebo řezat. Prostor k zateplení jednoduše zasypete nebo zafoukáte a to bez zbytků. Sypaná izolace je lehká nezatěžuje konstrukce střech, stropů, krovů atd. 10m2 o síle 10cm váží cca 13,5 až 14Kg. </Text>
         <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
Zateplení domu provedete ručním zasypáním nebo strojovým zafoukáním, které známe pod pojmem foukaná izolace.

        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
          Dále používáme sypaný polystyren jako výplň dutých cihel. Drcený polystyren můžete přidávat do betonu podlah, snížíte hmotnost a zlepšíte tepelně-izolační vlastnosti. Určitě znáte pod pojmem lehčený beton nebo polystyrenbeton.


        </Text>
         <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
          Polystyren sypaný se také používá při zateplení šachet vzduchotechniky, akumulačních nádrží, výměníku tepla, rozvodu vody, dilatačních spár.


        </Text>
         <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "left",
          }}
        >
          Zajímají Vás způsoby využití sypané tepelné izolace v praxi? Podívejte se na hodnocení našich zákazníků zde.
        </Text>
        <IndexDivider />
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
        Nábytkářský průmysl
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren objevili i majitelé sedacích vaků. Nakupují u nás
          sypaný polystyren jako náhradní náplň do sedacích vaků. Pro tento účel
          třídíme a zpracováváme zcela čistý polystyren, aby mezi kuličkami
          nevznikal prach a nečistoty.
        </Text>
        <IndexDivider />
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
        Zahrádkářství
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy k jejímu odlehčení.
        </Text>
        <IndexDivider />
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
        Zábavní průmysl
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
          Sypaný polystyren používají filmaři, organizátoři zábavných akcí, divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro děti - náhrada vody v bazénu.
        </Text>
        <IndexDivider />
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
        A další
        </Text>
        <Text
          weight={400}
          size="sm"
          sx={{
            color: "black",
            fontSize: "1rem",
            marginTop: "0vh",
            textAlign: "center",
          }}
        >
         Sypaný polystyren používají různé společnosti k vyplnění balíků s křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s křišťálovým lustrem nebo s pivem do Indie.
        </Text>
    
       </div>
      <div style={{marginTop: "5vh"}}>
      <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center" }}>
          Sortiment
        </Text>
        <Grid
          span={12}
          sx={{ width: "100%", height: "80vh", gap: "2vh", margin: "5vh 0" }}
        >
          <Link href="/drcenypolystyren-bily">
          <Grid.Col
            span={12}
           
           
          >
           <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/bily_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              EPS Bílý
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
          <Link href="/drcenypolystyren-sedy">
          <Grid.Col
            
          >
           <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/sedy_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              EPS Šedý
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
          <Link href="/drcenypolystyren-XPS">
          <Grid.Col
          
          
          >
          <Paper shadow="xl"  sx={{
              backgroundImage: "url('/images/barevny_c.png')",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "2px",
              backdropFilter: "",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}>
            <Text
              weight={600}
              size="sm"
              sx={{
                color: "#fff",
                fontSize: "10vw",
                marginTop: "0vh",
                padding: "",
              }}
            >
              XPS
            </Text>
            </Paper>
          </Grid.Col>
          </Link>
        </Grid>
      </div>
                </div>
            <Footer />
        </div>
    )
}