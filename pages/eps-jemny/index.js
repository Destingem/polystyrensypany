import EPSJemnyMobile from "../../Components/EPSJemny/EPSJemnyMobile"
import EPSJemnyTablet from "../../Components/EPSJemny/EPSJemnyTablet"
import EPSJemnyLaptop from "../../Components/EPSJemny/EPSJemnyLaptop"
import { Media } from "../../Components/Media"
export default function EPSJemny(){
    return(
        <>
            <Media between={["zero", "mobile"]}>
                <EPSJemnyMobile />
            </Media>
            <Media between={["mobile", "tablet"]}>
                <EPSJemnyTablet />
            </Media>
            <Media between={["tablet", "laptop"]}>
                <EPSJemnyLaptop />
            </Media>
        </>
    )
}