import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "./strategy.entity";
import { StrategyRepository } from "./strategy.repository";

@Injectable()
export class StrategyService {
  constructor(
    @InjectRepository(Strategy) private strategyRepository: StrategyRepository
  ) {}

  async getById(id: string) {
    return this.strategyRepository.findOne(id);
  }
}
