import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Url } from 'url';

export class CreateBrandDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  desc: string;

  @IsUrl()
  @ApiProperty()
  picture: string;

  @IsEmail()
  @ApiProperty()
  email: string;
}

export class updateBrandDto {
  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  desc: string;

  @IsOptional()
  @IsUrl()
  @ApiProperty()
  picture: string;
}

export class deleteBrandDto {
  @IsString()
  @ApiProperty()
  _id: string;
}
