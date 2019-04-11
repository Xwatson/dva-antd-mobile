const path = require("path")
import webpack from 'webpack' // eslint-disable-line

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

  return webpackConfig
}
