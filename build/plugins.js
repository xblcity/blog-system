const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin

module.exports = [
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html' // 注意路径绝对路径
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[name].[contenthash].css'
  }),
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
