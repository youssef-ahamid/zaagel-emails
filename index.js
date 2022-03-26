const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require(`cors`);
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Zaagel");
});

const mailRoute = require("./routes/mail");
app.use("/mail", mailRoute);

app.listen(PORT, () => {
  console.log(`Zaagel live on port ${PORT}`);
});
