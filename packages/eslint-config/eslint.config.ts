import { baseConfig } from './src/base';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
  ...baseConfig,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
    ],
  },
];

export default config;