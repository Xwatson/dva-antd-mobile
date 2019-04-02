const path = require("path");
import webpack from 'webpack';

module.exports = (webpackConfig, env) => {
  const production = env === 'production'

  webpackConfig.output.filename = '[name].[hash].bundle.js';
  webpackConfig.output.chunkFilename = '[name].[chunkhash].async.js';

  webpackConfig.entry.vendor = [
    "dva",
    "dva-loading",
    "react",
    "react-dom",
    "moment"
  ];

  webpackConfig.resolve.alias = {
    'components': path.resolve(__dirname, './src/components'),
  };

  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: "[name].[hash].js"
  }));

  return webpackConfig;
}
