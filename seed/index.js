import mongoose from 'mongoose';
import addUsers from './users';
import { C } from '../src/common';
import { LogProvider } from '../src/providers';

mongoose.connect('mongodb://localhost:27017/bob', { useNewUrlParser: true });

async function run () {
  await addUsers();
  LogProvider.info('#seed USERS created');
}

run().then(() => {
  LogProvider.info('#seed finish SUCCESS');
  mongoose.connection.close();
  process.exit(C.SUCCESS);
}).catch((error) => {
  if (!error || !error.stack) error = JSON.stringify(error);
  LogProvider.error(`#seed Failed ${error} ${error.stack}`);
  process.exit(C.FAILURE);
});
