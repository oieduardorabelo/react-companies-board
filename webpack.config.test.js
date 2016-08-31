const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

module.exports = {
  debug: true,
  devtool: 'eval',
  noInfo: false,

  externals: [nodeExternals()],

  target: 'node',

  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: 'node_modules' },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
