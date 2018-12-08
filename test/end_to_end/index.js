import mongoose from 'mongoose';
import { LogProvider } from '../../src/providers';
import users from './users';

async function init () {
  try {
    await mongoose.connect('mongodb://localhost:27017/screener', { useNewUrlParser: true });
  } catch (error) {
    LogProvider.error(`#test Initialization failed: ${error} ${error.stack}`);
  }
}

export default () => {
  before(init);
  describe('Users', users);
};
