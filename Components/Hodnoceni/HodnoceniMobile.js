import MainScreen from "../UI/MainScreen";
import {Text, Card, Space, Divider, Grid, Group, Badge, Input, InputWrapper, Textarea, NumberInput, Select, Button, Alert} from "@mantine/core";
import Footer from "../UI/Footer";
import { useForm } from "@mantine/form";
import { useEffect, useRef, useState } from "react";
import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import { FiAlertTriangle } from "react-icons/fi";
import DefaultScreen from "../UI/DefaultScreen";
import Heading from "../UI/Heading";
import Link from "next/link";
export default function HodnoceniMobile(props) {
    const [scroll, setScroll] = useWindowScroll()
    const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 180 });

    const [feedback, setFeedback] = useState({type: "", message: ""});
    let {device, data} = props;
    const form = useForm({
        initialValues: {
          jmeno: "",
          prijmeni: "",
          spolecnost: "",
          produkt: "",
          ciselne_hodnoceni: 0,
          slovni_hodnoceni: "",

        },
    
        validate: {
        
        },
      })
      useEffect(()=> {
        setFeedback(props.feedback)
     
    
    }, [props.feedback])
    useEffect(()=> {
        if (feedback.type === "success"){
            form.reset();
            setScroll({x: 0, y: 0})
            setTimeout(()=> {
                setFeedback({type: "", message: ""})
            }, [5000])
         
        } else if (feedback.type === "error"){
            setScroll({x: 0, y: 0})
        }
    }, [feedback])
    function submitHandler(values) {
        
        props.handleSubmit(values);
      
    }
    const [produkty, setProdukty] = useState(["Polystyren sypaný - EPS bílý", "Polystyren sypaný - EPS šedý", "Polystyren sypaný - XPS"])
    return (
        <div>
        <DefaultScreen label="Hodnocení zákazníky" image="/images/polystyrenestructure.jpg" device={device} />
        <div style={{
          width: "100vw",
          height: "fitContent",
          display: "flex",
          flexDirection: "column",
          padding: "3vh 5vw 3vh 5vw",
        }}><Text
        component="p"
          size="lg"
          weight={400}
          sx={{ color: "#545454", fontSize: "1rem", textAlign: "center", marginBottom: "3vh" }}
        >
         Chcete-li nám poslat hodnocení, můžete k tomu využít <strong onClick={()=> {scrollIntoView( {alignment: 'center'} )}} style={{color: "#195f00", cursor: "pointer"}}>formulář níže</strong> nebo můžete napsat recenzi přímo na <Link href="https://g.page/polystyrensypany/review?kd">Googlu</Link>.
        </Text>
        {feedback && feedback.type === "error" && <Alert color="red" type="error" title="Formulář se nepodařilo odeslat" icon={<FiAlertTriangle/>}>Možná jste bez internetu, nebo se vyskytl problém na naší straně. Zkuste to prosím znovu. Pokud i nadále bude problém přetrvávat kontaktujte nás na email info@polystyrensypany.cz</Alert>}
       { feedback && feedback.type === "success" && <Alert type="success" color="green" icon={<FiAlertTriangle/>}>{feedback.message}</Alert>}
        <Grid span={device !== "laptop" ? 12 : 3 } sx={{alignItems: "stretch"}} align="stretch">
        {data && data.data && data.data.map((item, index) => {
            let recenze = item.attributes
            return(
                <Grid.Col span={device !== "laptop" ? 12 : 3 }>
            <Card shadow="xl" style={{ width: "100%", height: "100%", marginBottom: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2vh", padding: "0" }}>
            <Group spacing="xs">
            <Text component="p" weight={700} size="xl" sx={{ color: "#545454", fontSize: "1.5rem" }}>{recenze.ucel_pouziti}</Text>
            </Group>
            <Text component="p" weight={400} size="xl" sx={{ color: "#545454", fontSize: "1rem", padding: "0 0.5vw" }}>{recenze.slovni_hodnoceni}</Text>
            <Group>
            <Text component="p" weight={600} size="xl" sx={{ color: "#545454", fontSize: "1.2rem" }}>{recenze.jmeno_a_prijmeni}</Text>
            {recenze.spolecnost && <Text component="p" weight={500} size="xl"  sx={{ color: "#195f00", fontSize: "1rem" }}><i>{recenze.spolecnost}</i></Text>}
            </Group>
            </div>
            </Card>
            </Grid.Col>
            )
        
        
        })}
        </Grid>
        <Heading device={device} align="center">Formulář</Heading>
        <form onSubmit={form.onSubmit(submitHandler)} style={device !== "laptop" ? {} : {display: "flex", flexDirection: "column", alignItems: "right", width: "50%", gap: "1vh", alignSelf: "center"}} ref={targetRef}>
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
            
            <InputWrapper label="Účel použití">
                <Input placeholder="např. Zásyp do krovů"    {...form.getInputProps('produkt')}
      />
            </InputWrapper>
            <InputWrapper label="Slovní hodnocení" required   >
                <Textarea  {...form.getInputProps('slovni_hodnoceni')} autosize="true"/>
            </InputWrapper>
            <Button type="submit" variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={device !== "laptop" ? { width: "100%", marginTop: "3vh" } : { width: "25%", marginTop: "3vh", alignSelf: "end"}}>Odeslat</Button>
        </form>
        </div>
        <Footer />
        </div>
    );
}