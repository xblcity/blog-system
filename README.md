# blog-system

使用react与node构建博客系统的前后端

## 构建

安装依赖，

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
