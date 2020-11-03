export default () => {
  function toJson(code, data) {
    this.set('content-type', 'application/json');
    this.body = JSON.stringify({
      code,
      data,
    });
  }
  return async function (ctx, next) {
    ctx.sendJson = toJson.bind(ctx);
    await next();
  };
};
