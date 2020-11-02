module.exports = () => {
  function toJson(json) {
    this.set('content-type', 'application/jso ')
    this.body = JSON.stringify({
      code: 200,
      data: json,
    })
  }
  return async function (ctx, next) {
    ctx.sendJson = toJson.bind(ctx)
    await next()
  }
}
