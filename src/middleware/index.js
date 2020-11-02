const mdJson = require('./md-json');
const logger = require('./md-log');
const httpError = require('./md-http-error');

/** 存放第三方中间件 */
module.exports = (app) => {
  app.use(httpError()).use(mdJson()).use(logger());
};
