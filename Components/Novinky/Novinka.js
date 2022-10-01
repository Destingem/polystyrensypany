import { Badge, Button, Grid, Paper, Text } from "@mantine/core"
import { useState } from "react";

export default function Novinka(props){
    let {device, item} = props
    const [isShown, setIsShown] = useState(false);
    return(
        <Grid.Col span={device == "tablet" ? 6 : device !== "laptop" ? 12 : 3} key={item.id} >
        <Paper shadow="xl" style={{ width: "100%", height: "fitContent", padding: "1vh 1vw"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2vh", padding: "0", width: "100%", height: "100%"}}>
       <div style={{width: "100%", marginTop: "3vh", display: "flex"}}>
       <Text weight={700} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: device !== "laptop" ? "5vw" : "1vw"}}>{item.attributes.Nadpis}</Text>
        <Text weight={700} size="xl" sx={{ color: "rgb(25, 95, 0)", fontSize: "1.25rem", marginRight: device !== "laptop" ? "5vw" : "1vw", whiteSpace: "nowrap", maxHeight: "30%" }}>{item.attributes.Datum}</Text>
       </div>
        <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", margin: device !== "laptop" ? "2vh 5vw 2vh 5vw" : "1vh 2vw 1vh 2vw" }}>{item.attributes.Obsah}</Text>
      
        {item.attributes.Obrazek.data && <img alt={item.attributes.Obrazek.data.attributes.alternativeText} src={"http://159.89.20.207:1337" + item.attributes.Obrazek.data.attributes.formats.small.url} style={{ width: "100%", height: "80%", objectFit: "contain", maxHeight: "30vh" }} height={item.attributes.Obrazek.data.attributes.formats.small.height} width={item.attributes.Obrazek.data.attributes.formats.small.width}/>}
        {item.attributes.Priloha.data && <Button color="teal" onClick={()=> {setIsShown(prev => !prev)}}>{isShown ? "Skrýt přílohy" : "Zobrazit přílohy"}</Button>}
       <div style={{display: "flex", alignItems: "center", margin: "1vh 1vw", maxWidth: "100%", flexWrap: "wrap", gap: "2vw"}}>
        {isShown && item.attributes.Priloha.data && item.attributes.Priloha.data.map(priloha => {
            console.log(priloha)
            return(<Badge color="lime"><Text key={priloha.id} component="p" weight={400} size="xl" sx={{ color: "#545454", fontSize: "0.8rem", textAlign: "center", margin: "0" }}><a style={{color: "#545454"}} href={"http://159.89.20.207:1337" + priloha.attributes.url} download={"http://159.89.20.207:1337" + priloha.attributes.url} >{priloha.attributes.name}</a></Text></Badge>)
        })}
        </div>
        </div>
        </Paper>
        </Grid.Col>
    )
}