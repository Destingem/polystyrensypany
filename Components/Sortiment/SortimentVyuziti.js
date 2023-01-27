import { Text, Space } from "@mantine/core";
import SortimentText from "./SortimentText";
import IndexDivider from "../UI/IndexDivider";
import Image from "next/image";
import Link from "next/link";
import SubHeading1 from "../UI/SubHeading1";
export default function SortimentVyuziti(props) {



  return (
    <>
      {props.device !== "laptop" && (
        <>
          <SubHeading1 device={props.device}>
          
            Stavebnictví
          </SubHeading1>
          
          <SortimentText>
            Sypaný polystyren využíváme ve stavebnictví jako tepelnou izolaci.
            Sypaná tepelná izolace je vhodná k zateplení domu, do všech špatně
            přístupných míst, stropů, podlah, krovů, střech, obvodových stěn a
            vnitřních příček.
          </SortimentText>
          <SortimentText>
            Při výrobě sypaného polystyrenu vybíjíme statiku, takže polystyren
            na vás nenaskáče, teče jako lavina a dostane se opravdu všude.
          </SortimentText>
          <SortimentText>
            
            Využití je široké nejen pro novostavby, ale hlavně pro starší domy,
            které mají problém s vlhkostí. Vzduch mezi kuličkami odvádí vlhkost
            až do ztracena. Stavba tzv. dýchá a nevytváří se plísně.
          </SortimentText>
         
          <SortimentText>
            Drcený polystyren nemusíte složitě vyměřovat nebo řezat. Prostor k
            zateplení jednoduše zasypete nebo zafoukáte a to bez zbytků. Sypaná
            izolace je lehká nezatěžuje konstrukce střech, stropů, krovů atd.
            10m2 o síle 10cm váží cca 13,5 až 14Kg.
          </SortimentText>
          <SortimentText>
            Zateplení domu provedete ručním zasypáním nebo strojovým zafoukáním,
            které známe pod pojmem foukaná izolace.
          </SortimentText>
          <SortimentText>
            Dále používáme sypaný polystyren jako výplň dutých cihel. Drcený
            polystyren můžete přidávat do betonu podlah, snížíte hmotnost a
            zlepšíte tepelně-izolační vlastnosti. Určitě znáte pod pojmem
            lehčený beton nebo polystyrenbeton.
          </SortimentText>
          <SortimentText>
            Polystyren sypaný se také používá při zateplení šachet
            vzduchotechniky, akumulačních nádrží, výměníku tepla, rozvodu vody,
            dilatačních spár.
          </SortimentText>
          <SortimentText>
            Zajímají Vás způsoby využití sypané tepelné izolace v praxi?
            Podívejte se na  <Link href="/hodnoceni" >hodnocení našich zákazníků.</Link>
          </SortimentText>
          <IndexDivider />
          <SubHeading1 device={props.device}>
          
          
            Nábytkářský průmysl
          </SubHeading1>
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
            sypaný polystyren jako náhradní náplň do sedacích vaků. Pro tento
            účel třídíme a zpracováváme zcela čistý polystyren, aby mezi
            kuličkami nevznikal prach a nečistoty.
          </Text>
          <IndexDivider />
          <SubHeading1 device={props.device}>
          
            Zahrádkářství
          </SubHeading1>
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
            Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy
            k jejímu odlehčení.
          </Text>
          <IndexDivider />
          <SubHeading1
            
          >
            Zábavní průmysl
          </SubHeading1>
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
            Sypaný polystyren používají filmaři, organizátoři zábavných akcí,
            divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro
            děti - náhrada vody v bazénu.
          </Text>
          <IndexDivider />
          <SubHeading1 device={props.device}>
           
            A další
          </SubHeading1>
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
            Sypaný polystyren používají různé společnosti k vyplnění balíků s
            křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s
            křišťálovým lustrem nebo s pivem do Indie.
          </Text>
        </>
      )}
      {props.device === "laptop" && (
        <>
     <div style={{display: "flex", justifyContent: "space-between", gap: "5vw", alignItems: "center"}}>
        <div style={{width: "70%"}}>
        <SubHeading1 device={props.device}>
            Stavebnictví
          </SubHeading1>
          <Space h="md" />
          
          <Space h="md" />
          <Text size="xl" sx={{textAlign: "left"}}>
            Sypaný polystyren využíváme ve stavebnictví jako tepelnou izolaci.
            Sypaná tepelná izolace je vhodná k zateplení domu, do všech špatně
            přístupných míst, stropů, podlah, krovů, střech, obvodových stěn a
            vnitřních příček. <br />
            Při výrobě sypaného polystyrenu vybíjíme statiku, takže polystyren
            na vás nenaskáče, teče jako lavina a dostane se opravdu všude. <br />
            Využití je široké nejen pro novostavby, ale hlavně pro starší domy,
            které mají problém s vlhkostí. Vzduch mezi kuličkami odvádí vlhkost
            až do ztracena. Stavba tzv. dýchá a nevytváří se plísně.
          </Text>
          <Space h="xl" />
          
          <Space h="md" />
          <Text size="xl" sx={{textAlign: "left"}}>
            Drcený polystyren nemusíte složitě vyměřovat nebo řezat. Prostor k
            zateplení jednoduše zasypete nebo zafoukáte a to bez zbytků. Sypaná
            izolace je lehká nezatěžuje konstrukce střech, stropů, krovů atd.
            10m2 o síle 10cm váží cca 13,5 až 14Kg. <br />
            Zateplení domu provedete ručním zasypáním nebo strojovým zafoukáním,
            které známe pod pojmem foukaná izolace. <br />
            Dále používáme sypaný polystyren jako výplň dutých cihel. Drcený
            polystyren můžete přidávat do betonu podlah, snížíte hmotnost a
            zlepšíte tepelně-izolační vlastnosti. Určitě znáte pod pojmem
            lehčený beton nebo polystyrenbeton. <br />
            Polystyren sypaný se také používá při zateplení šachet
            vzduchotechniky, akumulačních nádrží, výměníku tepla, rozvodu vody,
            dilatačních spár.<br />
            Zajímají Vás způsoby využití sypané tepelné izolace v praxi?
            Podívejte se na <Link href="/hodnoceni" >hodnocení našich zákazníků.</Link>
          </Text>
        
        </div>
        <div style={{width: "40%", height: "60%"}}>
       <Image src="/images/podlaha.jpg" alt="Izolace podlahy" height={300} width={400} layout={"responsive"} />
       </div>
     </div>
      <div style={{width: "70%", marginRight: "auto", gap: "2vh", display: "flex", flexDirection: "column"}}>
        
            <div>
            <SubHeading1 device={props.device}>
          
            Nábytkářský průmysl
          </SubHeading1>
          <Text
            weight={400}
           sx={{textAlign: "left", fontSize: "1rem"}}>
          
            Sypaný polystyren objevili i majitelé sedacích vaků. Nakupují u nás
            sypaný polystyren jako náhradní náplň do sedacích vaků. Pro tento
            účel třídíme a zpracováváme zcela čistý polystyren, aby mezi
            kuličkami nevznikal prach a nečistoty.
          </Text>
            </div>
      
        <div>
        <SubHeading1 device={props.device}>
          
            Zahrádkářství
          </SubHeading1>
          <Text
            weight={400}
            sx={{textAlign: "left", fontSize: "1rem"}}
          >
            Sypaný polystyren využívají zahrádkáři jako příměs do jílovité půdy
            k jejímu odlehčení.
          </Text>
         
        </div>
          <div>
          <SubHeading1 device={props.device}>
            Zábavní průmysl
          </SubHeading1>
          <Text
            weight={400}
             sx={{textAlign: "left", fontSize: "1rem"}}
          >
            Sypaný polystyren používají filmaři, organizátoři zábavných akcí,
            divadelníci pro umělé sněžení. Nebo na různých zábavných akcích pro
            děti - náhrada vody v bazénu.
          </Text>
          </div>
       
         <div>
         <SubHeading1 device={props.device}>
          
            A další
          </SubHeading1>
          <Text
            weight={400}
           sx={{textAlign: "left", fontSize: "1rem"}}
          >
            Sypaný polystyren používají různé společnosti k vyplnění balíků s
            křehkým zbožím. Náš polystyren tak cestoval například do New Yorku s
            křišťálovým lustrem nebo s pivem do Indie.
          </Text>
         </div>
      </div>
        </>
      )}
    </>
  );
}
