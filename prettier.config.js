import trivagoPrettierPluginSortImports from '@trivago/prettier-plugin-sort-imports';

/**
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  importOrder: ['^(react?/?([a-zA-Z/]*))$', '<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxSingleQuote: false,
  plugins: [trivagoPrettierPluginSortImports],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};

export default config;
