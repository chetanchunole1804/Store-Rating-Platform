import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  category?: string;
}
