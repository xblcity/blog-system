const { resolve } = require('../utils')
const { cacheLoader, threadLoader } = require('../loaders')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { IS_DEV } = require('./../constants')

const getLoader = () => {
  if (IS_DEV) {
    return 'style-loader'
  } else {
    return MiniCssExtractPlugin.loader
  }
}

// 当APP_ENV处于undefined状态时，说明处于本地编译不需要单独的css文件以节约时间
// 当APP_ENV为qa或者prod时候，说明处于线上编译，此时需要另外打包css文件
const loader = getLoader()

module.exports = [
  {
    test: /.\.scss$/,
    use: [
      loader,
      cacheLoader,
      threadLoader(2),
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [resolve('src/styles')]
        }
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      loader,
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }
    ]
  },
  {
    test: /\.css$/,
    include: [resolve('node_modules')],
    use: [loader, 'css-loader']
  }
]
