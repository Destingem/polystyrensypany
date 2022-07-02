import RecyklaceLaptop from "../../Components/Recyklace/RecyklaceLaptop";
import RecyklaceTablet from "../../Components/Recyklace/RecyklaceTablet";
import RecyklaceMobile from "../../Components/Recyklace/RecyklaceMobile";
import { Media } from "../../Components/Media";

export default function Recyklace() {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <RecyklaceMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
        <RecyklaceTablet />
      </Media>
      <Media between={["tablet", "tv"]}>
        <RecyklaceLaptop />
      </Media>

    </>
  );
}