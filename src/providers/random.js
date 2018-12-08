import crypto from 'crypto';

const ID_LENGTH = 32;
const NON_ALLOWED_CHARACTERS = /[+\\/]/g;

function token (length = ID_LENGTH) {
  const seed = `${Date.now()}${Math.random()}`;
  const buffer = crypto.createHash('sha256').update(seed).digest();
  const value = buffer.toString('base64').toLowerCase().replace(NON_ALLOWED_CHARACTERS, 'x');
  return value.substring(0, length);
}

export default { token };
