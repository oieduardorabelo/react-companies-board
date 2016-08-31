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
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: 'node_modules' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
