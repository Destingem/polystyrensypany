const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  //  console.log(req);

  let objednavka = JSON.parse(req.body);
console.log(objednavka);
  let {
    ucel,
    mnozstvi,
    jednotka,
    termin,
    doprava,
    specifikace,
    jmeno,
    prijmeni,
    funkce,
    spolecnost,
    adresa,
    telefon,
    email,
  } = objednavka;
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
  let subject = "Poptávka - " + jmeno + " " + prijmeni;
  let html =
    "<h1>Poptávka</h1><p>Ucel: " +
    ucel +
    "</p><p>Mnozstvi: " +
    mnozstvi +
    " " +
    jednotka +
    "</p><p>Termin: " +
    termin +
    "</p><p>Doprava: " +
    doprava +
    "</p><p>Specifikace: " +
    specifikace +
    "</p><p>Jmeno: " +
    jmeno +
    "</p><p>Prijmeni: " +
    prijmeni +
    "</p><p>Funkce: " +
    funkce +
    "</p><p>Spolecnost: " +
    spolecnost +
    "</p><p>Adresa: " +
    adresa +
    "</p><p>Telefon: " +
    telefon +
    "</p><p>Email: " +
    email +
    "</p>";
  let info = await transporter.sendMail({
    from: '"Polystyren sypaný - Poptávka" <obednavkybot@example.com>', // sender address
    to: "info@polystyrensypany.cz", // list of receivers
    subject, // Subject line
    text: html, // plain text body
    html, // html body
  });
  console.log(info);
}
