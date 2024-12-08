import js from '@eslint/js';
import eslintPluginQeury from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').ConfigWithExtends} */
const config = [
  { ignores: ['dist', 'coverage', 'eslint.config.js', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      '@tanstack/query': eslintPluginQeury,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginQeury.configs['flat/recommended'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
      'prettier/prettier': 'error',
    },
  },
];

export default tseslint.config(config);
