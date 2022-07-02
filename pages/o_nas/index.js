import { Media } from "../../Components/Media";
import OnasLaptop from "../../Components/Onas/OnasLaptop";
import OnasMobile from "../../Components/Onas/OnasMobile";
import OnasTablet from "../../Components/Onas/OnasTablet";

export default function ONas() {
  return (
    <>
        <Media between={["zero", "mobile"]}><OnasMobile /></Media>
    <Media between={["mobile", "tablet"]}><OnasTablet /></Media>
    <Media between={["tablet", "tv"]}><OnasLaptop /></Media>
    </>
  );
}