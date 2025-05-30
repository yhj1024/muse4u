import type { Linter } from 'eslint';
import nextPlugin from '@next/eslint-plugin-next';

export const nextConfig: Linter.Config[] = [
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
