import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop({ required: true })
  firts_name: String;

  @Prop({ required: true })
  last_name: String;

  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  password: String;

  @Prop({ required: true })
  genre: String;

  @Prop({ required: true })
  phone: String;

  @Prop({ required: true })
  country: String;

  @Prop({ required: true })
  city: String;

  @Prop({ required: true })
  address: String;

  @Prop({ required: true })
  date_of_birth: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
