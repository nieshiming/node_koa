const mdJson = require('./md-json')
const logger = require('./md-log')

/** 存放第三方中间件 */
module.exports = (app) => {
  app.use(mdJson()).use(logger())
}
