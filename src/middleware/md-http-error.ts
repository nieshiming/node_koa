import { TCtx, TNext } from '@/common/interface/type';

export default () => async (ctx: TCtx, next: TNext) => {
  try {
    await next();
    if (ctx.response.status === 404 && !ctx.response.body) {
      ctx.throw(404, 'http 404 error');
    }
  } catch (err: any) {
    console.log(err);
    const status = err.status || 400;
    switch (status) {
      case 404:
        ctx.body = '404 error';
        break;
      case 405:
      case 406:
        console.log('http error');
        break;
      default:
        console.log(1);
        break;
    }
  }
};
