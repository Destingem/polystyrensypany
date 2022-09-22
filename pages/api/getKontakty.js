

export default async function handler(req, res) {
    let fetchedDoby = await fetch("http://localhost:1337/api/provozni-doby?populate=*", {
    headers: {
      Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let provozniDoby = await fetchedDoby.json();
  let fetchedUdaje = await fetch("http://localhost:1337/api/kontaktni-udaje?populate=*", {
    headers: {
      Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let provozniUdaje = await fetchedUdaje.json();
  res.json({kontaktniUdaje: provozniUdaje.data ? provozniUdaje.data.attributes : [],
    },
  )
}