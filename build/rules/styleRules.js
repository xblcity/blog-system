const { resolve } = require('../utils')

module.exports = [
  {
    test: /.\.scss$/,
    use: [
      'style-loader',
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