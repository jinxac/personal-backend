import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StockJournalService } from './stock-journal.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller({
  version: '1',
  path: 'stock-journal',
})
export class StockJournalController {
  constructor(private readonly stockJournalService: StockJournalService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    return this.stockJournalService.create(createEntryDto);
  }

  @Get()
  async findAll() {
    return this.stockJournalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stockJournalService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEntryDto: UpdateEntryDto,
  ) {
    return this.stockJournalService.update(id, updateEntryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.stockJournalService.delete(id);
  }
}
