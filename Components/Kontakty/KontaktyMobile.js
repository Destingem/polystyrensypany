import { List, ListItem, Space, Table, Text } from "@mantine/core";
import Footer from "../UI/Footer";
import MainScreen from "../UI/MainScreen";
import { AiOutlinePhone } from "react-icons/ai";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
import ProvozovnaLaptop from "./ProvozovnaLaptop";
import ProvozovnaMobile from "./ProvozovnaMobile";
import DefaultScreen from "../UI/DefaultScreen";
export default function KontaktyMobile(props) {
  let {device} = props;
  return (
    <div>
      <DefaultScreen label="Kontakty" device={device} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
          height: "fitContent",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text
          weight={600}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: device !== "laptop" ? "1.5rem" : "2rem",
            marginRight: "auto",
            marginLeft: device !== "laptop" ? "auto" : "",
            textAlign: device !== "laptop" ? "center" : "left",
          }}
        >
          Výroba a prodej
        </Text>
        <Space size="xl" />
       {device !== "laptop" ? <ProvozovnaMobile />: <ProvozovnaLaptop />}
     {device !== "laptop" ?   <div
            style={{
              margin: " 0",
              gap: "3vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              weight={600}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: device !== "laptop" ? "1.5rem" : "2rem",
                marginRight: "auto",
                marginLeft: "auto",
                textAlign: "center",
              }}
            >
              Korespondenční adresa
            </Text>
            <Text
              weight={400}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: "1rem",
                textAlign: "center",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Olešnická 511/23 197 00 Praha 9
            </Text>
            <Text
              weight={400}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: "1rem",
                textAlign: "center",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <em>Na této adrese je možný výdej zboží pouze po předchozí telefonické dohodě</em>
              </Text>
              <div
            class="gmap_canvas"
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <iframe
              title="mapa"
              style={{ borderRadius: "3px" }}
              width={window.innerWidth}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ole%C5%A1nick%C3%A1%20511/23%20197%2000%20Praha%209&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
         <List icon=" ">
            <ListItem> <strong>IČ</strong>: 68529058</ListItem>
            <ListItem><strong>DIČ</strong>: CZ6903264720</ListItem>
            <ListItem>Jsme plátci DPH</ListItem>

         </List>
        
          </div>:   <div
            style={{
              margin: "5vh 0",
              gap: "3vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text
              weight={600}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: device !== "laptop" ? "1.5rem" : "2rem",
                marginRight: "auto",
               
                textAlign: "left",
              }}
            >
              Korespondenční adresa
            </Text>
           <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div style={{width: "50%"}}>
          <Text
              weight={400}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: "1rem",
                textAlign: "left",
                width: "100%",
             
                marginRight: "auto",
              }}
            >
              Olešnická 511/23 197 00 Praha 9
            </Text>
            <Text
              weight={400}
              size="xl"
              sx={{
                color: "#545454",
                fontSize: "1rem",
                textAlign: "left",
                width: "100%",
              
                marginRight: "auto",
              }}
            >
              <em>Na této adrese je možný výdej zboží pouze po předchozí telefonické dohodě</em>
              </Text>
             
         <List icon={" "} sx={{textAlign: "left"}}>
            <ListItem> <strong>IČ</strong>: 68529058</ListItem>
            <ListItem><strong>DIČ</strong>: CZ6903264720</ListItem>
            <ListItem>Jsme plátci DPH</ListItem>

         </List>
          </div>
         <div
            class="gmap_canvas"
            style={{
              width: "50%",
              height: "fitContent",
              alignItems: "end",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <iframe
              title="mapa"
              style={{ borderRadius: "3px" }}
              width={window.innerWidth * 0.3}
              height={window.innerHeight * 0.4}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Ole%C5%A1nick%C3%A1%20511/23%20197%2000%20Praha%209&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
           </div>
          </div>}
      
      </div>
      <Footer />
    </div>
  );
          }




