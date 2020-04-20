module.exports = {
  extends: ['codingitwrong'],
  parser: 'babel-eslint',
  plugins: ['cypress', 'jest', 'react'],
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
};
