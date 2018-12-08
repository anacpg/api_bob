import { C, ERRORS } from '../../common';
import { UserModel } from '../../models';

export default async ({ params }) => {
  const user = await UserModel.findOne({ id: params.id });
  if (!user) return ERRORS.NOT_FOUND;
  return { code: C.CODE.SUCCESS, message: user };
};
