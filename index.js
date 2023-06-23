module.exports = {
  env: {
    es2020: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],

  extends: ['standard', 'plugin:prettier/recommended'],

  rules: {
    'no-undef': 'off',
    'no-useless-constructor': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['absolute', 'module', '/^@/', 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
}