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

## 模板引擎

[egg-view-nunjucks](https://github.com/eggjs/egg-view-nunjucks)

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
