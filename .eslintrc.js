const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'linebreak-style': 'off',
    semi: 'off',
    'no-console': isProd ? 'error' : 'off',
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      node: {},
      webpack: { },
    },
  },
}
