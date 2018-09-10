'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    // 调用extend里面拓展的application
    console.log(this.app.getApi());

    // 调用extend里面拓展的context
    console.log(this.ctx.getIp());

    // 调用extend里面拓展的helper
    console.log(this.ctx.helper.formatTime(1536553138));

    // 调用extend里面拓展的resquest
    console.log(this.ctx.request.info());

    // 调用extend里面拓展的response
    console.log(this.ctx.response.info());

    await this.ctx.render('home.nj', {
      title: 'home',
    });
  }
}

module.exports = HomeController;
