import NavBar from "./Navbar";
import {Text} from "@mantine/core"

export default function MainScreen(props) {
  return (
    <>
      <div style={{width: "100vw", height: "60vh", backgroundImage: "url(" + props.image + ")", textAlign: "center", objectFit: "cover", display: "flex", flexDirection: "column", backgroundSize: "cover", backgroundPosition: "center"}}>
          <NavBar />
          <div className="centered" style={{marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "auto"}}>
          <Text weight={700} size="xl" sx={{color: "#545454", fontSize: "15vw"}}>{props.label}</Text>
          </div>
        
          

          </div>
          
    </>
  );
}