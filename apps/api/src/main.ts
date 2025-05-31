import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // CORS 활성화
  const port = process.env.PORT ?? 3002;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`🚀 API server is running on http://localhost:${port}`);
}
bootstrap();
