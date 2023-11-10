import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schema/products.schema';
import { Model } from 'mongoose';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModel: Model<Products>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return {
      message: 'The product was created successfully',
      data: await this.productsModel.create(createProductDto),
    };
  }

  async findAll() {
    return {
      message: 'These are all registered products',
      data: await this.productsModel.find(),
    };
  }

  async findOne(id: string) {
    try {
      const data = await this.productsModel.findById(id)
      if(data === null){
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'The product was not found'
        })
      }
      return {
        message: `The product with id:${id} was found`,
        data,
      };  
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
    
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return {
      message: `This product with id:${id} has been updated`,
      data: await this.productsModel.findByIdAndUpdate(id, updateProductDto, {new: true}),
    };
  }

  async remove(id: string) {
    return {
      message: `The product with id:${id} has been deleted`,
      data: await this.productsModel.findByIdAndRemove(id),
    };
  }
}