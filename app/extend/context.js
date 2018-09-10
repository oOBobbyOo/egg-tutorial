'use strict';

module.exports = {
  getIp() {
    return this.request.ip; // this => ctx对象
  },
};
