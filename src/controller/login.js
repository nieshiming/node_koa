module.exports = {
  login: async (ctx, next) => {
    ctx.body = {
      code: 200,
      data: 'levis test nodemon get data',
      params: ctx.query.name,
      resultMessage: ctx.protocol,
    };

    ctx.response.lastModified = '2022-10-22';
    ctx.response.type = 'text/plain; charset=utf-8';

    ctx.cookies.set('nsm', 'bbbb', {});
    ctx.tagName = 'nnssmm';

    await next();
  },
};
