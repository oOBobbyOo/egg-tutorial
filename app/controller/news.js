'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    const list = await this.service.news.getNewsList();

    await this.ctx.render('news.nj', {
      list,
    });
  }
}

module.exports = NewsController;
