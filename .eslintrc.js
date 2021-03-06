module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'flowtype', 'prettier', 'fp'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  rules: {
    'no-constant-condition': [0],
    'no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'react/button-has-type': [1],
    'react/destructuring-assignment': [0],
    'react/jsx-filename-extension': [0],
    'react/no-danger': [0],
    'react/no-find-dom-node': [0],
    'react/no-unused-prop-types': [0],
    'react/prop-types': [0],
    'react/require-default-props': [0],
    'react/prefer-stateless-function': [1, { ignorePureComponents: false }],
    'react/sort-comp': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/no-onchange': [0],
    'prettier/prettier': 'error',
    'import/no-cycle': 'warning',
    'import/no-extraneous-dependencies': [0],
    'import/no-named-as-default-member': [0],
    'import/no-unused-prop-types': [0],
    'import/order': 'error',
    'import/prefer-default-export': [0],
    'fp/no-arguments': 'error',
    'fp/no-delete': 'error',
    'fp/no-let': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutation': [
      'error',
      {
        commonjs: true,
        allowThis: true,
        exceptions: [
          {
            object: 'this',
          },
        ],
      },
    ],
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
