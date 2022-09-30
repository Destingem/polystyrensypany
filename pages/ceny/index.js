import { Media } from '../../Components/Media';
import CenikLaptop from '../../Components/Cenik/CenikLaptop';
import CenikMobile from '../../Components/Cenik/CenikMobile';
import CenikTablet from '../../Components/Cenik/CenikTablet';
export default function Ceny(props) {
    console.log(props.ceniky);
    let {ceniky} = props
  return (
   <>
   
    <Media between={["zero", "mobile"]}>
        <CenikMobile ceniky={ceniky} />
    </Media>
    <Media between={["mobile", "tablet"]}>
        <CenikTablet ceniky={ceniky} />
    </Media>
    <Media between={["tablet", "laptop"]}>
        <CenikLaptop ceniky={ceniky} />  
    </Media>
   </>
  );
}

export async function getStaticProps(){

    let data = await fetch("http://localhost:1337/api/ceniky?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
    })
    let dataJson = await data.json()
    return {
        props: {
            ceniky: dataJson.data
        }}
}