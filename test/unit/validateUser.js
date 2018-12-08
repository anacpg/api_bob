import assert from 'assert';
import { ERRORS } from '../../src/common';
import { UserModel } from '../../src/models';

export default async () => {
  it('Validate user added OK', async () => {
    const data = {
      email: 'victor.m@bob.io',
      name: 'Victor',
      surname: 'Menor',
      username: 'victor.m',
      password: 'pass12',
      state: 'active',
      bags: 3,
    };

    const user = new UserModel(data);
    const result = await user.save();
    assert.equal(result.name, user.name);
    assert.equal(result.email, user.email);
  });

  it('Validate user added OK', async () => {
    const campaign = new UserModel({
      email: 'manu.m',
      name: 'Manuel',
      surname: 'Moreno',
      username: 'manu.m',
      password: 'pass11',
      state: 'inactive',
      bags: 3,
    });
    let observed = null;
    try {
      await campaign.save();
    } catch (error) {
      observed = error;
    }
    assert(observed);
    assert.equal(observed.message, ERRORS.WRONG_DATA.message);
    assert.equal(observed.code, ERRORS.WRONG_DATA.code);
  });
};
