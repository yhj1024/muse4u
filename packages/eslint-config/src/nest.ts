import type { Linter } from 'eslint';

export const nestConfig: Linter.Config[] = [
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off', // NestJS 스타일 가이드에 따름
      '@typescript-eslint/explicit-function-return-type': 'warn', // 타입 추론 가능한 경우 허용
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      // Type-aware rules disabled due to complexity with monorepo setup
      // '@typescript-eslint/prefer-optional-chain': 'error',
      // '@typescript-eslint/prefer-nullish-coalescing': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['src/*', '../**/src/*'],
        },
      ],
      'no-return-await': 'error',
      'require-await': 'error',
    },
  },
];

export default nestConfig;
