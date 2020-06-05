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
  return new Promise((resolve, reject) => {
    try {
      log.info(
        `\x1b[33mwebux-security - Initialize the security components\x1b[0m`
      );
      require("./components/bodyParser")(options.bodyParser, app, log);
      require("./components/cors")(options.origin || [], app, log);

      app.use(require("./components/cookieParser")(options.cookieParser, log));
      app.use(require("./components/headers")(options, log));
      app.use(compression());
      app.enable("trust proxy");
      app.set("trust proxy", options.trustProxy || false);
      app.use(helmet());
      app.disable("x-powered-by");

      log.info(
        `\x1b[33mwebux-security - Security components initialized\x1b[0m`
      );
      resolve();
    } catch (e) {
      throw e;
    }
  });
};

module.exports = Init;
