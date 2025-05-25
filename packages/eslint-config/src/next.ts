import type { Linter } from 'eslint';

export const nextConfig: Linter.FlatConfig[] = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];

export default nextConfig;