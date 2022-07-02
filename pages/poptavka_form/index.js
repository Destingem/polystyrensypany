import { Media } from "../../Components/Media";
import PoptavkaLaptop from "../../Components/Poptavka/PoptavkaLaptop";
import PoptavkaMobile from "../../Components/Poptavka/PoptavkaMobile";
import PoptavkaTablet from "../../Components/Poptavka/PoptavkaTablet";

export default function PoptavkaForm() {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <PoptavkaMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <PoptavkaTablet />
      </Media>
      <Media between={["tablet", "tv"]}>
        <PoptavkaLaptop />
      </Media>
    </>
  );
}
