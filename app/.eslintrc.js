module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [2, 'never'],
    'vue/max-attributes-per-line': [2, {
      'singleline': 50,
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}