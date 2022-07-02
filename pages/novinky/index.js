import NovinkyLaptop from "../../Components/Novinky/NovinkyLaptop";
import NovinkyTablet from "../../Components/Novinky/NovinkyTablet";
import NovinkyMobile from "../../Components/Novinky/NovinkyMobile";
import { Media } from "../../Components/Media";

export default function Novinky() {
  return (
  <>
      <Media between={["zero", "mobile"]}><NovinkyMobile /> </Media>
    <Media between={["mobile", "tablet"]}><NovinkyTablet /> </Media>
    <Media between={["tablet", "tv"]}><NovinkyLaptop /></Media>
  </>
  );
}