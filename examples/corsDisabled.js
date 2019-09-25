const options = {
  bodyParser: {
    limit: "10mb",
    extended: true
  },
  origin: [],
  cookieParser: {
    secret: "Hey !"
  },
  trustProxy: true,
  allowedMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedCredentials: true,
  allowedHeaders:
    "Origin, X-Requested-with, Accept, Authorization, Content-Type, Accept-Language"
};

const webuxSecurity = require("../index");
const express = require("express");
const app = express();

async function loadApp() {
  try {
    await webuxSecurity(options, app);

    app.get("/", (req, res) => {
      console.info("Hello World !");
      return res.status(200).json({ msg: "Bonjour !" });
    });

    app.post("/", (req, res) => {
      console.info("Hello World !");
      return res.status(200).json({ msg: "Bonjour !" });
    });

    app.use("*", (error, req, res, next) => {
      res.status(401).json({ msg: error.message });
    });

    app.listen(1340, () => {
      console.log("Server listening on port 1337");
    });
  } catch (e) {
    throw e;
  }
}

try {
  loadApp();
} catch (e) {
  console.error(e);
  process.exit(1);
}
