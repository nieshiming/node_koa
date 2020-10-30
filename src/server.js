const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')

const app = new Koa()

router(app)
app.use(bodyParser())

app.on('error', (err) => {
  console.log(err)
})

app.listen(8888, () => console.log('server is start'))
