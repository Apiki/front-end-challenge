module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb','prettier',
  'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
  },
};
