const { resolve } = require('../utils')
const { cacheLoader, threadLoader } = require('../loaders')

module.exports = [
  {
    test: /.\.scss$/,
    use: [
      'style-loader',
      cacheLoader,
      threadLoader(2),
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            resolve('src/styles')
          ]
        }
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }
    ]
  }
]