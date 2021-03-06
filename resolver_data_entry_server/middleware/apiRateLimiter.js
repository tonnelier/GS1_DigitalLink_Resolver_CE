const rateLimit = require('express-rate-limit');

module.exports = (req, res, next) =>
  rateLimit({
    windowMs: +process.env.RATE_LIMIT_MS || 15 * 60 * 1000,
    max: +process.env.RATE_LIMIT_MAX || 100,
  });
