import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategyModule } from 'src/strategy/strategy.module';
import { StockJournalController } from './stock-journal.controller';
import { StockJournal } from './stock-journal.entity';
import { StockJournalService } from './stock-journal.service';

@Module({
  imports: [StrategyModule, TypeOrmModule.forFeature([StockJournal])],
  controllers: [StockJournalController],
  providers: [StockJournalService],
})
export class StockJournalModule {}
