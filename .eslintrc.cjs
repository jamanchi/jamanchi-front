module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': ['off'],
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-return-await': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
