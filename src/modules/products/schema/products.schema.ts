import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Products {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  title: String;

  @Prop({ required: true })
  description: String;

  @Prop({ required: true })
  category: String;

  @Prop({ required: true })
  brand: String;

  @Prop({ required: true })
  price: Number;

  @Prop()
  reviews: String;

  @Prop({ default: 100 })
  stock: Number;

  @Prop({ required: true })
  technical_data: String[];

  @Prop({ default: 0 })
  sold: Number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
