import NavBar from "./Navbar";
import {Text} from "@mantine/core"

export default function MainScreen(props) {
  let labelSx = {color: "#545454", fontSize: "4rem", marginTop: "0"}
  if (props.device == "laptop") {
    labelSx = {color: "#545454", fontSize: "6rem", marginTop: "0"}
  }
  if (props.device == "tablet") {
    labelSx = {color: "#545454", fontSize: "6rem", marginTop: "0"}
  }
 
  let labelSx2 = {color: "#545454", fontSize: "2rem"}
  if (props.device == "laptop") {
    labelSx2 = {color: "#545454", fontSize: "3rem", marginBottom: "0"}
  }
  if (props.device == "tablet") {
    labelSx2 = {color: "#545454", fontSize: "3.5rem"}
  }
  return (
    <>
      <div style={{width: "100vw", height: "60vh", backgroundImage: "url(" + props.image + ")", textAlign: "center", objectFit: "cover", display: "flex", flexDirection: "column", backgroundSize: "cover", backgroundPosition: "center"}}>
          <NavBar />
          <div className="centered" style={{marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column"}}>
          {props.polysyp && <Text component="h1" sx={labelSx2}>Polystyren sypaný</Text>}
          <Text weight={700} component="h1" size="xl" sx={labelSx}>{props.label}</Text>
          </div>
        
          

          </div>
          
    </>
  );
}