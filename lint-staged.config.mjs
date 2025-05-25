export default {
  '**/*.{ts,tsx}': async (filenames) => {
    // eslint.config.ts 파일은 제외
    const filteredFiles = filenames.filter(file => !file.endsWith('eslint.config.ts'));
    if (filteredFiles.length === 0) {
      return [`echo "⏭️  ESLint 설정 파일만 변경되어 검사를 건너뜁니다."`];
    }
    const filePaths = filteredFiles.join(' ');
    return [
      `echo "🔍 ESLint 검사 중..."`,
      `eslint --max-warnings 0 ${filePaths}`,
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