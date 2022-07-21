import NavBar from "./Navbar";
import {Space, Text} from "@mantine/core"
import Image from "next/image";

export default function MainScreen(props) {
  let labelSx = {color: "white", fontSize: "3rem", margin: "0"}
  if (props.device == "laptop") {
    labelSx = {color: "white", fontSize: "5rem", marginTop: "0", margin: "0"}
  }
  if (props.device == "tablet") {
    labelSx = {color: "white", fontSize: "6rem", marginTop: "0"}
  }
 
  let labelSx2 = {color: "white", fontSize: "2rem"}
  if (props.device == "laptop") {
    labelSx2 = {color: "white", fontSize: "3rem", marginBottom: "0"}
  }
  if (props.device == "tablet") {
    labelSx2 = {color: "white", fontSize: "3.5rem"}
  }
  return (
    <>
      {props.device == "laptop" && <div style={{width: "100%", height: "60vh", backgroundImage: "url(/images/laptopdefault.png)", textAlign: "center", objectFit: "cover", display: "flex", flexDirection: "column", backgroundSize: "cover", backgroundPosition: "bottom"}}>
          <NavBar />
          <div className="centered" style={{marginTop: "auto", marginBottom: "0", display: "flex", flexDirection: "column"}}>
          {props.polysyp && <Text component="h1" sx={labelSx2}>Polystyren sypaný</Text>}
          <div style={{backgroundColor: "#3a7b61", maxHeight: "100%", padding: "0 auto 0 auto", minWidth: "65%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
          <Text weight={700} component="h1" size="xl" sx={labelSx}>{props.label}</Text>
          </div>
          </div>
        
          

          </div>}
    {props.device !== "laptop" && <div style={{width: "100vw", height: "60vh", backgroundImage: "url(/images/mobiledefault.png)", textAlign: "center", objectFit: "cover", display: "flex", flexDirection: "column", backgroundSize: "cover", backgroundPosition: "bottom"}}>
    <NavBar />
          <div className="centered" style={{marginTop: "12vh",marginBottom: "10vh",display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "3vh", overflow: "hidden"}}>
       <div>
       <Image src="/images/mobilelogo.png" layout="responsive" width={400} height={79}/>
       </div>
         
          {props.polysyp && <Text component="h1" sx={labelSx2}>Polystyren sypaný</Text>}
          <div style={{backgroundColor: "#3a7b61", maxHeight: "100%", padding: "0 auto 0 auto", minWidth: "100%", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
          <Text weight={700} component="h1" size="xl" sx={labelSx}>{props.label}</Text>
          </div>
          </div>
        
          

          </div>}
          
    </>
  );
}