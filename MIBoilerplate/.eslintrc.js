module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'sort-keys-fix',
    'react-hooks',
    'eslint-plugin-no-inline-styles',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/no-unstable-nested-components': 'off',
        'no-undef': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-inline-styles/no-inline-styles': 2,
        'sort-keys-fix/sort-keys-fix': [
          'error',
          'asc',
          {
            caseSensitive: false,
            natural: true,
          },
        ],
        'prettier/prettier': [
          'error',
          {
            quoteProps: 'consistent',
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'es5',
            useTabs: false,
          },
        ],
        'no-restricted-imports': ['error'],
        // 'no-console': ['error'],
        'no-shadow': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],
        'import/order': [
          'error',
          {
            'groups': [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            'pathGroups': [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@mindinventory/**',
                group: 'internal',
              },
              {
                pattern: '@src/**',
                group: 'internal',
              },
            ],
            'pathGroupsExcludedImportTypes': ['internal', 'react'],
            'newlines-between': 'always',
            'alphabetize': {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/newline-after-import': [
          'warn',
          {
            count: 1,
          },
        ],
        'import/no-duplicates': 'error',
      },
    },
  ],
};
