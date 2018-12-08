import { C, ERRORS } from '../../common';
import { UserModel } from '../../models';
import { CryptProvider } from '../../providers';

export default async ({ params, body }) => {
  let user = await UserModel.findOne({ id: params.id });
  if (!user) return ERRORS.NOT_FOUND;
  if (body.password) {
    body.password = body.password && CryptProvider.cipher(body.password, { hash: true });
  }
  try {
    user = await UserModel.update({ id: params.id }, { $set: body });
  } catch (error) {
    throw { code: C.CODE.WRONG_REQUEST, message: error.message };
  }
  return { code: C.CODE.SUCCESS, message: user };
};
