# blog-system

使用 react 与 node 构建博客系统的前后端

> 前端部分

## 构建

## 安装初始化依赖，

`webpack相关` `ts相关` `react相关` `react检查` `webpack loader babel相关` `webpack插件`

是否安装 `@babel/preset-env`(preset)

`@babel/plugin-proposal-class-properties`(静态属性)

`@babel/plugin-proposal-decorators`(修饰器)

`@babel/plugin-syntax-dynamic-import`(异步加载) React.lazy 使用到

`babel-plugin-import`(按需加载) antd 使用

```js
npm install-D webpack webpack-cli webpack-dev-server
npm i -D typescript
npm install -S react react-dom react-router
npm i -D @types/react-router-dom @types/react-dom @types/react
npm i -D @babel/core babel-loader @babel/preset-react @babel/preset-typescript
npm i -D html-webpack-plugin
```

新建 webpack 配置文件

新建 src 文件并书写入口文件

编写 tsconfig.json 文件

## 安装样式依赖及 antd

sass

```js
npm i -D sass-loader node-sass style-loader css-loader
```

编写`typed-css-modules.d.ts`, 并使用`css-modules-typescript-loader`对 sass 文件的内容进行校验，并在 webpack 配置 loader 对应选项

```js
npm i -D css-modules-typescript-loader
```

antd 配置样式以及按需加载 [官方说明](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)

```js
npm i -D babel-plugin-import less less-loader
```

样式配置成功后，需要重新启动

## 优化

在 webpack 以及 tsconfig 配置 alias 别名

配置 sourceMap

使用 cache-loader 来做缓存，thread-loader 来做构建加速

```js
npm i -D cache-loader thread-loader
```

## 搭建路由和状态管理

### 搭建路由

安装`@babel/plugin-syntax-dynamic-import`，使其支持异步 import 语法,`React.lazy()`要用到

并使用`react-router-dom`配置路由

通过`Suspense`与`React.lazy()`可以实现动态加载

### 状态管理

使用 `useContext`, `createContext`, `useReducer` 并添加类型检查

## 配置 axios

```js
npm i -S axios
// 安装查询参数的库
npm i -S qs
npm i -D @types/qs
```

配置 axios 拦截器

## webpack 打包配置

对打包的 css 文件进行分离

```js
npm i -D mini-css-extract-plugin
```

对 js 代码进行压缩

```js
npm i -D terser-webpack-plugin
```

对 css 代码进行压缩

```js
npm i -D optimize-css-assets-webpack-plugin
```

使用 `cross-env` 配置环境变量

```js
npm i -D cross-env
```

## 代码规范配置

js 代码规范 eslint 以及 prettier

```js
npm i -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

css 代码规范与格式化

```js
npm i -D stylelint stylelint-config-standard stylelint-scss
```

对提交的代码进行校验

```js
npm i -D husky
```

git 提交 message 规范

```js
npm i -D @commitlint/cli
npm i -D @commitlint/config-conventional
```
