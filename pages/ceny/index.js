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
        <CenikMobile {...props} />
    </Media>
    <Media between={["mobile", "tablet"]}>
        <CenikTablet {...props} />
    </Media>
    <Media between={["tablet", "laptop"]}>
        <CenikLaptop {...props} />  
    </Media>
   </>
  );
}

export async function getStaticProps(){

    let data = await fetch("http://134.122.88.214:1337/api/ceniky?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
    })
    let dataJson = await data.json()
    let data2 = await fetch("http://134.122.88.214:1337/api/dodaci-lhuty?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
        }
    })
    let dodaciLhuty = await data2.json()

    return {
        props: {
            ceniky: dataJson.data, dodaciLhuty: dodaciLhuty.data
        },
        revalidate: 30,}
}