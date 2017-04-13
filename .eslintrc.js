module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier'],
  parseOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true
  },
  rules: {
    'prettier/prettier': ['error', { 'trailingComma': 'es5', 'singleQuote': true }]
  }
}
