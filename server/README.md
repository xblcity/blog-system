# blog 后端构建

后端并不需要使用webpack进行配置，`ts`文件转换为`js`主要利用了`typescript`的`tsc`命令

- 语言: ts
- 框架: koa2, koa2-router, 安装koa2-cors处理跨域, koa-bodyparser处理post请求体
- 数据库 mysql，操作工具: workbench
- ORM工具: typeORM
- 监听文件变化: nodemon
- 服务器部署：nginx, pm2

项目原始文件在`src`目录。经过ts编译后的js文件在`dist`目录，我们部署到服务器上的也是`dist`文件下的文件

## 项目初始以及 koa 使用

> 全局安装`typescript`以便使用`tsc`命令

项目安装

```js
npm i -S koa
npm i -D typescript @types/koa
```

`tsc init`初始化`tsconfig.json`并将`module`属性的值改为`commonjs`

安装 `nodemon` 自动监听文件变化 `npm i -g nodemon`, 

安装`ts-node` `npm i ts-node`, (后面运行命令未报错的话不用全局安装), ts-node 安装@6 版本，否则会有自己写的.d.ts 文件命名空间识别不了的情况。或者是写 nodemon 配置(这个没用过)

并在`package.json`中添加`dev`命令 `"dev": "nodemon src/index.ts"`


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

解析 post 参数

```js
npm i -S koa-bodyparser
npm i -D @types/koa-bodyparser
```

## 数据库的使用

**电脑上需要安装`mysql`以及`workbench`**，window用户可以参考这篇 [mysql安装](https://github.com/xblcity/blog/blob/master/backend/mysql.md)

使用 `TypeORM` 进行对象关系映射, 还需要安装 `typeorm` 与 `mysql` 之间进行连接的连接器 `mysql2`

```js
npm i -S typeorm mysql2
```

新建`ormconfig.js`书写 `typeorm` 配置。

在入口文件 `index.ts`引入`createConnection`并配置。新建`entity`文件并新建 `user.ts`。在里面规定表的结构(并会被创建)。

在 `controller` 里面写逻辑。

使用 `postman` 调用 `/api/register`接口 `post` `Content-Type: x-www-form-urlendcoded`传入参数，`register` 接口走通。

再次测试 `login` 接口，成功

## ts 编译成 js

`tsconfig` 设置输出目录 ， 执行`tsc`命令(typescript 自带的ts编译命令)

## 安装其他依赖

目前已安装依赖

```js
// dependencies
koa
koa2-cors
koa-bodyparser
koa-router
mysql2
typeorm
// devDependencies
@types/koa
@types/koa2-cors
@types/koa-bodyparser
@types/koa-router
typescript
```

仍需安装

```js
// dependencies
bcrypt // windows使用bcryptjs
jsonwebtoken
// koa-jwt
lodash
// devDependencies
@types/bcrypt  // windows使用 @types/bcryptjs
@types/jsonwebtoken
@types/lodash
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
eslint
eslint-config-prettier
eslint-plugin-prettier
prettier
ts-node
```

默认运行在3001端口

## 项目启动

```js
yarn dev
```

## 项目构建

```js
yarn build
```

## 参考

- [oxc-blog-server](https://github.com/hungeroxc/oxc-blog-server)
- [后端初始化](https://www.jianshu.com/p/d4b6799cd272)