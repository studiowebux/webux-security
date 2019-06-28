// ███╗   ███╗██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗ █████╗ ██████╗ ███████╗
// ████╗ ████║██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔════╝
// ██╔████╔██║██║██║  ██║██║  ██║██║     █████╗  ██║ █╗ ██║███████║██████╔╝█████╗
// ██║╚██╔╝██║██║██║  ██║██║  ██║██║     ██╔══╝  ██║███╗██║██╔══██║██╔══██╗██╔══╝
// ██║ ╚═╝ ██║██║██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║███████╗
// ╚═╝     ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

/**
 * File: bodyParser.js
 * Author: Tommy Gingras
 * Date: 2019-05-25
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const bodyParser = require("body-parser");

/**
 * Initialise the body-parser
 * @param {Object} options The configuration of the module, Mandatory
 * @param {Function} app The express application, Mandatory
 * @param {Object} log The log function, optional, by default console
 * @return {VoidFunction} Return nothing
 */
module.exports = (options, app, log = console) => {
  if (!options || typeof options !== "object") {
    throw new Error("The options is required and must be an object.");
  }
  if (!app || typeof app !== "function") {
    throw new Error("The app is required and must be an express object.");
  }

  log.info("Configuring the body parser");

  app.use(
    bodyParser.json({
      limit: options.limit || "1mb"
    })
  );

  app.use(
    bodyParser.urlencoded({
      limit: options.limit || "1mb",
      extended: options.extended || false
    })
  );
};
