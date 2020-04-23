const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const {
  ICONFONT_SRC_URL,
  HIGHLIGHT_SRC_URL,
  // ANTD_SRC_URL,
  MOMENT_SRC_URL,
  AXIOS_SRC_URL
} = require('./constants')

module.exports = [
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html', // 注意路径绝对路径
    favicon: 'build/tpl/favicon.ico',
    templateParameters: {
      iconfontSrcUrl: ICONFONT_SRC_URL,
      hightlightSrcUrl: HIGHLIGHT_SRC_URL,
      // antdSrcUrl: ANTD_SRC_URL,
      momentSrcUrl: MOMENT_SRC_URL,
      axiosSrcUrl: AXIOS_SRC_URL
    }
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[name].[contenthash].css'
  }),
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new BundleAnalyzerPlugin()
]
