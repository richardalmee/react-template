module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['cypress', 'jest', 'react', 'prettier'],
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
  },
};
