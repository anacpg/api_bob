import { C } from '../../common';
import { UserModel } from '../../models';

export default async ({ user }) => {
  const users = await UserModel.find({}, { id: true, name: true, bags: true }).sort({ state: 1 });
  return { code: C.CODE.SUCCESS, message: users };
};
