import XPSLaptop from "../../Components/DrcenyPolystyrenXPS/XPSLaptop";
import XPSMobile from "../../Components/DrcenyPolystyrenXPS/XPSMobile";
import XPSTablet from "../../Components/DrcenyPolystyrenXPS/XPSTablet";
import { Media } from "../../Components/Media";

export default function DrcenyPolystyrenXPS() {
  return (
    <>
      <Media between={["zero", "mobile"]}><XPSMobile /></Media>
      <Media between={["mobile", "tablet"]}><XPSTablet /></Media>
      <Media between={["tablet", "tv"]}><XPSLaptop /></Media>
    </>
  );
}