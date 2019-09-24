// ███╗   ███╗██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗ █████╗ ██████╗ ███████╗
// ████╗ ████║██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔════╝
// ██╔████╔██║██║██║  ██║██║  ██║██║     █████╗  ██║ █╗ ██║███████║██████╔╝█████╗
// ██║╚██╔╝██║██║██║  ██║██║  ██║██║     ██╔══╝  ██║███╗██║██╔══██║██╔══██╗██╔══╝
// ██║ ╚═╝ ██║██║██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║███████╗
// ╚═╝     ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

/**
 * File: cors.js
 * Author: Tommy Gingras
 * Date: 2019-05-25
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const cors = require("cors");

/**
 * Configure the cors
 * @param {Array} whitelist The allowed endpoints to the API, Mandatory
 * @param {Function} app The express application, Mandatory
 * @param {Object} log The log function, optional, by default console
 * @return {Object} Return the cors.
 */
module.exports = (whitelist, app, log = console) => {
  const corsOptions = {
    origin: function(origin, callback) {
      console.log(origin);
      console.log(whitelist);
      log.debug("Request from : " + origin);
      if (whitelist.indexOf(origin) !== -1) {
        return callback(null, true);
      } else if (!origin) {
        log.warn(
          `\x1b[31mwebux-security - No origin is set for the request.\x1b[0m`
        );
        return callback(null, true);
        // return callback(new Error("Not allowed by CORS."));
      } else {
        return callback(new Error("Not allowed by CORS."));
      }
    }
  };
  // Then pass them to cors:
  if (process.env.NODE_ENV === "production" || whitelist.length > 0) {
    log.info(
      `\x1b[33mwebux-security - CORS enabled. Allowed origins : ${whitelist}\x1b[0m`
    );
    app.options("*", cors(corsOptions));
  } else {
    log.warn(`\x1b[31mwebux-security - CORS disabled.\x1b[0m`);
    app.use(cors());
  }
};
