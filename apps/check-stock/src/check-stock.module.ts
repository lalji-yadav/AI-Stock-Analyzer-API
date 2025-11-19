import { Module } from '@nestjs/common';
import { CheckStockController } from './check-stock.controller';
import { CheckStockService } from './check-stock.service';

@Module({
  imports: [],
  controllers: [CheckStockController],
  providers: [CheckStockService],
})
export class CheckStockModule {}
