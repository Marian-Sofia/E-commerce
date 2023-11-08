import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firts_name: String;

  @IsString()
  @IsNotEmpty()
  last_name: String;

  @IsString()
  @IsNotEmpty()
  email: String;

  @IsString()
  @IsNotEmpty()
  password: String;

  @IsString()
  @IsNotEmpty()
  genre: String;

  @IsString()
  @IsNotEmpty()
  phone: String;

  @IsString()
  @IsNotEmpty()
  country: String;

  @IsString()
  @IsNotEmpty()
  city: String;

  @IsString()
  @IsNotEmpty()
  address: String;

  @IsString()
  date_of_birth: String;
}
