import { IsEmail, IsNotEmpty, MinLength, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsIn(['user', 'store-owner', 'admin'])
  role: 'user' | 'store-owner' | 'admin';
}
