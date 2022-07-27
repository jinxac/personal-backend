import { Test, TestingModule } from '@nestjs/testing';
import { PersonalJournalService } from './personal-journal.service';

describe('PersonalJournalService', () => {
  let service: PersonalJournalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalJournalService],
    }).compile();

    service = module.get<PersonalJournalService>(PersonalJournalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
