import 'dayjs/locale/cs';
import MainScreen from "../UI/MainScreen"
import { useForm } from "@mantine/form";
import SubheaderText from "../UI/SubheaderText"
import {Input, InputWrapper, Button, NumberInput, Select, Textarea, MultiSelect, Switch, Space, Progress, Alert} from "@mantine/core"
import { useEffect, useRef, useState } from "react";
import Footer from "../UI/Footer"
import { DatePicker } from "@mantine/dates";
import {FiAlertTriangle} from 'react-icons/fi';
import { useReducedMotion, useWindowScroll } from '@mantine/hooks';
import DefaultScreen from "../UI/DefaultScreen"
export default function PoptavkaMobile(props) {
 
    const dumbBtn = useRef()
    let {device} = props;
    const numberRef = useRef(null);	
    const [scroll, setScroll] = useWindowScroll()
    const [feedback, setFeedback] = useState({type: "", message: ""});
    const [produkty, setProdukty] = useState(["zásyp do podlah", "zásyp do stropů", "zásyp do krovů a střech", "zásyp do vnitřních příček domu", "zásyp dilatační spáry", "zásyp do dutých cihel", "zateplení šachty vzduchotechniky", "zateplení akumulační nádrže", "do betonu", "náplň do sedacích vaků", "sněžení", "ostatní"  ]) 
    const form = useForm(
        {
            initialValues: {
           
                ucel: [],
                mnozstvi: null,
                jednotka: "ks",
                termin: null,
                doprava: false,
                specifikace: "",
                jmeno: "",
                prijmeni: "",
                funkce: "",
                spolecnost: "",
                adresa: "",
                telefon: "",
                email: "",
            }
        }
    )
    function submitHandler(values) {
        props.handleSubmit(values);
        form.setFieldValue("mnozstvi", 0);
        form.reset()
        numberRef.current.value = null;
      
    }
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
    return (
        <div>
        <DefaultScreen label="Poptávka" image="/images/polystyren_jemny_detail2.png" device={device}/>
        
        <div style={{ display:"flex", flexDirection: "column", textAlign: "center", padding: "3vh 5vw 3vh 5vw"}}>
        {feedback && feedback.type === "error" && <Alert color="red" type="error" title="Formulář se nepodařilo odeslat" icon={<FiAlertTriangle/>}>Možná jste bez internetu, nebo se vyskytl problém na naší straně. Zkuste to prosím znovu. Pokud i nadále bude problém přetrvávat kontaktujte nás na email info@polystyrensypany.cz</Alert>}
       { feedback && feedback.type === "success" && <Alert type="success" color="green" icon={<FiAlertTriangle/>}>{feedback.message}</Alert>}
        <form onSubmit={form.onSubmit(submitHandler)} style={device !== "laptop" ? {textAlign: "left",  marginLeft: "auto", marginRight: "auto"} : {textAlign: "left", display: "flex", gap: "5vw", marginLeft: "auto", marginRight: "auto"}}>
        
     
        <div >
        <SubheaderText>Poptávkový formulář</SubheaderText>
        <Space h="3vh"/>
      

        
        <InputWrapper label="Účel použití sypaného polystyren" required>
        <MultiSelect data={produkty} {...form.getInputProps("ucel")} required />
        </InputWrapper>
        <div style={{display: "flex", gap: "5vw"}}>
        <InputWrapper label="Poptávané množství" sx={{width: device !== "laptop" || "tablet" ? "75%" : "75%" }} required>
        <NumberInput placeholder="" formatter={value => {value}} {...form.getInputProps("mnozstvi")} required value={form.values.mnozstvi} ref={numberRef}/>
        </InputWrapper>
        <InputWrapper label="Jednotka" sx={{width: "25%"}} required>
        <Select min={1} max={9999} step={1} data={["ks", "m3"]} defaultValue="ks" {...form.getInputProps("jednotka")} required/>
        </InputWrapper>
        </div>
        
        <InputWrapper label="Požadovaný termín dodání" required >
        <DatePicker locale="cs"  {...form.getInputProps("termin")} required  value={form.values.termin}/>
        </InputWrapper>
        <InputWrapper label="S dopravou" required>
        <Switch 
       color="lime"
      checked={form.values.doprava}
        size="xl"
        onLabel="Ano" offLabel="Ne"
       {...form.getInputProps("doprava")}
    />
        </InputWrapper>
        <InputWrapper label="Další specifikace" >
            <Textarea sx={device == "laptop" && {minHeight: "15vh !important"}} {...form.getInputProps("specifikace")} />
        </InputWrapper>
        <Button type="submit" ref={dumbBtn}  sx={{display: "none"}}/>        </div>
        <Space h="3vh"/>
       <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
       <SubheaderText>Kontaktní údaje</SubheaderText>
        <Space h="3vh"/>
            <div style={{display: "flex", gap : "5vw"}}>

           
            <InputWrapper label="Jméno" required>
                <Input    {...form.getInputProps('jmeno')} required/>
            </InputWrapper>
            <InputWrapper label="Příjmení" required>
                <Input    {...form.getInputProps('prijmeni')} required/>
            </InputWrapper>
            
            </div>
            <div style={{display: "flex", gap : "5vw"}}>
            <InputWrapper label="Funkce" >
                <Input    {...form.getInputProps('funkce')}/>
            </InputWrapper>
            <InputWrapper label="Společnost">
                <Input    {...form.getInputProps('spolecnost')}/>
            </InputWrapper>
            </div>
            <InputWrapper label="Dodací adresa" required>
                <Input    {...form.getInputProps('adresa')} required/>
            </InputWrapper>
            <InputWrapper label="Telefonní číslo" required>
                <Input    {...form.getInputProps('telefon')} required/>
            </InputWrapper>
            <InputWrapper label="Emailová adresa" required>
                <Input    {...form.getInputProps('email')} required/>
            </InputWrapper>
            
            <Button type="submit" variant="gradient" gradient={{from: "#327b62", to: "teal"}} size="lg" sx={{ width: device === "laptop" ? "100%" : "100%", marginTop: "auto", marginTop: "2vh" }}>Odeslat</Button>
       </div>
      
        </form>
        </div>
        <Footer />
        </div>
    );
}