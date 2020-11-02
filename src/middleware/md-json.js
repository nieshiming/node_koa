module.exports = () => {
  function toJson(code, data) {
    this.set('content-type', 'application/jso ')
    this.body = JSON.stringify({
      code,
      data,
    })
  }
  return async function (ctx, next) {
    ctx.sendJson = toJson.bind(ctx)
    await next()
  }
}
