import { Grid, Text } from "@mantine/core";
import Link from "next/link";
export default function FooterLaptop(props) {
  let { info } = props;
  let links = [
    {
      name: "O nás",
      to: "/o_nas",
      sublinks: [
        { name: "Certifikáty", to: "/certifikat" },
        { name: "Partneři", to: "/partneri" },
        { name: "Hodnocení zákazníky", to: "/hodnoceni" },
      ],
    },
    {
      name: "Sortiment",
      to: "/sortiment",
      sublinks: [
        { name: "Polystyren sypaný - EPS bílý", to: "/drcenypolystyren-bily" },
        { name: "Polystyren sypaný - EPS jemný", to: "/eps-jemny" },
        {name: "Polystyren sypaný - EPS šedý", to: "/drcenypolystyren-sedy"},
        {name: "Polystyren sypaný - XPS", to: "/drcenypolystyren-XPS"}
      ],
    },
    {name: "Služby", to: "/foukana-izolace", sublinks: [
        {name: "Foukaná izolace", to: "/foukana-izolace"},
    ]},
    {name: "Další", to: "/", sublinks: [{name: "Novinky", to: "/novinky"},{name: "Poptávka", to: "/poptavka_form"}, {name: "Recyklace", to: "/likvidace-recyklace"} ,{name: "Kontakty", to: "/kontakty"}]},
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#E5E5E5",
        height: "25vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#327b62",
          width: "50vw",
          height: "45vw",
          borderRadius: "50%",
          marginLeft: "-15vw",
          marginTop: "-10vw",
          paddingLeft: "15vw",
          paddingTop: "15vw",
          paddingRight: "7vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            paddingTop: "3vh",
            alignItems: "left",
            textAlign: "left",
            paddingLeft: "4vw",
          }}
        >
          <Text
            component="h3"
            sx={{ color: "white", fontSize: "2vw", margin: "0" }}
          >
            Polystyren sypaný
          </Text>
          <Text
            color="#eeeeee"
            component="em"
            sx={{ color: "white", fontSize: "1.25vw", margin: "0" }}
          >
            ta pravá izolace
          </Text>
          <Text
            component="h4"
            sx={{
              color: "white",
              fontSize: "1.5vw",
              marginTop: "2vh",
              marginBottom: "1vh",
            }}
          >
            Kontakt
          </Text>
          <Grid>
            <Grid.Col>
              <Text
                component="p"
                sx={{ color: "white", fontSize: "1vw", margin: "0" }}
              >
                {info && info.telefon_1}
              </Text>
              <Text
                component="p"
                sx={{ color: "white", fontSize: "1vw", margin: "0" }}
              >
                {info && info.telefon_2}
              </Text>
              <Text
                component="p"
                sx={{ color: "white", fontSize: "1vw", margin: "0" }}
              >
                {info && info.email_1}
                {info && info.email_2}
              </Text>
            </Grid.Col>
          </Grid>
          <Text
            component="h4"
            sx={{
              color: "white",
              fontSize: "1.5vw",
              marginTop: "2vh",
              marginBottom: "1vh",
            }}
          >
            Výroba a prodej
          </Text>
          <Text
            component="p"
            sx={{ color: "white", fontSize: "1vw", margin: "0" }}
          >
            {info && info.nazev_spolecnosti}
          </Text>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "100%", flexWrap: "wrap", marginTop: "-3vh" }}>
        {links.map((section) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                paddingTop: "3vh",
                alignItems: "left",
                textAlign: "left",
                paddingLeft: "4vw",
              }}
            >
              <Link href={section.to}>
                <Text
                  component="h4"
                  sx={{
                    color: "#327b62",
                    fontSize: "1.5vw",
                    marginTop: "2vh",
                    marginBottom: "1vh",
                    cursor: "pointer",
                  }}
                >
                  {section.name}
                </Text>
              </Link>
              {section.sublinks.map((sublink) => {
                return (
                  <Link href={sublink.to}>
                    <Text
                      component="p"
                      sx={{
                        color: "#327b62",
                        fontSize: "1vw",
                        margin: "0",
                        cursor: "pointer",
                      }}
                    >
                      {sublink.name}
                    </Text>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <div style={{ backgroundColor: "#61AC5B", width: "" }}></div>
    </div>
  );
}
