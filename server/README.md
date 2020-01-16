# blog 后端构建

## 项目初始以及 koa 使用

```js
npm i -S koa @types/koa
npm i -D typescript
```

`tsc init`初始化`tsconfig.json`

安装 nodemon 自动监听文件变化 `npm i -g nodemon`, 全局安装`ts-node` `npm i -g ts-node`, 并在`package.json`中添加命令

ts-node 安装@6 版本，否则会有自己写的.d.ts 文件命名空间识别不了的情况。或者是写 nodemon 配置(这个没用过)

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

电脑上需要安装`mysql`以及`workbench`

使用 TypeORM 进行对象关系映射, 还需要安装 typeorm 与 mysql 之间进行连接的连接器 mysql2

```js
npm i -S typeorm mysql2
```

新建`ormconfig.js`书写 typeorm 配置。

在入口文件 `index.ts`引入`createConnection`并配置。新建`entity`文件并新建 user.ts。在里面规定表的结构(并会被创建)。

在 controller 里面写逻辑。

使用 postman 调用 `/api/register`接口 post `x-www-form-urlendcoded`传入参数，register 接口走通。

再次测试 login 接口，成功

## ts 编译成 js

tsconfig 设置输出目录 ， 执行`tsc`命令(typescript 自带的)

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
