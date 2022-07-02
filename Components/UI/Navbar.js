
import { useState } from "react";
import { Media } from "../Media";
import NavBarMobile from "./Navbars/NavbarMobile";
import NavbarTablet from "./Navbars/NavbarTablet";
import NavbarLaptop from "./Navbars/NavbarLaptop";
export default function NavBar(props) {
 
  return (
    <>
      <Media between={["zero", "mobile"]}>
       <NavBarMobile />
      </Media>
      <Media between={["mobile", "tablet"]}>
       <NavbarTablet />
      </Media>
      <Media between={["tablet", "laptop"]}>
       <NavbarLaptop /> 
      </Media>
      
    </>
  );
}

/*
<div
          className={styles.main}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <Image src="/images/finalLogo.png" width={100} height={100} />
          <p>mobile</p>
        </div>
        */
