const router = require("express").Router();
var cors = require(`cors`);

const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./templates/email"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./templates/email"),
  extName: ".handlebars",
};

router.options('/', cors()) // enable pre-flight request for mail request

router.post("/", cors(), async (req, res) => {
  const { data, to, subject, template, config, replyTo } = req.body;

  const isConfig = config && config.auth
  let mailOptions = {
    from: isConfig ? config.auth.user : process.env.ZAAGEL_USER,
    to: to,
    subject: subject || "Zaagel",
    template: template || "message-sent",
    context: data,
    replyTo: replyTo || process.env.ZAAGEL_USER,
  };

  let transporter;
  if (isConfig) transporter = nodemailer.createTransport(config);
  else
    transporter = nodemailer.createTransport({
      service: "Outlook365",
      host: "smtp.office365.com",
      port: "587",
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.ZAAGEL_USER,
        pass: process.env.ZAAGEL_PASS,
      },
    });

  transporter.use("compile", hbs(handlebarOptions));

  try {
    transporter
      .sendMail(mailOptions)
      .then((data) => res.send({ status: 200, data }));
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
