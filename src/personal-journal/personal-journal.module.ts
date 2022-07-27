import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalJournalController } from './personal-journal.controller';
import { PersonalJournal } from './personal-journal.entity';
import { PersonalJournalService } from './personal-journal.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalJournal])],
  controllers: [PersonalJournalController],
  providers: [PersonalJournalService],
})
export class PersonalJournalModule {}
