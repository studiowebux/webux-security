// ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
// ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
// ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝
// ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝
// ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║
// ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝

/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-06-13
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const helmet = require("helmet");
const compression = require("compression");

const Init = (app, options, log, errorHandler) => {
  require("./components/bodyParser")(app, options.bodyParser);
  app.use(require("./components/cookieParser")(options.cookieParser));
  app.use(require("./components/cors")(log, options.origin));
  app.use(require("./components/regex")(errorHandler));
  app.use(require("./components/headers"));
  app.use(compression());
  app.enable("trust proxy");
  app.set("trust proxy", true);
  app.use(helmet());
  app.disable("x-powered-by");
};

module.exports = Init;
