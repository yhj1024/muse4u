import { baseConfig } from '@repo/eslint-config/base';
import type { Linter } from 'eslint';

const config: Linter.FlatConfig[] = [
  ...baseConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];

export default config;