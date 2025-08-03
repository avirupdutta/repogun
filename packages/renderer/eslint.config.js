import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettierConfig, // This disables ESLint rules that conflict with Prettier
    ],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'react': react,
      'import': importPlugin,
      'jsx-a11y': jsxA11y,
      'promise': promise,
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      'max-len': 'off',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'object-curly-newline': 'off',
      'arrow-parens': 'off',
      'implicit-arrow-linebreak': 'off',
      'no-nested-ternary': 'off',
      'nonblock-statement-body-position': ['error', 'any'],
      camelcase: 'error',
      'consistent-return': 0,
      'no-restricted-syntax': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-shadow': 'error',
      'no-underscore-dangle': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-empty-interface': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-shadow': ['error'],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.stories.tsx'],
        },
      ],
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['vite.config.js'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never',
        },
      ],
    },
  },
]);
