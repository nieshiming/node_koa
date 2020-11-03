import mdJson from './md-json';
import logger from './md-log';
import httpError from './md-http-error';

/** 存放第三方中间件 */
export default (app) => {
  app.use(httpError()).use(mdJson()).use(logger());
};
