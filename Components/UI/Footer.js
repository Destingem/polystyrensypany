import { Media } from "../Media";
import FooterLaptop from "./Footers/FooterLaptop";
import FooterMobile from "./Footers/FooterMobile";
import FooterTablet from "./Footers/FooterTablet";
export default function Footer (){
    return(
      <>
         <Media between={["zero", "mobile"]}>
              <FooterMobile />
         </Media>
            <Media between={["mobile", "tablet"]}>
                <FooterTablet />
            </Media>
            <Media between={["tablet", "laptop"]}>

                <FooterLaptop />
            </Media>
      </>
    )
}