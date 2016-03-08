module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: './'
  },
  module: {
    loaders: [
      { test: /.js$/, loader: 'babel-loader', exclude: './node_modules' }
    ]
  }
}
