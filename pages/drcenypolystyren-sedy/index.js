import { Media } from "../../Components/Media";
import DrcenyPolystyrenSedyLaptop from "../../Components/DrcenyPolystyrenSedy/SedyLaptop";
import DrcenyPolystyrenSedyTablet from "../../Components/DrcenyPolystyrenSedy/SedyTablet";
import DrcenyPolystyrenSedyMobile from "../../Components/DrcenyPolystyrenSedy/SedyMobile";
export default function DrcenyPolystyrenSedy() {
  return (
    <>
      <Media between={["zero", "mobile"]}> <DrcenyPolystyrenSedyMobile /> </Media>
    <Media between={["mobile", "tablet"]}><DrcenyPolystyrenSedyTablet /></Media>
    <Media between={["tablet", "tv"]}> <DrcenyPolystyrenSedyLaptop /> </Media>
    </>
  );
}