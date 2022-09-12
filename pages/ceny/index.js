import { Media } from '../../Components/Media';
import CenikLaptop from '../../Components/Cenik/CenikLaptop';
import CenikMobile from '../../Components/Cenik/CenikMobile';
import CenikTablet from '../../Components/Cenik/CenikTablet';
export default function Ceny() {
  return (
   <>
   
    <Media between={["zero", "mobile"]}>
        <CenikMobile />
    </Media>
    <Media between={["mobile", "tablet"]}>
        <CenikTablet />
    </Media>
    <Media between={["tablet", "laptop"]}>
        <CenikLaptop />  
    </Media>
   </>
  );
}