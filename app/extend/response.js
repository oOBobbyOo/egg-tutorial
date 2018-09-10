'use strict';

module.exports = {
  info() {
    console.log(this); // this => ctx里面的response

    return 'response';
  },
};
