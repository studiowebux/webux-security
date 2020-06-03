/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-02-21
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

const rateLimit = require("express-rate-limit");

/**
 * Creates a new limiter.
 * @param {Object} options The options, the configuration of the logging module, mandatory
 * @param {Function} app The express application, Mandatory
 * @param {Object} log The log function, optional
 * @return {VoidFunction}
 */
module.exports = (options, app, log = console) => {
  log.info(`Creating rate limiter 'options.name'`);

  let opts = {
    windowMs: options.time * 1000,
    max: options.maxReq,
  };

  // Check if the rule is applied globally
  // or to specific pattern
  if (options.pattern && options.pattern !== "") {
    opts.skip = (req) => {
      // Skip this rule., if not in the url.
      return !req.originalUrl.includes(options.pattern);
    };
  }

  app.use(rateLimit(opts));
};
