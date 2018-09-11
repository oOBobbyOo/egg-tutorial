'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536322891434_7209';

  // add your config here
  config.middleware = [
    'printDate',
    'forbidip',
  ];

  config.forbidip = {
    forbidips: [
      // '127.0.0.1',
      '192.168.11.8',
    ],
  };

  // api
  config.api = 'https://eggjs.org/zh-cn/basics/objects.html';

  // 配置模板引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  return config;
};
