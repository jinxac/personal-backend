import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';

import { CreateEntryDto } from './dto/create-entry.dto';
import { PersonalJournalService } from './personal-journal.service';
import { PersonalJournal } from './personal-journal.entity';

@Controller({
  version: '1',
  path: 'personal-journal',
})
export class PersonalJournalController {
  constructor(
    private readonly personalJournalService: PersonalJournalService,
  ) {}

  @Get()
  async findAll(): Promise<PersonalJournal[]> {
    return this.personalJournalService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createEntryDto: CreateEntryDto) {
    await this.personalJournalService.create(createEntryDto);
    return {
      message: 'Successfully created the entry',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PersonalJournal> {
    return this.personalJournalService.findOne(id);
  }
}
