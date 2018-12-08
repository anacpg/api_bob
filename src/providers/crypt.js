import crypto from 'crypto';

const ENCRYPTION_ALGORITHM = 'aes-256-ctr';
const ENCRYPTION_PASSWORD = '2k38f729sdkfei29';

function toText (value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'object') return JSON.stringify(value);
  return `${value}`;
}

function computeHash (value) {
  const shasum = crypto.createHash('sha1');
  shasum.update(value);
  return shasum.digest('hex');
}

function cipher (value, { hash = false } = {}) {
  const text = toText(value);
  const ciph = crypto.createCipher(ENCRYPTION_ALGORITHM, ENCRYPTION_PASSWORD);
  let result = ciph.update(text, 'utf8', 'hex');
  result += ciph.final('hex');
  return hash ? computeHash(result) : result;
}

export default {
  cipher, hash: computeHash,
};

