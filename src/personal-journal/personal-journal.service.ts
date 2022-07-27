import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntryDto } from './dto/create-entry.dto';
import { PersonalJournal } from './personal-journal.entity';

@Injectable()
export class PersonalJournalService {
  constructor(
    @InjectRepository(PersonalJournal)
    private personalJournalRepository: Repository<PersonalJournal>,
  ) {}

  create(createEntryDto: CreateEntryDto): Promise<PersonalJournal> {
    const entry = new PersonalJournal();
    entry.title = createEntryDto.title;
    entry.description = createEntryDto.description;
    return this.personalJournalRepository.save(entry);
  }

  findAll(): Promise<PersonalJournal[]> {
    return this.personalJournalRepository.find();
  }

  findOne(id: string): Promise<PersonalJournal> {
    return this.personalJournalRepository.findOne(id);
  }
}
