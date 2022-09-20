import {Media} from "../../Components/Media"
import SortimentLaptop from "../../Components/Sortiment/SortimentLaptop"
import SortimentTablet from "../../Components/Sortiment/SortimentTablet"
import SortimentMobile from "../../Components/Sortiment/SortimentMobile"
export default function Sortiment(props) {
 console.log(props);
  return (
    <>
    
        <Media between={["zero", "mobile"]}><SortimentMobile sortiment={props.sortiment} /></Media>
    <Media between={["mobile", "tablet"]}><SortimentTablet sortiment={props.sortiment} /></Media>
    <Media between={["tablet", "tv"]}><SortimentLaptop sortiment={props.sortiment} /></Media>
    </>
  );
}

export async function getStaticProps() {
let fetched = await fetch("http://localhost:1337/api/sortiment-karty?populate=*", {
  headers: {
  Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_JWT,
  }
})
let data = await fetched.json()


  return {
    props: {
      sortiment: data.data ? data.data : []
    },
    revalidate: 10,
  };
}