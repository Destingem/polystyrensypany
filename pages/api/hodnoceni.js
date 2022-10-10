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
    "</p> <p>Účel použití: " +
    produkt.replace(/<[^>]*>?/gm, "") +
    "</p> <p>Slovní hodnocení: " +
    slovni_hodnoceni.replace(/<[^>]*>?/gm, "") +
    "</p>";
  let info = await transporter.sendMail({
    from: '"Polystyren sypaný - Hodnocení" <obednavkybot@example.com>', // sender address
    to: "info@polystyrensypany.cz", // list of receivers
    subject, // Subject line
    text: html, // plain text body
    html, // html body
  });
  console.log(info);
}
