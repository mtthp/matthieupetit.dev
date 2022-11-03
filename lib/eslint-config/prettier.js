// import { sortOrder } from 'sort-package-json';

module.exports = {
  extends: [
    'eslint-config-prettier', // to turn off all Prettier rules that might conflict
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: true,
        htmlWhitespaceSensitivity: 'ignore',
        printWidth: 100,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        plugins: [require('prettier-plugin-tailwindcss')],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        // groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '.*', // Hits the all properties
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          // {
          //   pathPattern: '^$', // Hits the root properties
          //   order: sortOrder,
          // },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies|scripts$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
