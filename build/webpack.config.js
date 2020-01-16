const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')
const optimization = require('./optimization')

const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: isDev ? '[name].js' : '[name].[chunkhash:4].js', // 添加hash，解决浏览器缓存问题   开发的时候不需要hash值
    chunkFilename: isDev ? '[name].js' : '[name].[chunkhash:4].js', // 模块包的名字，比如page-a,添加hash，解决浏览器缓存问题
  },
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'source-map' : undefined,  // 生产环境不需要source-map
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@views': resolve('src/containers/views'),
      '@shared': resolve('src/containers/shared'),
      '@store': resolve('src/store'),
      '@components': resolve('src/components'),
      '@services': resolve('src/services')
    }
  },
  module: {
    rules: [...jsRules, ...styleRules]
  },
  plugins: [...plugins],
  optimization: isDev ? {} : optimization // 开发的时候不需要优化打包和压缩代码
}