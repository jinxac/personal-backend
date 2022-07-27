import { StrategyEnum } from "src/enums/strategy.enum";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Strategy {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: StrategyEnum,
    default: StrategyEnum.FortyFourMA,
  })
  type: StrategyEnum;

  @Column({
    type: "varchar",
  })
  description: string;
}
