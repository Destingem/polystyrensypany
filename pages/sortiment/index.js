import {Media} from "../../Components/Media"
import SortimentLaptop from "../../Components/Sortiment/SortimentLaptop"
import SortimentTablet from "../../Components/Sortiment/SortimentTablet"
import SortimentMobile from "../../Components/Sortiment/SortimentMobile"
export default function Sortiment() {
 
  return (
    <>
    
        <Media between={["zero", "mobile"]}><SortimentMobile /></Media>
    <Media between={["mobile", "tablet"]}><SortimentTablet /></Media>
    <Media between={["tablet", "tv"]}><SortimentLaptop /></Media>
    </>
  );
}