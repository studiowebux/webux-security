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

const Init = (Webux, options) => {
  require("./components/bodyParser")(Webux.app, options.bodyParser);
  require("./components/cookieParser")(Webux.app, options.cookieParser);
  Webux.app.use(require("./components/cors")(Webux.log, options.origin));
  Webux.app.use(require("./components/morgan")(Webux.log, options.morgan));
  Webux.app.use(require("./components/regex")(Webux.errorHandler));
  Webux.app.use(require("./components/responseTime")(Webux.log));
  Webux.app.use(require("./components/headers"));
  Webux.app.use(compression());
  Webux.app.enable("trust proxy");
  Webux.app.set("trust proxy", true);
  Webux.app.use(helmet());
  Webux.app.disable("x-powered-by");
};

module.exports = Init;
