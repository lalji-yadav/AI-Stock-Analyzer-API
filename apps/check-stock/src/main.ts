import { NestFactory } from '@nestjs/core';
import { CheckStockModule } from './check-stock.module';

async function bootstrap() {
  const app = await NestFactory.create(CheckStockModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
