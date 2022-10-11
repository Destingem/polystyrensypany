import NovinkyLaptop from "../../Components/Novinky/NovinkyLaptop";
import NovinkyTablet from "../../Components/Novinky/NovinkyTablet";
import NovinkyMobile from "../../Components/Novinky/NovinkyMobile";
import { Media } from "../../Components/Media";

export default function Novinky(props) {
  let novinky = props.fetched2.data
  console.log(novinky)
  return (
  <>
      <Media between={["zero", "mobile"]}><NovinkyMobile novinky={novinky}/> </Media>
    <Media between={["mobile", "tablet"]}><NovinkyTablet novinky={novinky}/> </Media>
    <Media between={["tablet", "tv"]}><NovinkyLaptop novinky={novinky}/></Media>
  </>
  );
}

export async function getStaticProps() {

  let fetched = await fetch("http://159.89.20.207:1337/api/novinky?populate=*", {
      headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
      }
      })
      let fetched2 = await fetched.json()
 

  
      return ({
      props: {
        fetched2
      },
      revalidate: 30,
  })
}