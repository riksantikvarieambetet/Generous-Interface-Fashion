module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [2, 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}