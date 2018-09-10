'use strict';

module.exports = {
  info() {
    console.log(this); // this => ctx里面的request

    return 'request';
  },
};
