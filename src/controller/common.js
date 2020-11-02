module.exports = {
  testpost: async (ctx) => {
    ctx.body = {
      code: 200,
      data: 'nsm post data',
      params: ctx.request.body,
    };
  },
  getJson: async (ctx, next) => {
    ctx.sendJson(200, { name: 'dabao', age: 20 });
    await next();
  },
};
