import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('analyze/:symbol')
  analyzeStock(@Param('symbol') symbol: string) {
   // return this.stocksService.analyzeStock(symbol);
    return this.appService.analyzeStock(symbol)
  }

}
