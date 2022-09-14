const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  //  console.log(req);

  let hodnoceni = JSON.parse(req.body);
  console.log(hodnoceni);
  let {
    jmeno,
    prijmeni,
    spolecnost,
    produkt,
    ciselne_hodnoceni,
    slovni_hodnoceni,
  } = hodnoceni;
  res.status(201).send("OK");

  let transporter = nodemailer.createTransport({
    host: "smtp.eu.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_mail, // generated ethereal user
      pass: process.env.USER_pass, // generated ethereal password
    },
  });
  let subject =
    "Hodnocení od " +
    jmeno.replace(/<[^>]*>?/gm, "") +
    " " +
    prijmeni.replace(/<[^>]*>?/gm, "");
  let html =
    "<h1>Hodnocení</h1> <p>Jméno: " +
    jmeno.replace(/<[^>]*>?/gm, "") +
    "</p> <p>Příjmení: " +
    prijmeni.replace(/<[^>]*>?/gm, "") +
    "</p> <p>Společnost: " +
    spolecnost.replace(/<[^>]*>?/gm, "") +
    "</p> <p>Produkt: " +
    produkt.replace(/<[^>]*>?/gm, "") +
    "</p> <p>Číselné hodnocení: " +
    ciselne_hodnoceni +
    "</p> <p>Slovní hodnocení: " +
    slovni_hodnoceni.replace(/<[^>]*>?/gm, "") +
    "</p>";
  let info = await transporter.sendMail({
    from: '"Polystyren sypaný - objednávky bot" <obednavkybot@example.com>', // sender address
    to: "ondrej.zaplatilek@gmail.com", // list of receivers
    subject, // Subject line
    text: html, // plain text body
    html, // html body
  });
  console.log(info);
}
