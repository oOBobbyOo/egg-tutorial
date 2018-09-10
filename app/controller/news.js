'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const list = [ '1111', 2222, 3333 ];

    await this.ctx.render('news.nj', {
      list,
    });
  }
}

module.exports = NewsController;
