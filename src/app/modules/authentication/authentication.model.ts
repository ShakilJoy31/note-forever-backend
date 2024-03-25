import { Schema, model } from 'mongoose';
import {
    ISignup
} from './authentication.interface';

export const userSchema = new Schema<ISignup>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Automatic give the field called createdAt and updatedAt
    timestamps: true,
    toJSON:{
      virtuals: true
  }
  }
);


export const AuthenticationModel = model<ISignup>(
  'users',
  userSchema
);
