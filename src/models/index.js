import mongoose from 'mongoose';
import user from './user';

const UserModel = user(mongoose);

export {
  UserModel,
};
