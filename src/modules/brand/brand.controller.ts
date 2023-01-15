import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBrandDto, updateBrandDto } from 'src/dtos';
import { FilterModel } from 'src/models';
import { BrandService } from './brand.service';

@ApiTags('Brand')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) { }

  @Post()
  async createBrand(@Body() brand: CreateBrandDto) {
    return await this.brandService.create(brand);
  }

  @Get()
  async listbrand(@Query() query: FilterModel) {
    return await this.brandService.list(query);
  }

  @Delete()
  async deleteBrand(@Body() brand: any) {
    return await this.brandService.delete(brand);
  }

  @Put(':id')
  async updateBrand(@Param() params, @Body() brand: updateBrandDto) {
    return await this.brandService.update(params.id, brand);
  }

  @Get(':id')
  async getBrand(@Param() params) {
    return await this.brandService.find(params.id);
  }
}
