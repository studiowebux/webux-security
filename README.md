# Webux Security

This is only a wrapper for the security stuff within the framework.  
In the component folder, you can add everything you need.

# Installation

```bash
npm i --save webux-security
```

# Usage

To try both configuration:  
it will enable the cors,  

```bash
export NODE_ENV=production
```

it will disabled the cors  

```bash
export NODE_ENV=development
```

### example

```
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
  allowedHeaders:
    "Origin, X-Requested-with, Accept, Authorization, Content-Type, Accept-Language, refresh, lang"
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
