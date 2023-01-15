import * as mongoose from 'mongoose';

export class BrandModel {
  name: string;
  desc: string;
  picture: object;
  isDeleted: boolean;
}

export const BrandSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    desc: { type: String, required: false },
    picture: { type: Object, required: false },
    isDeleted: { type: Boolean, default: false, required: false },
  },
  { versionKey: false },
);
