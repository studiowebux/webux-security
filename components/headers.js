// ███╗   ███╗██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗ █████╗ ██████╗ ███████╗
// ████╗ ████║██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔════╝
// ██╔████╔██║██║██║  ██║██║  ██║██║     █████╗  ██║ █╗ ██║███████║██████╔╝█████╗
// ██║╚██╔╝██║██║██║  ██║██║  ██║██║     ██╔══╝  ██║███╗██║██╔══██║██╔══██╗██╔══╝
// ██║ ╚═╝ ██║██║██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║███████╗
// ╚═╝     ╚═╝╚═╝╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

/**
 * File: headers.js
 * Author: Tommy Gingras
 * Date: 2018-07-05
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

/**
 * Configure the Header
 * @param {Object} options The configuration of the module, Mandatory
 * @param {Object} log The log function, optional, by default console
 * @return {VoidFunction} Return nothing.
 */
module.exports = (options, log = console) => {
  if (!options || typeof options !== "object") {
    throw new Error("The options is required and must be an object.");
  }
  log.info("Set the headers");
  return (req, res, next) => {
    res.header("Access-Control-Allow-Methods", options.allowedMethods);
    res.header("Access-Control-Allow-Headers", options.allowedHeaders);
    res.header("Access-Control-Allow-Credentials", options.allowedCredentials);
    return next();
  };
};
