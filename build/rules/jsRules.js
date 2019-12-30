const { resolve } = require('./../utils')

module.exports = [
  {
    test: /\.(j|t)sx?$/,
    include: resolve('src'),
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
          plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
          ]
        }
      }
    ]
  }
]