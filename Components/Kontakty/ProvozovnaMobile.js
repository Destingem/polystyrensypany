import {Table, Text, List, ListItem} from "@mantine/core";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
import SubHeading1 from "../UI/SubHeading1";
export default function ProvozovnaMobile(props) {
  console.log(props);
  let device = props.device;
  let { provozniDoby, kontaktniUdaje } = props;;
      return(
         <>
        <SubHeading1 device={device}
        >
          Provozní doba
        </SubHeading1>
        <Table>
          <thead>
            <tr>
              <th>Den</th>
              <th>Otevírací doba</th>
            </tr>
          </thead>
          <tbody style={{ color: "#545454", fontWeight: "400" }}>
          {props.provozniDoby.map((radek, index) => {
            return (
              <tr key={index}>
                <td>{radek.Den}</td>
                <td>{radek.Oteviraci_doba}</td>
              </tr>
            );
          })}
          
            
          </tbody>
        </Table>
        <div
          style={{
            margin: "5vh 0",
            gap: "3vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SubHeading1 device={device}
          >
             Adresa provozovny
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
            {kontaktniUdaje.adresa_provozovny}
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
              src="https://maps.google.com/maps?q=%C5%A0t%C4%9Bp%C3%A1novsk%C3%A1%20330%2019017%20Praha%209%20%E2%80%93%20Vino%C5%99&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <div
            style={{
              margin: "5vh 0",
              gap: "3vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SubHeading1 device={device}
            >
              Kontakty
            </SubHeading1>
            <List spacing="xs" icon={<MdPhone color="rgb(25, 95, 0)" />}>
              <ListItem>
                <Text
                  weight={400}
                  size="xl"
                  sx={{
                    color: "#545454",
                    fontSize: "1rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {kontaktniUdaje.telefon_1}
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  weight={400}
                  size="xl"
                  sx={{
                    color: "#545454",
                    fontSize: "1rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {kontaktniUdaje.telefon_2}
                </Text>
              </ListItem>
              <ListItem icon={<MdAlternateEmail color="rgb(25, 95, 0)" />}>
                <Text
                  weight={400}
                  size="xl"
                  sx={{
                    color: "#545454",
                    fontSize: "1rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {kontaktniUdaje.email_1}
                  {kontaktniUdaje.email_2}
                </Text>
              </ListItem>
            </List>
            <Text weight="bold">
              Než se k nám rozjedete, je vždy lepší zavolat předem, abychom byli
              na provozovně a nevyřizovali zakázku v terénu.
            </Text>
          </div>

        </div>
      </>)
  }