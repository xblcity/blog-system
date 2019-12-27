const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve('src/index.jsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
  },
  mode: 'development',
  module: {
    rules: [...jsRules]
  },
  plugins: [...plugins]
}