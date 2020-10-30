module.exports = {
  testpost: async (ctx, next) => {
    ctx.body = {
      code: 200,
      data: 'nsm post data',
      params: ctx.request.body,
    }
  },
}
