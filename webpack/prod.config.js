const path = require('path')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./base.config.js')

const config = merge.smart(baseConfig, {
  mode: 'production',

  devtool: 'sourcemap',

  output: {
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {minimize: true}
        }
      ]
    }]
  },

  plugins: [
    new CopyWebpackPlugin([{from: 'static', to: 'static'}]),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 20480
    })
  ]
})

module.exports = config
