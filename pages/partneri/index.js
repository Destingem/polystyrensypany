import { Media } from "../../Components/Media";
import PartneriTablet from "../../Components/Partneri/PartneriTablet";
import PartneriMobile from "../../Components/Partneri/PartneriMobile";
import PartneriLaptop from "../../Components/Partneri/PartneriLaptop";
export default function Partneri() {
 
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <PartneriMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <PartneriTablet/>
      </Media>
      <Media between={["tablet", "tv"]}>
        <PartneriLaptop />
      </Media>
    </>
  );
}
