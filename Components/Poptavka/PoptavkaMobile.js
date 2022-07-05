import 'dayjs/locale/cs';
import MainScreen from "../UI/MainScreenMobile"
import { useForm } from "@mantine/form";
import SubheaderText from "../UI/SubheaderText"
import {Input, InputWrapper, Button, NumberInput, Select, Textarea, MultiSelect, Switch, Space} from "@mantine/core"
import { useState } from "react";
import Footer from "../UI/Footer"
import { DatePicker } from "@mantine/dates";
export default function PoptavkaMobile() {
    const [produkty, setProdukty] = useState(["zásyp do podlah", "zásyp do stropů", "zásyp do krovů a střech", "zásyp do vnitřních příček domu", "zásyp dilatační spáry", "zásyp do dutých cihel", "zateplení šachty vzduchotechniky", "zateplení akumulační nádrže", "do betonu", "náplň do sedacích vaků", "sněžení", "ostatní"  ]) 
    const form = useForm(
        {
            initialValues: {
                a: ""
            }
        }
    )
    function submitHandler(values) {
        console.log(values)
    }
    return (
        <div>
        <MainScreen label="Poptávka" image="/images/polystyren_jemny_detail2.png"/>
        <div style={{ display:"flex", flexDirection: "row", textAlign: "center", padding: "3vh 5vw 3vh 5vw"}}>
        <form onSubmit={form.onSubmit(submitHandler)} style={{textAlign: "left"}}>
        <SubheaderText>Poptávkový formulář</SubheaderText>
        <Space h="3vh"/>
      

        
        <InputWrapper label="Účel použití sypaného polystyren" required>
        <MultiSelect data={produkty} {...form.getInputProps("ucel")} required />
        </InputWrapper>
        <div style={{display: "flex", gap: "5vw"}}>
        <InputWrapper label="Poptávané množství" sx={{width: "75%"}} required>
        <NumberInput placeholder="" formatter={value => {value}} {...form.getInputProps("mnozstvi")} required/>
        </InputWrapper>
        <InputWrapper label="Jednotka" sx={{width: "25%"}} required>
        <Select min={1} max={9999} step={1} data={["ks", "m3"]} defaultValue="ks" {...form.getInputProps("jednotka")} required/>
        </InputWrapper>
        </div>
        
        <InputWrapper label="Požadovaný termín dodání" required >
        <DatePicker locale="cs"  {...form.getInputProps("termin")} required/>
        </InputWrapper>
        <InputWrapper label="S dopravou" required>
        <Switch 
       color="lime"
      
        size="xl"
        onLabel="Ano" offLabel="Ne"
       {...form.getInputProps("doprava")}
    />
        </InputWrapper>
        <InputWrapper label="Další specifikace" >
            <Textarea {...form.getInputProps("specifikace")} />
        </InputWrapper>
        <Space h="3vh"/>
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
            <InputWrapper label="Kontaktní adresa" required>
                <Input    {...form.getInputProps('adresa')} required/>
            </InputWrapper>
            <InputWrapper label="Telefonní číslo" required>
                <Input    {...form.getInputProps('telefon')} required/>
            </InputWrapper>
            <InputWrapper label="Emailová adresa" required>
                <Input    {...form.getInputProps('email')} required/>
            </InputWrapper>
            
            <Button type="submit" variant="gradient" gradient={{from: "teal", to: "lime"}} size="lg" sx={{ width: "100%", marginTop: "3vh" }}>Odeslat</Button>
        </form>
        </div>
        <Footer />
        </div>
    );
}