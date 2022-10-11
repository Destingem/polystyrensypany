import FoukanaIzolaceLaptop from "../../Components/FoukanaIzolace/FoukanaIzolaceLaptop";
import FoukanaIzolaceMobile from "../../Components/FoukanaIzolace/FoukanaIzolaceMobile";
import FoukanaIzolaceTablet from "../../Components/FoukanaIzolace/FoukanaIzolaceTablet";
import { Media } from "../../Components/Media";


export default function FoukanaIzolace(props) {
  return (
    <>
      <Media between={["zero", "mobile"]}> <FoukanaIzolaceMobile {...props}/> </Media>
      <Media between={["mobile", "tablet"]}><FoukanaIzolaceTablet {...props}/></Media>
      <Media between={["tablet", "tv"]}>
        <FoukanaIzolaceLaptop {...props}/>
      </Media>
    </>
  );
}
export async function getStaticProps(){

  let data = await fetch("http://159.89.20.207:1337/api/ceniky?populate=*", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
  })
  let dataJson = await data.json()
 

  return {
      props: {
          ceniky: dataJson.data
      },
      revalidate: 30,
    }
}