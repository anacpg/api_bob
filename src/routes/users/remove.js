import { C, ERRORS } from '../../common';
import { UserModel } from '../../models';
import { CryptProvider } from '../../providers';

export default async ({ params, body }) => {
  let user = await UserModel.findOne({ id: params.id });
  if (!user) return ERRORS.NOT_FOUND;
  try {
    user = await UserModel.remove({ id: params.id });
  } catch (error) {
    throw { code: C.CODE.WRONG_REQUEST, message: error.message };
  }
  return { code: C.CODE.SUCCESS, message: user };
};
