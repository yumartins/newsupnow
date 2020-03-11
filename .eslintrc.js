module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 0,
    camelcase: ['error', {
      properties: 'never',
      ignoreDestructuring: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      }
    }],
    'import-helpers/order-imports': ['warn', {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
