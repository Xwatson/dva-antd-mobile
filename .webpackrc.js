const path = require('path');

export default {
  publicPath: '/',
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd-mobile', 'style': true }]
  ],
  theme: './theme.config.js',
  alias: {
    '@page': path.resolve(__dirname, './src/components/Page/index.js'),
  },
  html: {
    template: './src/index.ejs'
  }
}
