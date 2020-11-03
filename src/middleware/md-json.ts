import { TCtx, TNext } from '../common/interface/type';

export default () => {
  function toJson(code: number, data: Object) {
    this.set('content-type', 'application/json');
    this.body = JSON.stringify({
      code,
      data,
    });
  }
  return async function (ctx: TCtx, next: TNext) {
    ctx.sendJson = toJson.bind(ctx);
    await next();
  };
};
