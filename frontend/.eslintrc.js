module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'block-spacing': [2, 'always'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
  },
};
