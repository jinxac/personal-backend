import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { StockJournal } from './stock-journal.entity';

@EntityRepository(StockJournal)
export class StockJournalRepository extends Repository<StockJournal> {
  private readonly logger = new Logger(StockJournalRepository.name);
}
