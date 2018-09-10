'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {

    const list = [{
      title: '1111',
      time: 1536552559,
    }, {
      title: '2222',
      time: 1536552952,
    }, {
      title: '3333',
      time: 1536553138,
    }];
    return list;
  }
}

module.exports = NewsService;
