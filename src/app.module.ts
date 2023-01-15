import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import environment from './environments/environment';
import { BrandSchema } from './models';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    MongooseModule.forRoot(environment.MONGODB_URI),
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
