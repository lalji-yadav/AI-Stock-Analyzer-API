import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckStockService {
  getHello(): string {
    return 'Hello World!';
  }
}
