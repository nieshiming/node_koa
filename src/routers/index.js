const Router = require('koa-router')
const { login, testpost, getJson } = require('../controller')

const router = new Router({
  prefix: '/levi',
})

module.exports = (app) => {
  router.get('/testget', login, async (ctx, next) => {
    // console.log(ctx.tagName)
    await next()
  })
  router.post('/testpost', testpost)
  router.get('/getJson', getJson)

  app.use(router.routes()).use(router.allowedMethods())

  return router
}
