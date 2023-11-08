import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: String;

  @IsNotEmpty()
  @IsString()
  title: String;

  @IsNotEmpty()
  @IsString()
  description: String;

  @IsNotEmpty()
  @IsString()
  category: String;

  @IsNotEmpty()
  @IsString()
  brand: String;

  @IsNotEmpty()
  @IsNumber()
  price: Number;

  @IsNotEmpty()
  @IsNumber()
  stock: Number;

  @IsNotEmpty()
  technical_data: String[];

  @IsOptional()
  @IsNumber()
  sold: Number;
}
