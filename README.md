# Webux Security

This is only a wrapper for the security stuff within the framework.  
In the component folder, you can add everything you need.

# Installation

```bash
npm i --save @studiowebux/security
```

# What is covered ?

Currently the wrapper uses these technologies:

- cors
- body-parser
- cookie-parser
- express headers
- helmet
- trust proxy
- compression
- disabling x-powered-by

# Usage

## Cors

More details: [cors](https://www.npmjs.com/package/cors)

you can enable/disable the cors within development or production mode.

there is some configuration to do,  
the variable is **origin**, you can set it by doing,  
to enable the origin,

```javascript
module.exports = {
  origin: ["https://somedomain.com", "http://127.0.0.1"]
};
```

or to disable it,

```javascript
module.exports = {
  origin: []
};
```

when an empty array is detected the cors or set to **\***

you can also use the environment variable to proceed:

```bash
export ORIGIN=http://127.0.0.1 https://somedomain.com
```

and to specify only one or everything you can do:

```javascript
const options = {
  origin: "http:/127.0.0.1:8080"
}

# or

const options = {
  origin: "*"
}
```

### How to apply the cors,

They are currently applied automatically while using this wrapper, fow now there is no way to "ignore" this setting, except by disabling it.

## Body Parser and Cookie Parser

More details: [body-parser](https://www.npmjs.com/package/body-parser)  
More details: [cookie-parser](https://www.npmjs.com/package/cookie-parser)

Currently you can configure 4 options for these parsers.

Usage example,

```javascript
const options = {
  bodyParser: {
    limit: "10mb",
    extended: true
  },
  cookieParser: {
    secret: "Hey !"
  }
};
```

for the body-parser, by default, if nothing is defined the size will be _1mb_ an the extended option will be _false_  
This is important, the cookie secret must remains SECRET, you should use a environment variable to handle this one,

```bash
export COOKIE_SECRET=somethingverysecurelikeasha512ofsomethingreallysecure
```

```javascript
module.exports = {
  bodyParser: {
    limit: "2mb",
    extended: true
  },
  cookieParser: {
    secret: process.env.COOKIE_SECRET || "this is not a secure secret..."
  }
};
```

## Headers

which headers are set,

- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Allow-Credentials

The allow-origin is set using the _cors_ function.

How to configure these 3 parameters,

```javascript
module.exports = {
  allowedMethods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  allowedCredentials: true,
  allowedHeaders:
    "Origin, X-Requested-with, Accept, Authorization, Content-Type, Accept-Language"
};
```

## Helmet

More details: [Helmet](https://www.npmjs.com/package/helmet)

it allows to configure some basic security stuff in your application, this wrapper uses the default configuration.

## Trust Proxy

More details: [Express Trust Proxy](https://expressjs.com/en/guide/behind-proxies.html)

it will set the trust proxy as your application requirements.

```javascript
const options = {
  trustProxy: true
};
```

## Compression

More details: [Compression](https://www.npmjs.com/package/compression)

This wrapper uses the default configuration, every responses are compressed.

## x-powered-by

it will remove the _express_ value from the header, it allows to add more security for people who scan the application to find potential vulnerabilities.

## Examples

You can check the **examples/** folder to get some

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
