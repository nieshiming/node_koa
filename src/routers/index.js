const Router = require('koa-router')
const { login, testpost } = require('../controller')

const router = new Router()

module.exports = (app) => {
  router.get('/testget', login)
  router.post('/testpost', testpost)
  router.all('/', async (ctx, next) => {
    ctx.body = '<h1>404 not found</h1>'
  })

  app.use(router.routes()).use(router.allowedMethods())

  return router
}
