const json = {
  name: 'levi',
  age: 200,
}

module.exports = {
  testpost: async (ctx, next) => {
    ctx.body = {
      code: 200,
      data: 'nsm post data',
      params: ctx.request.body,
    }
  },
  getJson: async (ctx, next) => {
    ctx.sendJson({ name: 'dabao', age: 20 })
  },
}
