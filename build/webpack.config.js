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
  module: {
    rules: [...jsRules, ...styleRules]
  },
  plugins: [...plugins]
}