const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  runtimeChunk: {
    name: 'manifest'
  },
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'commons',
        chunks: 'initial'
      },
      antd: {
        name: 'antd',
        test: /[\\/]node_modules[\\/](antd)[\\/]/,
        chunks: 'all',
        priority: 9
      },
      react: {
        name: 'react',
        test: /[\\/]node_modules[\\/](react)[\\/]/,
        chunks: 'all',
        priority: 9
      },
      '@ant-design': {
        name: '@ant-design',
        test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
        chunks: 'all',
        priority: 9
      }
      // vendors: {
      //   name: 'vendor',
      //   test: /[\\/]node_modules[\\/](moment|axios)[\\/]/,
      //   chunks: 'all',
      //   priority: 10
      // }
    }
  },
  minimizer: [
    new TerserPlugin({
      // 是否启用缓存
      cache: true,
      // 是否多线程进行
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        safe: true,
        autoprefixer: false,
        discardComments: { removeAll: true }
      },
      canPrint: true
    })
  ]
}
