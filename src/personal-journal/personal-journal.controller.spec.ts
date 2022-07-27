import { Test, TestingModule } from '@nestjs/testing';
import { PersonalJournalController } from './personal-journal.controller';

describe('PersonalJournalController', () => {
  let controller: PersonalJournalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalJournalController],
    }).compile();

    controller = module.get<PersonalJournalController>(PersonalJournalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
