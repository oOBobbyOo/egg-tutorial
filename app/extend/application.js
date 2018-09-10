'use strict';

module.exports = {
  getApi() {
    return this.config.api; // this => app对象
  },
};
