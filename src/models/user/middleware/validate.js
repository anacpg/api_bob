import { LogProvider } from '../../../providers';
import { ERRORS, REGEXPS } from '../../../common';
import { createError } from '../../common/errors';

function preValidate (user, update, next) {
  LogProvider.debug(`#model #user Validate middleware for ${user.id}`);
  if (update && update.email && !REGEXPS.EMAIL.test(update.email)) return next(createError(ERRORS.WRONG_DATA));
  LogProvider.debug(`#model #matching Validate middleware for ${user.id} finished`);
  return next();
}

async function preUpdate (next) {
  const { $set: update } = this._update;
  const { id } = this._conditions;
  const user = await this.model.find({ id });
  preValidate(user, update, next);
}

export default (schema) => {
  schema.pre('validate', function preCreate (next) {
    preValidate(this, null, next);
  });
  schema.pre('update', preUpdate);
};
