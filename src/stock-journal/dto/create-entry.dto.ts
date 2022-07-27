import { IsNotEmpty } from 'class-validator';

export class CreateEntryDto {
  @IsNotEmpty()
  instrument: string;

  @IsNotEmpty()
  buyAt: Date;

  @IsNotEmpty()
  sellAt: Date;

  @IsNotEmpty()
  strategy: string;

  @IsNotEmpty()
  entryPrice: number;

  @IsNotEmpty()
  targetPrice: number;

  exitPrice: number;

  @IsNotEmpty()
  stopLossPrice: number;

  quantity: number;

  profit: number;

  profitPercentage: number;

  @IsNotEmpty()
  emotionAtEntry: string;

  emotionAtExit: string;

  tradeLearnings: string;

  tradeMistakes: string;

  tradeRating: number;
}
