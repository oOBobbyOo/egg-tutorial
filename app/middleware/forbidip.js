'use strict';

module.exports = options => {
  return async function forbidip(ctx, next) {

    const forbidips = options.forbidips;
    console.log(forbidips);

    // 获取客户端ip
    const clientip = ctx.request.ip;

    const hasip = forbidips.some(function(val) {
      if (val === clientip) {
        return true;
      }
      return false;
    });

    console.log(hasip);

    if (hasip) {
      // 屏蔽
      ctx.status = 404;
      ctx.body = '您的ip已经被屏蔽';
    } else {
      await next();
    }

  };
};
