const path = require("path")
const webpack = require('webpack') // eslint-disable-line
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'

  webpackConfig.output.filename = '[name].[hash].bundle.js'
  webpackConfig.output.chunkFilename = '[name].[chunkhash].async.js'

  webpackConfig.entry.vendor = [
    "dva",
    "dva-loading",
    "react",
    "react-dom",
    "moment"
  ]

  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: "[name].[hash].js"
  }))

  webpackConfig.plugins.push(new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  }))

  return webpackConfig
}
