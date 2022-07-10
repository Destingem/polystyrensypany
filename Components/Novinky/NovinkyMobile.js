import { Button, Group, Paper, Text } from "@mantine/core";
import Footer from "../UI/Footer";
import MainScreen from "../UI/MainScreen";


export default function NovinkyMobile() {
    const novinky = [{date: "1.3.2022", title: "Dovolená", text: "Od 29.7.2021 do 4.8.2021 máme dovolenou. Od 5.8.2021 se na Vás budeme opět těšit.", image: "/images/bily.png", priloha: {title: "PDF s rozpisy dovolené např.", url: "/images/bily.png"}} ];
    return (
        <div>
               <MainScreen label="Novinky" image="/images/polystyrenestructure.jpg" />
           <div style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw"}}>
            {novinky && novinky.map((item, index) => {
                return(
                    <Paper shadow="xl" style={{ width: "100%", height: "fitContent", marginBottom: "3vh" }}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2vh", padding: "0", width: "100%", height: "100%"}}>
                   <Group sx={{width: "100%", marginTop: "3vh"}}>
                   <Text weight={700} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: "5vw"}}>{item.title}</Text>
                    <Text weight={700} size="xl" sx={{ color: "rgb(25, 95, 0)", fontSize: "1.25rem", marginRight: "5vw" }}>{item.date}</Text>
                   </Group>
                    <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", margin: "2vh 5vw 2vh 5vw" }}>{item.text}</Text>
                    {item.image && <img alt="random" src={item.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {item.priloha && <Text component="p" weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", margin: "2vh 5vw 2vh 5vw" }}><a href={item.priloha.url} download={item.priloha.title}>{item.priloha.title}</a></Text>}
                    </div>
                    </Paper>
                )
            })}
           </div>
           <Footer />
        </div>
    );
}