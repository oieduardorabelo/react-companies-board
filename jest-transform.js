const babelJest = require('babel-jest')
const babelEnv = require('./.babel.env')

module.exports = babelJest.createTransformer(babelEnv)
