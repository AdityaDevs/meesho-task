const merge = require('webpack-merge')

const baseConfig = require('./base.config.js')

const config = merge.smart(baseConfig, {
  mode: 'development',

  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  entry: {
    'app': [
      'react-hot-loader/patch'
    ]
  },

  devtool: 'cheap-module-source-map'
})

module.exports = config
