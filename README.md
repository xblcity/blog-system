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

- eslint 也可以进行 ts 的代码校验，并且性能更高。

- eslint-config-prettier,解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效
- eslint-plugin-prettier：将 prettier 作为 ESLint 规范来使用
- eslint-plugin-react: 校验 react 的代码

更多可以参考 [在 Typescript 项目中，如何优雅的使用 ESLint 和 Prettier](https://juejin.im/post/5d1d5fe96fb9a07eaf2bae29)

```js
npm i -D eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier
```

如果 eslint 没有生效，看一下编辑器输出，本人提示的是未安装`eslint-plugin-html`，安装之后，eslint 正常使用，且可以配合 prettier 保存代码自动修复

eslint 命令行修复 `eslint --fix --ext .ts src/` ext 表示指定 js 类型文件

eslint 给配置文件添加 eslint 规则，新建`.eslintignore`配书写规则

css 代码规范与格式化

- stylelint // 命令行
- stylelint-config-standard
- stylelint-scss

```js
npm i -D stylelint stylelint-config-standard stylelint-scss
```

如果没有全局安装 stylelint，使用命令的时候需要用`./node_modules/.bin/stylelint "src/**/*.csss"` 检测的文件要加双引号，再 package.json 中。是`eslint src --ext .ts,.tsx && stylelint \".src/**/*.scss\"`

如果想编辑器提示错误的 css 代码，还需要安装 stylelint vs code 插件...使用 stylelint 保存没能格式化，先弃用了

对提交的代码进行校验

```js
npm i -D husky
```

git 提交 message 规范

```js
npm i -D @commitlint/cli
npm i -D @commitlint/config-conventional
```
