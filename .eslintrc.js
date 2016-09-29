module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  globals: {
    expect: true,
    createSpy: true,
    spyOn: true,
    isSpy: true,
  },
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
    mocha: true
  },
  rules: {
    semi: [2, "never"]
  }
}
