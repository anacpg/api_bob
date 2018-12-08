import { Schema } from 'mongoose';
import { C, REGEXPS } from '../../common';
import { RandomProvider } from '../../providers';
import { STRING, NUMBER } from '../common/types';

module.exports = new Schema({
  id: STRING({ default: RandomProvider.token, unique: true }),
  name: STRING(),
  surname: STRING(),
  bags: NUMBER(),
  state: STRING({ default: C.USER_STATES.ACTIVE, enum: Object.values(C.USER_STATES), null: true }),
  username: STRING({ unique: true }),
  email: STRING({ unique: true, match: REGEXPS.EMAIL }),
  password: STRING(),
});
