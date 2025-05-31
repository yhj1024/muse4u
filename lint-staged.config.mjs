export default {
  '**/*.{ts,tsx}': async (filenames) => {
    const filePaths = filenames.join(' ');
    // 변경된 파일이 속한 패키지들 찾기
    const packages = [...new Set(filenames.map(file => {
      const match = file.match(/^(apps|packages)\/([^\/]+)\//);
      return match ? `${match[1]}/${match[2]}` : null;
    }).filter(Boolean))];
    
    const lintCommands = packages.length > 0 
      ? [`pnpm turbo lint --filter={${packages.join(',')}}`]
      : [];
    
    return [
      `echo "🔍 ESLint 검사 중..."`,
      ...lintCommands,
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