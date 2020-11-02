const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routers');
const middleware = require('./middleware');

const app = new Koa();

/** 保证middleware 在router之前加载，因为 app.use有注册顺序，先注册先执行 */
middleware(app);
router(app);
app.use(bodyParser());

app.on('error', (err) => {
  console.log(err);
});

/** await 中间件执行顺序, 如果上一个中间件没有 加 await next() 那么中间件就不会执行 */
app.use(async (ctx, next) => {
  console.log('app use next start 2222222');
  await next();
});

app.listen(8888, () => console.log('server is start'));
