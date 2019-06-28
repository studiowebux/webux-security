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

/**
 * Initialise all the security modules in the app.
 * @param {Object} options The configuration of the module, Mandatory
 * @param {Function} app The express application, Mandatory
 * @param {object} log The log function, optional, by default console
 * @return {VoidFunction} Return nothing.
 */
const Init = (options, app, log = console) => {
  if (!options || typeof options !== "object") {
    throw new Error("The options is required and must be an object.");
  }
  if (!app || typeof app !== "function") {
    throw new Error("The app is required and must be an express object.");
  }

  require("./components/bodyParser")(options.bodyParser, app, log);
  require("./components/cors")(options.origin || [], app, log);
  
  app.use(require("./components/cookieParser")(options.cookieParser, log));
  app.use(require("./components/headers")(options, log));
  app.use(compression());
  app.enable("trust proxy");
  app.set("trust proxy", options.trustProxy || false);
  app.use(helmet());
  app.disable("x-powered-by");
};

module.exports = Init;
