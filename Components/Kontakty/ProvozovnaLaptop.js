import {Table, Text, List, ListItem} from "@mantine/core";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
export default  function ProvozovnaLaptop() {
    return <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <Text
          weight={500}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1.5rem",
            marginRight: "auto",
   
            textAlign: "left",
          }}
        >
          Provozní doba
        </Text>
        <Table sx={{height: "50%"}}>
          <thead>
            <tr>
              <th>Den</th>
              <th>Otevírací doba</th>
            </tr>
          </thead>
          <tbody style={{ color: "#545454", fontWeight: "400" }}>
            <tr>
              <td>Pondělí - Pátek</td>
              <td>8:00 - 11:00</td>
            </tr>
            <tr>
              <td>Pondělí - Pátek ( dle telefonické dohody)</td>
              <td>12:00 - 17:00</td>
            </tr>
            <tr>
              <td>Sobota - Neděle a mimo pracovní dobu</td>
              <td> dle telefonické dohody</td>
            </tr>
          </tbody>
        </Table>
      
          <Text
            weight={500}
            size="xl"
            sx={{
              color: "#545454",
              fontSize: "1.5rem",
              marginRight: "auto",
         
              textAlign: "left",
            }}
          >
            Kontakty
          </Text>
          <List spacing="xs" icon={<MdPhone color="rgb(25, 95, 0)" />} sx={{textAlign: "left"}}>
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
                Telefon 1: +420 723 513 638
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
                Telefon 2: +420 737 226 697
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
                Email: info@polystyrensypany.cz
              </Text>
            </ListItem>
          </List>
          <Text weight="bold">
            Než se k nám rozjedete, je vždy lepší zavolat předem, abychom byli
            na provozovně a nevyřizovali zakázku v terénu.
          </Text>
      

      </div>
      <div
        style={{
          margin: " 0",
          gap: "3vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          weight={500}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1.5rem",
            marginRight: "auto",
         
            textAlign: "left",
          }}
        >
          Adresa provozovny
        </Text>
        <Text
          weight={400}
          size="xl"
          sx={{
            color: "#545454",
            fontSize: "1rem",
            textAlign: "left",
            width: "100%",
          }}
        >
          Areál se nachází na rohu ulic Mladoboleslavská a Štěpánovská.
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
          Polystyren sypaný - Richard Humeš Štěpánovská 330 190 17 Praha 9 -
          Vinoř
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
            width={window.innerWidth * 0.3}
            height={window.innerHeight * 0.4}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=%C5%A0t%C4%9Bp%C3%A1novsk%C3%A1%20330%2019017%20Praha%209%20%E2%80%93%20Vino%C5%99&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>;
  }
  