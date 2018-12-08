import { C, ERRORS } from '../../common';
import { UserModel } from '../../models';
import { CryptProvider } from '../../providers';

export default async ({ body }) => {
  body.password = body.password && CryptProvider.cipher(body.password, { hash: true });
  const user = new UserModel(body);
  try {
    await user.save();
  } catch (error) {
    throw { code: C.CODE.WRONG_REQUEST, message: error.message };
  }
  return { code: C.CODE.SUCCESS, message: user };
};
