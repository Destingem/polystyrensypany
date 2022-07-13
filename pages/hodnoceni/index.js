import { Media } from "../../Components/Media";
import HodnoceniMobile from "../../Components/Hodnoceni/HodnoceniMobile";
import HodnoceniTablet from "../../Components/Hodnoceni/HodnoceniTablet";
import HodnoceniLaptop from "../../Components/Hodnoceni/HodnoceniLaptop";
import { useState } from "react";
export default function Hodnoceni() {
  const [feedback, setFeedback] = useState({type: "", message: ""});
  async function handleSubmit(event) {
    
    console.log(event);
  try{
    var response = await fetch("/api/hodnoceni", {
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
        <HodnoceniMobile  handleSubmit={handleSubmit} feedback={feedback} />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <HodnoceniTablet  handleSubmit={handleSubmit} feedback={feedback} />
      </Media>
      <Media between={["tablet", "tv"]}>
        <HodnoceniLaptop  handleSubmit={handleSubmit} feedback={feedback} />
      </Media>
    </>
  );
}