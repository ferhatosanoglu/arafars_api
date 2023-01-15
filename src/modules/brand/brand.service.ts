import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto, updateBrandDto } from 'src/dtos';
import { BrandModel } from 'src/models';
import { ResourceService } from 'src/services/resource.service';

@Injectable()
export class BrandService extends ResourceService<
  BrandModel,
  CreateBrandDto,
  updateBrandDto
> {
  constructor(
    @InjectModel('Brand') private readonly brandMongo: Model<BrandModel>,
  ) {
    super(brandMongo);
  }
}
