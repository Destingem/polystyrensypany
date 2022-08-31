import Media from  '../../Components/Media';
export default function Ceny() {
  return (
   <>
    <Media between={["zero", "mobile"]}>
        <CenyMobile />
    </Media>
    <Media between={["mobile", "tablet"]}>
        <CenyTablet />
    </Media>
    <Media between={["tablet", "laptop"]}>
        <CenyLaptop />  
    </Media>
   </>
  );
}