import * as Router from 'koa-router';
import { TKoa } from '@/common/interface/type';
import { login, testpost, getJson } from '@/controller';

const router = new Router({
  // prefix: '/levi',
});

export default (app: TKoa) => {
  router.get('/testget', login, async (ctx, next) => {
    // console.log(ctx.tagName)
    await next();
  });
  router.post('/testpost', testpost);
  router.get('/getJson', getJson);
  router.get('/404', async (ctx, next) => {
    ctx.body = '';
    ctx.response.status = 404;
    await next();
  });

  app.use(router.routes()).use(router.allowedMethods());
};
