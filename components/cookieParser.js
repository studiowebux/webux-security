// ███╗   ███╗██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗ █████╗ ██████╗ ███████╗
// ████╗ ████║██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔════╝
// ██╔████╔██║██║██║  ██║██║  ██║██║     █████╗  ██║ █╗ ██║███████║██████╔╝█████╗
// ██║╚██╔╝██║██║██║  ██║██║  ██║██║     ██╔══╝  ██║███╗██║██╔══██║██╔══██╗██╔══╝
// ██║ ╚═╝ ██║██║██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║███████╗
// ╚═╝     ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

/**
 * File: cookieParser.js
 * Author: Tommy Gingras
 * Date: 2019-06-16
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const cookieParser = require("cookie-parser");

/**
 * Initialise the cookie-parser
 * @param {Object} options The configuration of the module, Mandatory
 * @param {Object} log The log function, optional, by default console
 * @return {VoidFunction} Return the cookieParser
 */
module.exports = (options, log = console) => {
  if (!options || typeof options !== "object") {
    throw new Error("The options is required and must be an object.");
  }

  log.info("Configuring cookie parser");
  return cookieParser(options.secret);
};
