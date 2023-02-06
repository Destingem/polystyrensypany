const nodemailer = require("nodemailer");
const querystring = require("querystring");
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAIL_API, url: 'https://api.eu.mailgun.net'});
export default async function handler(req, res) {



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
 
 

  let sender_email = "Poptávky <poptavka@polystyrensypany.cz>"
 
  let receiver_email = ["info@polystyrensypany.cz", "ondrej.zaplatilek@gmail.com"]
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

    mg.messages.create('polystyrensypany.artilea.eu', {
      from: sender_email,
      to: receiver_email,
      subject: subject,
     
      html: html
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.error(err)); // logs any error
    res.status(201).send("OK");
}
