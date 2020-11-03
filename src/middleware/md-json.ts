import { TCtx, TNext } from '@/common/interface/type';

export default () => {
  return async function (ctx: TCtx, next: TNext) {
    ctx.sendJson = (code: number, data: Object) => {
      ctx.set('content-type', 'application/json');
      ctx.body = JSON.stringify({
        code,
        data,
      });
    };
    await next();
  };
};
