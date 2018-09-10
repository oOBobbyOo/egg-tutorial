'use strict';

/*
参数：
options: 中间件的配置项， 框架会将 app.config[$ { middlewareName }] 传递进来。
app: 当前应用 Application 的实例。
*/

module.exports = () => {
  return async function printDate(ctx, next) {
    console.log('middleware:');
    console.log(new Date());

    await next();
  };
};
