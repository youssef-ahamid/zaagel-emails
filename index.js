const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Zaagel");
});

// headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const mailRoute = require("./routes/mail");
app.use("/mail", mailRoute);

app.listen(PORT, () => {
  console.log(`Zaagel live on port ${PORT}`);
});
