module.exports = {
  env: { browser: true, es2020: true },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb/hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
