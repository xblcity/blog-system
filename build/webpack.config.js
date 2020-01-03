const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@views': resolve('src/containers/views'),
      '@shared': resolve('src/containers/shared'),
      '@store': resolve('src/store'),
      '@component': resolve('src/components')
    }
  },
  module: {
    rules: [...jsRules, ...styleRules]
  },
  plugins: [...plugins]
}