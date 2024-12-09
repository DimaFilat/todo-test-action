import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        reporter: ['text', 'json', 'html'],
        exclude: ['./src/main.jsx', '**/*.config.{js,ts}', ...configDefaults.exclude],
      },
      environment: 'jsdom',
      globals: true,
      include: ['./src/**/*.spec.tsx'],
      name: 'default',
      setupFiles: ['./setup.rtl.ts'],
    },
  }),
);
