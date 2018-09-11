'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);

  router.get('/login', controller.login.index);
  router.post('/add', controller.login.add);

  router.get('/news', controller.news.index);
};
