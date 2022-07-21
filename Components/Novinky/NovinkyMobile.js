import { Button, Grid, Group, Paper, Text } from "@mantine/core";
import Footer from "../UI/Footer";
import DefaultScreen from "../UI/DefaultScreen";


export default function NovinkyMobile(props) {
    let device = props.device;
    const novinky = [{date: "1.3.2022", title: "Dovolená", text: "Od 29.7.2021 do 4.8.2021 máme dovolenou. Od 5.8.2021 se na Vás budeme opět těšit.", image: "/images/bily.png", priloha: {title: "PDF s rozpisy dovolené např.", url: "/images/bily.png"}}, {date: "1.3.2022", title: "Dovolená", text: "Od 29.7.2021 do 4.8.2021 máme dovolenou. Od 5.8.2021 se na Vás budeme opět těšit.", image: "/images/bily.png", priloha: {title: "PDF s rozpisy dovolené např.", url: "/images/bily.png"}} , {date: "1.3.2022", title: "Dovolená", text: "Od 29.7.2021 do 4.8.2021 máme dovolenou. Od 5.8.2021 se na Vás budeme opět těšit.", image: "/images/bily.png", priloha: {title: "PDF s rozpisy dovolené např.", url: "/images/bily.png"}} , {date: "1.3.2022", title: "Dovolená", text: "Od 29.7.2021 do 4.8.2021 máme dovolenou. Od 5.8.2021 se na Vás budeme opět těšit.", image: "/images/bily.png", priloha: {title: "PDF s rozpisy dovolené např.", url: "/images/bily.png"}}  ];
    return (
        <div>
               <DefaultScreen label="Novinky" image="/images/polystyrenestructure.jpg" device={device}/>
           <Grid style={{
        
          
       
          padding: "3vh 5vw 3vh 5vw"}}>
            {novinky && novinky.map((item, index) => {
                return(
                    <Grid.Col span={device == "tablet" ? 6 : device !== "laptop" ? 12 : 3}>
                    <Paper shadow="xl" style={{ width: "100%", height: "fitContent"}}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2vh", padding: "0", width: "100%", height: "100%"}}>
                   <Group sx={{width: "100%", marginTop: "3vh"}}>
                   <Text weight={700} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: device !== "laptop" ? "5vw" : "1vw"}}>{item.title}</Text>
                    <Text weight={700} size="xl" sx={{ color: "rgb(25, 95, 0)", fontSize: "1.25rem", marginRight: device !== "laptop" ? "5vw" : "1vw" }}>{item.date}</Text>
                   </Group>
                    <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", margin: device !== "laptop" ? "2vh 5vw 2vh 5vw" : "1vh 2vw 1vh 2vw" }}>{item.text}</Text>
                    {item.image && <img alt="random" src={item.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {item.priloha && <Text component="p" weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", margin: "2vh 5vw 2vh 5vw" }}><a href={item.priloha.url} download={item.priloha.title}>{item.priloha.title}</a></Text>}
                    </div>
                    </Paper>
                    </Grid.Col>
                )
            })}
           </Grid>
           <Footer />
        </div>
    );
}