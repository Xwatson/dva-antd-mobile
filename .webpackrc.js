const path = require('path')

export default {
  publicPath: '/',
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd-mobile', 'style': true }]
  ],
  theme: './theme.config.js',
  alias: {
    '@components': path.resolve(__dirname, './src/components'),
    '@config': path.resolve(__dirname, './src/config'),
    '@routes': path.resolve(__dirname, './src/routes'),
    '@page': path.resolve(__dirname, './src/components/Page/index.js'),
  },
  html: {
    template: './src/index.ejs'
  }
}
