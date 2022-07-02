import { Media } from "../../Components/Media";
import HodnoceniMobile from "../../Components/Hodnoceni/HodnoceniMobile";
import HodnoceniTablet from "../../Components/Hodnoceni/HodnoceniTablet";
import HodnoceniLaptop from "../../Components/Hodnoceni/HodnoceniLaptop";
export default function Hodnoceni() {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <HodnoceniMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <HodnoceniTablet />
      </Media>
      <Media between={["tablet", "tv"]}>
        <HodnoceniLaptop />
      </Media>
    </>
  );
}