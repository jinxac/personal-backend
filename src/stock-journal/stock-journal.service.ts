import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockJournal } from './stock-journal.entity';
import { StockJournalRepository } from './stock-journal.repository';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { StrategyService } from 'src/strategy/strategy.service';

@Injectable()
export class StockJournalService {
  private readonly logger = new Logger(StockJournalService.name);

  constructor(
    private readonly strategyService: StrategyService,
    @InjectRepository(StockJournal)
    private stockJournalRepository: StockJournalRepository,
  ) {}

  async create(createEntryDto: CreateEntryDto): Promise<unknown> {
    const strategy = await this.strategyService.getById(
      createEntryDto.strategy,
    );

    if (!strategy) {
      throw new NotFoundException(
        `Strategy ${createEntryDto.strategy} not found`,
      );
    }

    const entry: StockJournal = this.stockJournalRepository.create({
      ...createEntryDto,
      strategy,
    });

    try {
      await this.stockJournalRepository.insert({
        ...entry,
        strategy,
      });
      return {
        ok: true,
      };
    } catch (error) {
      this.logger.error(`error while saving the entry ${error.message}`, error);
      throw new InternalServerErrorException(`Entry could not be saved`);
    }
  }

  async findAll(): Promise<StockJournal[]> {
    return this.stockJournalRepository.find();
  }

  async findOne(id: string): Promise<StockJournal> {
    return this.stockJournalRepository.findOne(id);
  }

  async delete(id: string) {
    const result = await this.stockJournalRepository.delete({ id });
    return {
      ok: true,
      message: `Rows affected ${result.affected}`,
    };
  }

  async update(id: string, updateEntryDto: UpdateEntryDto) {
    const strategy = await this.strategyService.getById(
      updateEntryDto.strategy,
    );

    if (!strategy) {
      throw new NotFoundException(
        `Strategy ${updateEntryDto.strategy} not found`,
      );
    }
    const entry: StockJournal = this.stockJournalRepository.create({
      ...updateEntryDto,
      strategy,
    });
    const result = await this.stockJournalRepository.update({ id: id }, entry);
    return {
      ok: true,
      message: `Rows affected ${result.affected}`,
    };
  }
}
