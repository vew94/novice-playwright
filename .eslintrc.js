/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  overrides: [
    {
      files: '**/*.ts',
      parser: '@typescript-eslint/parser',
      extends: ['airbnb', 'prettier'],
      overrides: [
        {
          files: [
            '**/__tests__/**/*.[jt]s?(x)',
            '**/?(*.)+(spec|test).[jt]s?(x)',
          ],
          extends: ['plugin:playwright/playwright-test', 'prettier'],
        },
      ],
    },
  ],
};
