import { TCtx, TNext } from '../common/interface/type';

export const testpost = async (ctx: TCtx) => {
  ctx.body = {
    code: 200,
    data: 'nsm post data',
    params: ctx.request.body,
  };
};

export const getJson = async (ctx: TCtx, next: TNext) => {
  ctx.sendJson(200, { name: 'dabao', age: 20 });
  await next();
};
