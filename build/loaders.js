const { resolve } = require('./utils')

const cacheLoader = {
  loader: 'cache-loader',
  options: {
    cacheDirectory: resolve('.cache-loader')
  }
}

const threadLoader = workerParallelJobs => {
  const options = { workerParallelJobs }
  Object.assign(options, { poolTimeout: 2000 })
  return { loader: 'thread-loader', options }
}

module.exports = {
  cacheLoader,
  threadLoader
}