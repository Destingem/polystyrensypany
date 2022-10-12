

export default async function handler(req, res) {
    
  let fetchedUdaje = await fetch("http://134.122.88.214:1337/api/kontaktni-udaje?populate=*", {
    headers: {
      Authorization: "Bearer "+ process.env.NEXT_PUBLIC_STRAPI_JWT,
    }
  });
  let provozniUdaje = await fetchedUdaje.json();
  res.json({kontaktniUdaje: provozniUdaje.data ? provozniUdaje.data.attributes : [],
    },
  )
}