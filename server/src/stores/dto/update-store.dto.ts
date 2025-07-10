import { IsOptional } from 'class-validator';

export class UpdateStoreDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  category?: string;
}
