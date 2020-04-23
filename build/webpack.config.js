const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
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
    filename: isDev ? '[name].[chunkhash].js' : '[name].[chunkhash].js', // 添加hash，解决浏览器缓存问题   开发的时候不需要hash值
    chunkFilename: isDev
      ? '[name].[chunkhash].js'
      : '[name].[id].[chunkhash].js', // 模块包的名字，比如page-a,添加hash，解决浏览器缓存问题
    publicPath: '/'
  },
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'source-map' : undefined, // 生产环境不需要source-map
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': resolve('src/assets'),
      '@views': resolve('src/views'),
      '@components': resolve('src/components'),
      '@store': resolve('src/store'),
      '@services': resolve('src/services'),
      '@utils': resolve('src/utils'),
      '@constants': resolve('src/constants')
    }
  },
  externals: {
    highlight: 'hljs',
    moment: 'moment',
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [...jsRules, ...styleRules, ...fileRules]
  },
  plugins: [...plugins],
  optimization: isDev ? {} : optimization // 开发的时候不需要优化打包和压缩代码
}
