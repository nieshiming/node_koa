const Router = require('koa-router')
const { login, testpost } = require('../controller')

const router = new Router()

module.exports = (app) => {
  router.get('/testget', login)
  router.post('/testpost', testpost)

  app.use(router.routes()).use(router.allowedMethods())

  return router
}
