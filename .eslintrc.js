module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
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
    semi: [2, "never"]
  }
}
