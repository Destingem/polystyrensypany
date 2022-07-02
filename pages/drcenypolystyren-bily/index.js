import { Media } from "../../Components/Media";
import DrcenyPolystyrenBilyLaptop from "../../Components/DrcenyPolystyrenBily/BilyLaptop";
import DrcenyPolystyrenBilyTablet from "../../Components/DrcenyPolystyrenBily/BilyTablet";
import DrcenyPolystyrenBilyMobile from "../../Components/DrcenyPolystyrenBily/BilyMobile";
export default function DrcenyPolystyrenBily() {
  return (
    <>
      <Media between={["zero", "mobile"]}> <DrcenyPolystyrenBilyMobile /> </Media>
      <Media between={["mobile", "tablet"]}><DrcenyPolystyrenBilyTablet /></Media>
      <Media between={["tablet", "tv"]}> <DrcenyPolystyrenBilyLaptop /> </Media>
    </>
  );
}