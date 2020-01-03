# blog-system

使用react与node构建博客系统的前后端

## 构建

## 安装初始化依赖，

`webpack相关` `ts相关` `react相关` `react检查` `webpack loader babel相关` ` webpack插件`

备注：是否安装 `@babel/preset-env`(preset) `@babel/plugin-proposal-class-properties`(静态属性) `@babel/plugin-proposal-decorators`(修饰器) `@babel/plugin-syntax-dynamic-import`(异步加载) `babel-plugin-import`(按需加载) 有待商榷

```js
npm install-D webpack webpack-cli webpack-dev-server
npm i -D typescript
npm install -S react react-dom react-router
npm i -D @types/react-router-dom @types/react-dom @types/react
npm i -D @babel/core babel-loader @babel/preset-react @babel/preset-typescript
npm i -D html-webpack-plugin
```

新建webpack配置文件

新建src文件并书写入口文件

编写tsconfig.json文件

## 安装样式依赖及antd

sass
```js
npm i -D sass-loader node-sass style-loader css-loader
```

编写`typed-css-modules.d.ts`, 并使用`css-modules-typescript-loader`对sass文件的内容进行校验，并在webpack配置loader对应选项

```js
npm i -D css-modules-typescript-loader
```

antd配置样式以及按需加载 [官方说明](https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)

```js
npm i -D babel-plugin-import less less-loader
```

样式配置成功后，需要重新启动

## 优化

在webpack以及tsconfig配置alias别名

配置sourceMap

使用cache-loader来做缓存，thread-loader来做构建加速

```js
npm i -D cache-loader thread-loader
```

## 搭建路由和状态管理

### 搭建路由

安装`@babel/plugin-syntax-dynamic-import`，使其支持异步import语法,`React.lazy()`要用到

并使用`react-router-dom`配置路由

通过`Suspense`与`React.lazy()`可以实现动态加载

### 状态管理

使用 `useContext`, `createContext`, `useReducer`