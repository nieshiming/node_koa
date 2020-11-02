const mdJson = require('./md-json')

/** 存放第三方中间件 */
module.exports = (app) => {
  app.use(mdJson())
}
