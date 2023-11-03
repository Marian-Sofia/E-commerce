import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto  {

  @IsOptional()
  @IsString()
  name: String;

  @IsOptional()
  @IsString()
  title: String;

  @IsOptional()
  @IsString()
  description: String;

  @IsOptional()
  @IsString()
  category: String;

  @IsOptional()
  @IsString()
  brand: String;

  @IsOptional()
  @IsNumber()
  price: Number;

  @IsOptional()
  @IsNumber()
  stock: Number;

  @IsOptional()
  @IsString()
  technical_Data: String[];

  @IsOptional()
  @IsNumber()
  sold: Number;
}
