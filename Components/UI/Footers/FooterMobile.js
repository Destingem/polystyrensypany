import {Text, Grid} from "@mantine/core";
export default function FooterMobile() {
  return (
    <div
      style={{
    display: "flex",
    flexDirection: "column",
       alignItems: "center",
        backgroundColor: "white",
        maxHeight: "80vh",
        maxWidth: "100%",
        overflow: "hidden",

      }}
    >
        
        <div style={{ backgroundColor: "#e5e5e5", minHeight: "50vh",minWidth: "100%",display: "flex",flexDirection: "column",gap: "0",paddingTop: "8vh",alignItems: "center",textAlign: "center",paddingLeft: "4vw",paddingRight: "4vw",zIndex: "25"}}>
        <div style={{marginTop: "10vh",   backgroundColor:" #3f7b63",minWidth: "150vw",minHeight: "150vw",borderRadius: "50%", marginTop: "-130vw",zIndex: "2500", alignItems: "center", justifyContent: "center", marginLeft: "-30vw" }}>
        <Text component="h3"  sx={{ color: "white", fontSize: "8vw", margin: "0", marginTop: "118vw", marginLeft: "5vw" }}>Polystyren sypaný</Text>
        <Text color="#3f7b63" component="em" sx={{ color: "white", fontSize: "5vw", margin: "0" }}>ta pravá izolace</Text>
        </div>
         <div style={{display: "flex", flexDirection: "row", maxWidth: "100vw", padding: "0 5vw 3vh 5vw" }}>
        <div>
        <Text
            component="h4"
            sx={{
              color: "#3f7b63",
              fontSize: "8vw",
              marginTop: "2vh",
              marginBottom: "1vh",
            }}
          >
            Kontakt
          </Text>
          <Grid>
            <Grid.Col>
              <Text
                component="p"
                sx={{ color: "#3f7b63", fontSize: "4vw", margin: "0" }}
              >
                Telefon 1: +420 723 513 638
              </Text>
              <Text
                component="p"
                sx={{ color: "#3f7b63", fontSize: "4vw", margin: "0" }}
              >
                Telefon 2: +420 737 226 697
              </Text>
              <Text
                component="p"
                sx={{ color: "#3f7b63", fontSize: "4vw", margin: "0" }}
              >
                Mail: info@polystyrensypany.cz
              </Text>
            </Grid.Col>
          </Grid>
        </div>
        <div>
        <Text
            component="h4"
            sx={{
              color: "#3f7b63",
              fontSize: "8vw",
              marginTop: "2vh",
              marginBottom: "1vh",
            }}
          >
            Výroba a prodej
          </Text>
          <Text
            component="p"
            sx={{ color: "#3f7b63", fontSize: "4vw", margin: "0" }}
          >
            Polystyren sypaný - Richard Humeš
            <br /> Štěpánovská 330 190 17 Praha 9 - Vinoř
          </Text>
        </div>
         </div>
         </div>
    </div>
  );
}