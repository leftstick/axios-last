module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 'off',
    semi: 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off'
  }
}
