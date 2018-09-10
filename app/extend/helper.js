'use strict';

const sd = require('silly-datetime');

module.exports = {
  formatTime(param) {
    // 格式化日期 (parm)时间戳
    return sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
  },
};
