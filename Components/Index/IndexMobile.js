import NavBar from "../UI/Navbar";
import styles from "./MobileComponents/IndexMobile.module.css";
import { useRef } from "react";
import Footer from "../UI/Footer";
import MobileMainScreen from "./MobileComponents/MobileMainScreen";
import SubTextMobile from "./MobileComponents/SubTextMobile";
import Text1 from "./MobileComponents/Text1";
import DuvodyMobile from "./MobileComponents/DuvodyMobile";
import Vyuziti from "./MobileComponents/Vyuziti";
import Sortiment from "./Sortiment";
export default function IndexMobile(props) {
  const video = useRef();
  return (
    <div className={styles.main}>
      
     
     <MobileMainScreen />
      <SubTextMobile />
     <Text1 />
     <DuvodyMobile />
     <Vyuziti />
     <Sortiment />
      <Footer />
    </div>
  );

 
}
