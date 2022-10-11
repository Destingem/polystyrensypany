import { Media } from "../../Components/Media";
import PartneriTablet from "../../Components/Partneri/PartneriTablet";
import PartneriMobile from "../../Components/Partneri/PartneriMobile";
import PartneriLaptop from "../../Components/Partneri/PartneriLaptop";
export default function Partneri(props) {
  let { data } = props;
 
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <PartneriMobile data={data}/>
      </Media>
      <Media between={["mobile", "tablet"]}>
        <PartneriTablet data={data}/>
      </Media>
      <Media between={["tablet", "tv"]}>
        <PartneriLaptop data={data}/>
      </Media>
    </>
  );
}
export async function getStaticProps() {
  try{
    let fetched = await fetch("http://159.89.20.207:1337/api/partneris?populate=*", {
    headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let data = await fetched.json();
  var props = {data}
  
  } catch{
    props = {}
  }
 console.log(props);
  return({
    props: props,
    revalidate: 30,
  }
  )
}