import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StrategyController } from "./strategy.controller";
import { Strategy } from "./strategy.entity";
import { StrategyService } from "./strategy.service";

@Module({
  imports: [TypeOrmModule.forFeature([Strategy])],
  controllers: [StrategyController],
  providers: [StrategyService],
  exports: [StrategyService],
})
export class StrategyModule {}
