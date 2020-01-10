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

## 数据库的使用

电脑上需要安装`mysql`以及`workbench`

使用TypeORM进行对象关系映射, 还需要安装typeorm与mysql之间进行连接的连接器mysql2

```js
npm i -S typeorm mysql2
```

新建`ormconfig.js`书写typeorm配置。

在入口文件 `index.ts`引入`createConnection`并配置。新建`entity`文件并新建user.ts。在里面规定表的结构(并会被创建)。

在controller里面写逻辑。

使用postman 调用 `/api/register`接口 post `x-www-form-urlendcoded`传入参数，register接口走通。

再次测试login接口，成功

## ts编译成js

tsconfig设置输出目录 ， 执行`tsc`命令(typescript自带的)