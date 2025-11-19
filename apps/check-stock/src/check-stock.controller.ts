import { Controller, Get } from '@nestjs/common';
import { CheckStockService } from './check-stock.service';

@Controller()
export class CheckStockController {
  constructor(private readonly checkStockService: CheckStockService) {}

  @Get()
  getHello(): string {
    return this.checkStockService.getHello();
  }
}
