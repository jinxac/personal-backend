import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Strategy } from "./strategy.entity";

@EntityRepository(Strategy)
export class StrategyRepository extends Repository<Strategy> {
  private readonly logger = new Logger(StrategyRepository.name);
}
