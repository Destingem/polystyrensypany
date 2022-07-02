import { Media } from "../../Components/Media";
import KontaktyMobile from "../../Components/Kontakty/KontaktyMobile";
import KontaktyTablet from "../../Components/Kontakty/KontaktyTablet";
import KontaktyLaptop from "../../Components/Kontakty/KontaktyLaptop";

export default function Kontakty() {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <KontaktyMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <KontaktyTablet />
      </Media>
      <Media between={["tablet", "tv"]}>
        <KontaktyLaptop />
      </Media>
    </>
  );
}