# blog 后端构建

## 项目初始以及koa使用

```js
npm i -S koa @types/koa
npm i -D typescript 
```

`tsc init`初始化`tsconfig.json`

安装nodemon自动监听文件变化 `npm i -g nodemon`, 全局安装`ts-node` `npm i -g ts-node`, 并在`package.json`中添加命令

安装路由相关

```js
npm i -S koa-router
npm i -D @types/koa-router
```

解决跨域问题

```js
npm i -S koa-cors
npm i -D @types/koa-cors
```

解析post参数

```js
npm i -S koa-bodyparser
npm i -D @types/koa-bodyparser
```