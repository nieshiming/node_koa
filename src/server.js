const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const middleware = require('./middleware')

const app = new Koa()

/** 保证middleware 在router之前加载，因为 app.use有注册顺序，先注册先执行 */
middleware(app)
router(app)
app.use(bodyParser())

app.on('error', (err) => {
  console.log(err)
})

app.listen(8888, () => console.log('server is start'))
