import { List, ListItem, Space, Table, Text } from "@mantine/core";
import Footer from "../UI/Footer";
import SubHeading1 from "../UI/SubHeading1";
import ProvozovnaLaptop from "./ProvozovnaLaptop";
import ProvozovnaMobile from "./ProvozovnaMobile";
import DefaultScreen from "../UI/DefaultScreen";
import Heading from "../UI/Heading";
export default function KontaktyMobile(props) {
  let {device,provozniDoby, kontaktniUdaje} = props;
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
        <Heading device={device}
        >
          Výroba a prodej
        </Heading>
        <Space size="xl" />
       {device !== "laptop" ? <ProvozovnaMobile device={device} provozniDoby={provozniDoby} kontaktniUdaje={kontaktniUdaje}/>: <ProvozovnaLaptop device={device} provozniDoby={provozniDoby} kontaktniUdaje={kontaktniUdaje}/>}
     {device !== "laptop" ?   <div
            style={{
              margin: " 0",
              gap: "3vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SubHeading1 device={device}
            >
              Korespondenční adresa
            </SubHeading1>
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
              {kontaktniUdaje.korespondencni_adresa}
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
            <ListItem> <strong>IČ</strong>: {kontaktniUdaje.IC}</ListItem>
            <ListItem><strong>DIČ</strong>: {kontaktniUdaje.DIC}</ListItem>
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
            <SubHeading1 device={device}
            >
              Korespondenční adresa
            </SubHeading1>
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
               {kontaktniUdaje.korespondencni_adresa}
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
         <ListItem> <strong>IČ</strong>: {kontaktniUdaje.IC}</ListItem>
            <ListItem><strong>DIČ</strong>: {kontaktniUdaje.DIC}</ListItem>
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




