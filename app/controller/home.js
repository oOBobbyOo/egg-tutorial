'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // 调用extend里面拓展的application
    console.log(this.app.getApi());

    // 调用extend里面拓展的context
    console.log(this.ctx.getIp());

    await this.ctx.render('home.nj', {
      title: 'home',
    });
  }
}

module.exports = HomeController;
