module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:my-eslint-plugin/myConfig',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'my-eslint-plugin'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unreachable': 'error', //this rule will not allow any code after return,throw,break,continue  https://eslint.org/docs/latest/rules/no-unreachable
    'no-restricted-imports': ['error', 'moment'], // ths rule will make sure listed library is going to be use in this project
    eqeqeq: 'error', // this rule make sure we use "===" not "==" when comparing the things
    'no-console': 'error',
    'my-eslint-plugin/no-fun-function': 'warn',
  },
  overrides: [
    {
      files: '*.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
