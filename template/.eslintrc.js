module.exports = {
  extends: [
    '@react-native',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-unstable-nested-components': ['off', {allowAsProps: true}],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-no-inline-styles',
    'import',
    'react-hooks',
    'sort-keys-fix',
    'sort-destructure-keys',
    'react-native',
  ],
  root: true,
  rules: {
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'external',
            pattern: '@(react|react-native)',
            position: 'before',
          },
          {
            group: 'internal',
            pattern: '@miBoilerplate/**',
          },
          {
            group: 'internal',
            pattern: '@src/**',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
      },
    ],
    'no-console': ['error'],
    'no-inline-styles/no-inline-styles': 2,
    'no-restricted-imports': [
      'error',
      {
        importNames: ['Text', 'Image'],
        message: 'Please use @app/blueprints for importing main elements.',
        name: 'react-native',
      },
    ],
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: true,
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-destructure-keys/sort-destructure-keys': [2, {caseSensitive: false}],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
};
