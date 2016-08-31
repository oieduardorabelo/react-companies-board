const nodePath = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')

const path = (dir) => nodePath.resolve(dir)

module.exports = {
  devtool: 'inline-source-map',
  context: path('./'),
  entry: {
    main: './main.jsx',
    commons: ['react', 'react-dom', 'flux', 'shortid'],
  },
  output: {
    path: path('/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.optimize.CommonsChunkPlugin('commons', 'commons.chunk.js'),
    new ProgressBarPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: 'node_modules' },
      { test: /\.css/, loader: 'style!css', exclude: 'node_modules' },
      { test: /\.(ico|jpg|png)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
