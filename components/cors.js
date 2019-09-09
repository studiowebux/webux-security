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
  if (!whitelist || typeof whitelist !== "object") {
    throw new Error("The allowed origins are required and must be an array.");
  }

  if (!app || typeof app !== "function") {
    throw new Error("The app is required and must be an express object.");
  }

  const corsOptions = {
    origin: function(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        return callback(null, true);
      } else if (!origin) {
        log.warn("No origin is set for the request.");
        return callback("Not allowed by CORS.", false);
      } else {
        return callback("Not allowed by CORS.", false);
      }
    }
  };
  // Then pass them to cors:
  if (process.env.NODE_ENV === "production") {
    log.info("CORS enabled. Allowed origins : " + whitelist);
    app.use(cors(corsOptions));
  } else {
    log.warn("CORS disabled.");
    app.use(cors());
  }
};
