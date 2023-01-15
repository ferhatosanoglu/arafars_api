import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModel, BrandSchema } from 'src/models';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    BrandModel,
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule { }
