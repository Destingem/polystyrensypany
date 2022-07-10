import MainScreen from "../UI/MainScreen";
import {Text, Card, Space, Divider, Grid, Group, Badge, Input, InputWrapper, Textarea, NumberInput, Select, Button} from "@mantine/core";
import Footer from "../UI/Footer";
import { useForm } from "@mantine/form";
import { useState } from "react";

export default function HodnoceniMobile(props) {
    let {device} = props;
    const form = useForm({
        initialValues: {
          jmeno: "",
          prijmeni: "",
          spolecnost: "",
          produkt: "",
          ciselne_hodnoceni: "",
          slovni_hodnoceni: "",

        },
    
        validate: {
        
        },
      })

      var submitHandler = (values) => {
        console.log(values);
        var mail = document.createElement("a");
mail.href = "mailto:info@polystyrensypany.cz?subject= Recenze na produkt " + values.produkt + "&body=" + "Jméno: "  + values.jmeno + "%0A Příjmení: " + values.prijmeni + "%0A Společnost: "  + values.spolecnost + "%0A"+  "Číselné hodnocení: " + values.ciselne_hodnoceni + "%0A Slovní hodnocení: " + values.slovni_hodnoceni;
mail.click();
        }
    const [produkty, setProdukty] = useState(["EPS Bílý", "EPS Šedý", "XPS"])
    const hodnoceni = [{jmeno: "Ondřej", prijmeni: "Zaplatilek", hodnoceni: "10", zprava: "Dobrý partner, věřím, že Vám pomůžu s realizací svých zakázek. Děkuji.", zbozi: "Polystyren EPS Bílý", firma: "Gogol a.s."}, {jmeno: "Ondřej", prijmeni: "Zaplatilek", hodnoceni: "9", zprava: "Dobrý partner, věřím, že Vám pomůžu s realizací svých zakázek. Děkuji.", zbozi: "Polystyren EPS Bílý", firma: "Gogol a.s."}, {jmeno: "Ondřej", prijmeni: "Zaplatilek", hodnoceni: "10", zprava: "Dobrý partner, věřím, že Vám pomůžu s realizací svých zakázek. Děkuji.", zbozi: "Polystyren EPS Bílý", firma: "Gogol a.s."}, {jmeno: "Ondřej", prijmeni: "Zaplatilek", hodnoceni: "9", zprava: "Dobrý partner, věřím, že Vám pomůžu s realizací svých zakázek. Děkuji.", zbozi: "Polystyren EPS Bílý", firma: "Gogol a.s."}]
    return (
        <div>
        <MainScreen label="Hodnocení zákazníky" image="/images/polystyrenestructure.jpg" device={device} />
        <div style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
        }}><Text
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "center", marginBottom: "3vh" }}
        >
         Chcete-li nám poslat hodnocení, můžete k tomu využít <strong style={{color: "#195f00"}}>formulář níže</strong> nebo můžete napsat recenzi přímo na Googlu zde.
        </Text>
        <Grid span={device !== "laptop" ? 12 : 3 }>
        {hodnoceni && hodnoceni.map((item, index) => {
            return(
                <Grid.Col span={device !== "laptop" ? 12 : 3 }>
            <Card shadow="xl" style={{ width: "100%", height: "fitContent", marginBottom: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2vh", padding: "0" }}>
            <Group spacing="xs">
            
            <Text weight={700} size="xl" sx={{ color: "#545454", fontSize: "1.5rem" }}>{item.zbozi}</Text>
            <Badge sx={{backgroundColor: "#28810870"}}><Text weight={700} size="xl" sx={{ color: "#545454", fontSize: "1rem" }}>{item.hodnoceni + "/10"}</Text></Badge>
            </Group>
            
            
            <Text weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", padding: "0 3vw" }}>{item.zprava}</Text>
            <Group>
            <Text weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.2rem" }}>{item.jmeno} {item.prijmeni}</Text>
            <Text weight={500} size="xl"  sx={{ color: "#545454", fontSize: "1rem" }}><i>{item.firma}</i></Text>
            </Group>
            </div>
            </Card>
            </Grid.Col>
            )
        
        
        })}
        </Grid>
        <Text weight={700} size="xl" sx={device !== "laptop" ? { color: "#545454", fontSize: "1.5rem", textAlign: "center" } : { color: "#545454", fontSize: "3rem", textAlign: "center" }}>Formulář</Text>
        <form onSubmit={form.onSubmit(submitHandler)} style={device !== "laptop" ? {} : {display: "flex", flexDirection: "column", alignItems: "right", width: "50%", gap: "1vh", alignSelf: "center"}}>
            <div style={{display: "flex", gap : "5vw"}}>
            <InputWrapper label="Jméno" required sx={{width: "50%"}}>
                <Input    {...form.getInputProps('jmeno')}/>
            </InputWrapper>
            <InputWrapper label="Příjmení" required sx={{width: "50%"}}>
                <Input    {...form.getInputProps('prijmeni')}/>
            </InputWrapper>
            </div>
            <InputWrapper label="Společnost">
                <Input    {...form.getInputProps('spolecnost')} />
            </InputWrapper>
            <InputWrapper label="Číselné hnodnocení" required>
                <NumberInput min={0} max={10} placeholder="od 0 do 10"    {...form.getInputProps('ciselne_hodnoceni')}/>
            </InputWrapper>
            <InputWrapper label="Produkt">
                <Select data={produkty} placeholder="Vyberte produkt"    {...form.getInputProps('produkt')}
      nothingFound="Produkt nebyl nalezen"
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => setProdukty((current) => [...current, query])} />
            </InputWrapper>
            <InputWrapper label="Slovní hodnocení" required   >
                <Textarea  {...form.getInputProps('slovni_hodnoceni')} autosize="true"/>
            </InputWrapper>
            <Button type="submit" variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={device !== "laptop" ? { width: "100%", marginTop: "3vh" } : { width: "25%", marginTop: "3vh", alignSelf: "end"}}>Odeslat</Button>
        </form>
        </div>
        <Footer />
        </div>
    );
}