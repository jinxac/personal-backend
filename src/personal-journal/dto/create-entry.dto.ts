import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEntryDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
