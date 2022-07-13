import { useState } from "react";
import { Media } from "../../Components/Media";
import PoptavkaLaptop from "../../Components/Poptavka/PoptavkaLaptop";
import PoptavkaMobile from "../../Components/Poptavka/PoptavkaMobile";
import PoptavkaTablet from "../../Components/Poptavka/PoptavkaTablet";

export default function PoptavkaForm() {
  const [feedback, setFeedback] = useState({type: "", message: ""});
  async function handleSubmit(event) {
    
    console.log(event);
  try{
    var response = await fetch("/api/objednavka", {
      method: "POST",
      body: JSON.stringify(event),
    
    })
  } catch(e){
    console.log(e);
    console.log("A");
    setFeedback({type: "error", message: "Nepodařilo se odeslat formulář"});
  }
  console.log(response);
  if(response && response.ok && response.ok !== true){
    setFeedback({type: "error", message: "Nepodařilo se odeslat formulář"});
  } else if (response && response.ok === true){ 
    setFeedback({type: "success", message: "Formulář byl odeslán"});
  } else {
    setFeedback({type: "error", message: "Nepodařilo se odeslat formulář"});
  }
}
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <PoptavkaMobile handleSubmit={handleSubmit} feedback={feedback} />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <PoptavkaTablet handleSubmit={handleSubmit} feedback={feedback}/>
      </Media>
      <Media between={["tablet", "tv"]}>
        <PoptavkaLaptop handleSubmit={handleSubmit} feedback={feedback}/>
      </Media>
    </>
  );
}
