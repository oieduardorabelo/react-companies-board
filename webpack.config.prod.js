/* eslint-disable global-require */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodePath = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')

const path = dir => nodePath.resolve(dir)

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

module.exports = {
  devtool: 'source-map',
  context: path('./'),
  entry: [
    require.resolve('./.polyfills'),
    './main.jsx',
  ],
  output: {
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    filename: '[name].[hash].js',
    path: path('dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: 'node_modules',
        query: require('./.babel.env'),
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: 'node_modules',
      },
      {
        test: /\.(ico|jpg|png)$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
