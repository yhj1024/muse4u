export default {
  '**/*.{ts,tsx}': async (filenames) => {
    const filePaths = filenames.join(' ');

    return [
      `echo "🔍 ESLint 검사 중..."`,
      `pnpm turbo lint`,
      `echo "✨ Prettier 포맷팅 검사 중..."`,
      `prettier --check ${filePaths}`,
    ];
  },
  '**/*.{json,md,mdx,css,scss,yaml,yml}': async (filenames) => {
    const filePaths = filenames.join(' ');
    return [
      `echo "✨ Prettier 포맷팅 검사 중..."`,
      `prettier --check ${filePaths}`,
    ];
  },
};
