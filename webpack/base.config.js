const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  entry: {
    'app': [
      'babel-polyfill',
      './src/index'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'sass-loader']
        })
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(txt|svg)(\?.*)?$/,
        loader: 'raw-loader'
      }
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    alias: {
      Root: path.resolve(__dirname, '../'),
      Styles: path.resolve(__dirname, '../src/stylesheets'),
      Components: path.resolve(__dirname, '../src/components'),
      Scenes: path.resolve(__dirname, '../src/scenes'),
      Services: path.resolve(__dirname, '../src/services'),
      Containers: path.resolve(__dirname, '../src/containers')
    }
  }
}
