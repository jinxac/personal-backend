import { IsNotEmpty } from 'class-validator';

export class UpdateEntryDto {
  @IsNotEmpty()
  instrument: string;

  @IsNotEmpty()
  buyAt: Date;

  @IsNotEmpty()
  sellAt: Date;

  @IsNotEmpty()
  strategy: string;

  entryPrice: number;

  targetPrice: number;

  exitPrice: number;

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
