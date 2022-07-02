import { Media } from "../../Components/Media";
import CertifikatLaptop from "../../Components/Certifikat/CertifikatLaptop"
import CertifikatMobile from "../../Components/Certifikat/CertifikatMobile"
import CertifikatTablet from "../../Components/Certifikat/CertifikatTablet"

export default function Certifikat() {
  return (
    <>
        <Media between={["zero", "mobile"]}><CertifikatMobile /></Media>
    <Media between={["mobile", "tablet"]}><CertifikatTablet/></Media>
    <Media between={["tablet", "tv"]}><CertifikatLaptop /></Media>
    </>
  );
}