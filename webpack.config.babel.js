import webpack from 'webpack'
import _path from 'path'

const path = (dir) => _path.join(__dirname, dir)

export default {
  devtools: 'inline-source-map',
  context: path('./'),
  entry: './main.jsx',
  output: {
    path: path('/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optomize.DedupePlugin(),
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
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },
}
