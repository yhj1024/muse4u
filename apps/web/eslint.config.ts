import { baseConfig } from '@repo/eslint-config/base';
import { nextConfig } from '@repo/eslint-config/next';
import type { Linter } from 'eslint';

const config: Linter.FlatConfig[] = [
  ...baseConfig,
  ...nextConfig,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'public/**',
      '*.config.js',
      '*.config.ts',
    ],
  },
];

export default config;