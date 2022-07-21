import {Grid, Paper, Text} from "@mantine/core"
import Link from "next/link"
export default function SortimentSortiment(props){
    let {device} = props
    let polystyreny = [{name: "Polystyren sypaný - XPS", image: "/images/barevny_c.png", url: "/drcenypolystyren-XPS"}, {name: "Polystyren sypaný - EPS šedý", image: "/images/sedy_c.png", url: "/drcenypolystyren-sedy"}, {name: "Polystyren sypaný - EPS bílý", image: "/images/bily_c.png", url: "/drcenypolystyren-bily"}]
    return(
        <div style={{marginTop: "5vh"}}>
       
        {device !== "laptop" ? <Grid
            span={12}
            sx={{ width: "100%", height: "80vh", gap: "2vh", margin: "5vh 0" }}
          >
            <Link href="/drcenypolystyren-bily">
            <Grid.Col
              span={device !== "laptop" ? 12 : 4}
             
             
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
                sx={props.labelSx}
              >
                Polystyren sypaný - EPS bílý
              </Text>
              </Paper>
            </Grid.Col>
            </Link>
            <Link href="/drcenypolystyren-sedy">
            <Grid.Col
              span={device !== "laptop" ? 12 : 4}
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
                sx={props.labelSx}
              >
                Polystyren sypaný - EPS šedý
              </Text>
              </Paper>
            </Grid.Col>
            </Link>
            <Link href="/drcenypolystyren-XPS">
            <Grid.Col
            span={device !== "laptop" ? 12 : 4}
            
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
                sx={props.labelSx}
              >
                Polystyren sypaný - XPS
              </Text>
              </Paper>
            </Grid.Col>
            </Link>
          </Grid> : <Grid  sx={{ width: "100%", height: "40vh",  margin: "5vh 0" }}>
         
           {polystyreny.map(polystyren => {
            return(
                <Link href={polystyren.url}>
                <Grid.Col
            span={device !== "laptop" ? 12 : 4}
            
            >
            <Paper  shadow="xl"  sx={{
                "&:hover": {
                    background: "url(" + polystyren.image + ")",
                    backgroundImage: "url(" + polystyren.image + ")  linear-gradient(rgba(84, 84, 84, 0.2), rgba(84, 84, 84, 0.2)) ",
                    backdropFilter: "blur(2px) !important",
                    backgroundColor: "rgba(84, 84, 84, 0.4)",
                    backgroundBlendMode: "saturation",
                    transition: "2s all",
                },
                background: "url(" + polystyren.image + ")",
                backgroundImage: "url(" + polystyren.image + ")",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: "2px",
                transition: "1s all",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
              }}>
              <Text
                weight={600}
                size="sm"
                sx={props.labelSx}
              >
                {polystyren.name}
              </Text>
              </Paper>
            </Grid.Col>
            </Link>
            )
           })}

          </Grid>}
        </div>
    )
}