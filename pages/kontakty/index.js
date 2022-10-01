import { Media } from "../../Components/Media";
import KontaktyMobile from "../../Components/Kontakty/KontaktyMobile";
import KontaktyTablet from "../../Components/Kontakty/KontaktyTablet";
import KontaktyLaptop from "../../Components/Kontakty/KontaktyLaptop";

export default function Kontakty(props) {
  return (
    <>
      <Media between={["zero", "mobile"]}>
        <KontaktyMobile {...props}/>
      </Media>
      <Media between={["mobile", "tablet"]}>
        <KontaktyTablet {...props}/>
      </Media>
      <Media between={["tablet", "tv"]}>
        <KontaktyLaptop {...props}/>
      </Media>
    </>
  );
}

export async function getStaticProps() {
  let fetchedDobyty = await fetch("http://159.89.20.207:1337/api/provozni-doby?populate=*", {
    headers: {
      Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let provozniDoby = await fetchedDobyty.json();
  let fetchedUdaje = await fetch("http://159.89.20.207:1337/api/kontaktni-udaje?populate=*", {
    headers: {
      Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let provozniUdaje = await fetchedUdaje.json();
  return {
    props: {
      provozniDoby: provozniDoby.data ? provozniDoby.data[0].attributes.radek_tabulky : [],
      kontaktniUdaje: provozniUdaje.data ? provozniUdaje.data.attributes : [],
    },
  };
}