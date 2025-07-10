import { IsInt, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

export class CreateRatingDto {
  @IsNotEmpty()
  storeId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  value: number;

  @IsOptional()
  comment?: string;
}
