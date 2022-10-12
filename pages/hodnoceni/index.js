import { Media } from "../../Components/Media";
import HodnoceniMobile from "../../Components/Hodnoceni/HodnoceniMobile";
import HodnoceniTablet from "../../Components/Hodnoceni/HodnoceniTablet";
import HodnoceniLaptop from "../../Components/Hodnoceni/HodnoceniLaptop";
import { useState } from "react";
export default function Hodnoceni(props) {
  const [feedback, setFeedback] = useState({type: "", message: ""});
  async function handleSubmit(event) {
    
   
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
console.log(props);
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <HodnoceniMobile  handleSubmit={handleSubmit} feedback={feedback} data={props.data}/>
      </Media>
      <Media between={["mobile", "tablet"]}>
        <HodnoceniTablet  handleSubmit={handleSubmit} feedback={feedback} data={props.data}/>
      </Media>
      <Media between={["tablet", "tv"]}>
        <HodnoceniLaptop  handleSubmit={handleSubmit} feedback={feedback} data={props.data}/>
      </Media>
    </>
  );
}
export async function getStaticProps() {
  try{
    let fetched = await fetch("http://134.122.88.214:1337/api/hodnocenis?populate=*", {
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let data = await fetched.json();
  var props = {data}
  } catch{
    props = {}
  }
 
  return({
    props: props,
    revalidate: 30,
  })
}