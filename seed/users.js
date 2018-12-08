import { UserModel } from '../src/models';
import { LogProvider, CryptProvider } from '../src/providers';

const USER_LIST = [
  {
    email: 'albap@bob.io',
    name: 'Alba',
    surname: 'Perez',
    username: 'albaps',
    password: 'pass1',
    state: 'active',
    bags: 5,
  },
  {
    email: 'rosap@bob.io',
    name: 'Rosa',
    surname: 'Roman',
    username: 'rosarl',
    password: 'pass2',
    state: 'active',
    bags: 2,
  },
  {
    email: 'albertogg@bob.io',
    name: 'Alberto',
    surname: 'Garcia',
    username: 'albertog',
    password: 'pass3',
    state: 'inactive',
    bags: 0,
  },
  {
    email: 'pabloe@bob.io',
    name: 'Pablo',
    surname: 'Escaso',
    username: 'pablo',
    password: 'pass4',
    state: 'active',
    bags: 10,
  },
  {
    email: 'marialeon@bob.io',
    name: 'Maria',
    surname: 'Leon',
    username: 'marialeon',
    password: 'pass5',
    state: 'inactive',
    bags: 1,
  },
];

export default async () => {
  try {
    const promises = USER_LIST.map(async (user) => {
      user.password = CryptProvider.cipher(user.password, { hash: true });
      LogProvider.info(`#seed User ${user.name} ${user.surname} (${user.username})`);
      return UserModel.create(user);
    });
    await Promise.all(promises);
  } catch (error) {
    LogProvider.error(`#seed Failed adding USERS: ${JSON.stringify(error)} ${error.stack}`);
  }
};
