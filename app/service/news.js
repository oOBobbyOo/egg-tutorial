'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const list = [ '1111', '2222', '3333' ];
    return list;
  }
}

module.exports = NewsService;