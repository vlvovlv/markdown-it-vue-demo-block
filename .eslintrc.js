const OFF = 0;
const ERROR = 2;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier'
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': ERROR,
    'no-debugger': isProd ? ERROR : OFF,
    'no-console': isProd ? ERROR : OFF,
    'no-plusplus': OFF,
    'no-param-reassign': OFF,
  }
};
