import FoukanaIzolaceLaptop from "../../Components/FoukanaIzolace/FoukanaIzolaceLaptop";
import FoukanaIzolaceMobile from "../../Components/FoukanaIzolace/FoukanaIzolaceMobile";
import FoukanaIzolaceTablet from "../../Components/FoukanaIzolace/FoukanaIzolaceTablet";
import { Media } from "../../Components/Media";


export default function FoukanaIzolace() {
  return (
    <>
      <Media between={["zero", "mobile"]}> <FoukanaIzolaceMobile /> </Media>
      <Media between={["mobile", "tablet"]}><FoukanaIzolaceTablet /></Media>
      <Media between={["tablet", "tv"]}>
        <FoukanaIzolaceLaptop />
      </Media>
    </>
  );
}