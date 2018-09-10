# egg-tutorial

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

## 目录结构

```js
egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js

框架约定的目录：
app/router.js 用于配置 URL 路由规则
app/controller 用于解析用户的输入，处理后返回相应的结果
app/service 用于编写业务逻辑层
app/middleware 用于编写中间件
app/public 用于放置静态资源
app/extend 用于框架的扩展
config/config.{env}.js  用于编写配置文件，具体参见配置。
config/plugin.js 用于配置需要加载的插件，具体参见插件。
test 用于单元测试，具体参见单元测试。
app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义。
```

## 模板引擎

[egg-view-nunjucks](https://github.com/eggjs/egg-view-nunjucks)

[中文文档](https://mozilla.github.io/nunjucks/cn/templating.html#part-d0678dc0cc4cc122)

```js
npm i egg-view-nunjucks --save

// {app_root}/config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// {app_root}/config/config.default.js
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.nj': 'nunjucks',
  },
};
```

[egg-view-ejs](https://github.com/eggjs/egg-view-ejs)

[中文文档](https://ejs.bootcss.com/)

```js
npm i egg-view-ejs --save

// {app_root}/config/plugin.js
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.ejs': 'ejs',
  },
};
```
