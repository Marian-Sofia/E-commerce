import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/cm'), UsersModule, ProductsModule]
})
export class AppModule {}
