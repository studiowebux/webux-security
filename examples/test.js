const options = {
  bodyParser: {
    limit: "10mb",
    extended: true
  },
  cookieParser: {
    secret: "Hey !"
  },
  origin: ["127.0.0.1"],
  trustProxy: true,
  allowedMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedCredentials: true,
  allowedHeaders:
    "Origin, X-Requested-with, Accept, Authorization, Content-Type, Accept-Language"
};

const express = require("express");
const app = express();

require("../index")(options, app);

app.get("/", (req, res) => {
  console.info("Hello World !");
  return res.status(200).json({ msg: "Bonjour !" });
});

app.post("/", (req, res) => {
  console.info("Hello World !");
  return res.status(200).json({ msg: "Bonjour !" });
});

app.use("*", (error, req, res, next) => {
  res.status(401).json({ msg: error });
});

app.listen(1337);
