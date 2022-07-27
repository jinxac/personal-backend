import { Test, TestingModule } from '@nestjs/testing';
import { StockJournalService } from './stock-journal.service';

describe('StockJournalService', () => {
  let service: StockJournalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockJournalService],
    }).compile();

    service = module.get<StockJournalService>(StockJournalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
