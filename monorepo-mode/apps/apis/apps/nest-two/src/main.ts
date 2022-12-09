import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);
  await app.listen(3000);
}
bootstrap();
