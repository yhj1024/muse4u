import nextPlugin from '@next/eslint-plugin-next';
import baseConfig from './base.js';

export const nextConfig = [
  {
    ignores: [
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/coverage/**',
    ],
  },
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      // React rules removed - need react plugin for these
    },
  },
];

export default nextConfig;
