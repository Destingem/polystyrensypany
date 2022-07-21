import { Button, Text } from "@mantine/core";
import MainScreen from "../UI/MainScreen";
import Image from "next/image";
import Link from "next/link";
export default function EPSJemnyMobile(props){
    let device = props.device;
    return(
       <div>
        <MainScreen device={device} polysyp={true} label={"EPS jemný"} image="images/polystyrenestructure.jpg" />
        <div style={{ display: "flex", flexDirection: "column", padding: "3vh 5vw 3vh 5vw", gap: "3vh"}}>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.5rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "center" }}>
            Polystyren sypaný - jemný EPS 
            </Text>
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", marginRight: "auto", marginLeft: device !== "laptop" ? "auto" : "", textAlign: "left" }}>
            Možnosti využití: Vysypání otvorů dutých cihel (HELUZ, POROTHERM a další) zlepšuje tepelněizolační vlastnosti obvodového zdiva.
            </Text>
            <Link href="/ceny#polystyren-sypany-EPS-jemny"><Button variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={{ width: device !== "laptop" ? "100%" : "15%" , marginTop: "3vh", marginLeft: "auto" }}>Ceník</Button></Link>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", gap: "3vh", minHeight: "30vh"}}>
           <div style={{width: "50%", height: "50%"}}>
           <Image src="/images/jemny1.png" width={device !== "laptop" ? "100%" : "160"} height={device !== "laptop" ? "auto" : "93"} alt="jemný" layout="responsive" />
        
           </div>
           <div style={{width: "50%", height: "50%"}}>
           <Image src="/images/jemny2.png" width={device !== "laptop" ? "100%" : "160"} height={device !== "laptop" ? "auto" : "93"} alt="jemný" layout="responsive" />
        
           </div>
        </div>
            </div>
       </div>
    )
}