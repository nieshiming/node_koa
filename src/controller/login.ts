import { TCtx, TNext } from '@/common/interface/type';
import { getLoginUserInfo } from '@/service';

export const login = async (ctx: TCtx, next: TNext) => {
  ctx.body = {
    code: 200,
    data: 'levis test nodemon get data',
    params: ctx.query.name,
    resultMessage: ctx.protocol,
  };

  ctx.response.lastModified = new Date();
  ctx.response.type = 'text/plain; charset=utf-8';

  ctx.cookies.set('nsm', 'bbbb', {});
  ctx.tagName = 'nnssmm';

  const res = await getLoginUserInfo(1); // 获取用户信息
  console.log(res);

  await next();
};

export const demos = () => {
  console.log(1);
};
