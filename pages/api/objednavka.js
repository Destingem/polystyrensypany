const nodemailer = require('nodemailer');

export default async function handler(req, res){

  //  console.log(req);
    console.log(JSON.parse(req.body));
    res.status(201).send("OK");
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
      let info = await transporter.sendMail({
        from: '"Polystyren sypaný - objednávky bot" <obednavkybot@example.com>', // sender address
        to: "ondrej.zaplatilek@gmail.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log(info);
}