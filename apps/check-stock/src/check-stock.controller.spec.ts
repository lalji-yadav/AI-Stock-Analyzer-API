import { Test, TestingModule } from '@nestjs/testing';
import { CheckStockController } from './check-stock.controller';
import { CheckStockService } from './check-stock.service';

describe('CheckStockController', () => {
  let checkStockController: CheckStockController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CheckStockController],
      providers: [CheckStockService],
    }).compile();

    checkStockController = app.get<CheckStockController>(CheckStockController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(checkStockController.getHello()).toBe('Hello World!');
    });
  });
});
