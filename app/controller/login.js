'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    await this.ctx.render('login.nj');
  }

  async add() {
    const data = this.ctx.request.body;
    console.log(data);

    this.ctx.body = data;
  }
}

module.exports = HomeController;
