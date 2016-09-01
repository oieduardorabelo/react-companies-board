/* eslint-disable global-require */

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  target: 'node',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  plugins: [
    new ProgressBarPlugin(),
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
