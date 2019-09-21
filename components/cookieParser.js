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
  log.info("\x1b[33m", "webux-security - Configuring cookie parser", "\x1b[0m");
  return cookieParser(options.secret);
};
