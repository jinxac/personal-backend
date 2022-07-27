import { Test, TestingModule } from '@nestjs/testing';
import { StockJournalController } from './stock-journal.controller';

describe('StockJournalController', () => {
  let controller: StockJournalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockJournalController],
    }).compile();

    controller = module.get<StockJournalController>(StockJournalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
