import { baseConfig } from '@repo/eslint-config/base';
import { nestConfig } from '@repo/eslint-config/nest';
import type { Linter } from 'eslint';

const config: Linter.FlatConfig[] = [
  ...baseConfig,
  ...nestConfig,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.spec.ts',
      'test/**',
    ],
  },
];

export default config;