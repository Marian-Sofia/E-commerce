import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firts_name: String;

  @IsString()
  @IsOptional()
  last_name: String;

  @IsString()
  @IsOptional()
  email: String;

  @IsString()
  @IsOptional()
  password: String;

  @IsString()
  @IsOptional()
  genre: String;

  @IsString()
  @IsOptional()
  phone: String;

  @IsString()
  @IsOptional()
  country: String

  @IsString()
  @IsOptional()
  city: String

  @IsString()
  @IsOptional()
  address: String

  @IsDate()
  @IsOptional()
  date_of_birth: Date

}
