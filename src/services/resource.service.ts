import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export class ResourceService<T extends any, C extends any, U extends any> {
  constructor(protected readonly mongoModel: Model<T>) { }

  async create(data: C) {
    return await this.mongoModel.create(data);
  }

  async delete(id: string) {
    return await this.mongoModel
      .findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .lean();
  }

  async update(id: string, dto: U) {
    return this.mongoModel.findByIdAndUpdate(id, dto, { new: true }).lean();
  }

  async find(id: string) {
    return await this.mongoModel.findById(id).lean();
  }

  async list(query) {
    const pageOptions = {
      page: query.page ? query.page : 0,
      limit: query.size ? query.size : 10,
      total: await this.mongoModel.countDocuments().exec(),
      totalpage: Math.ceil(
        (await this.mongoModel.countDocuments().exec()) /
        (query.size ? query.size : 10),
      ),
    };
    const data = await this.mongoModel
      .find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .lean();
    return { data: data, pageOptions: pageOptions };
  }
}
